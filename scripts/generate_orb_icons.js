const sharp = require('sharp');
const fs = require('fs');

const C = [[255, 120, 80], [225, 60, 50], [165, 25, 35]];
const gc = m => {
  m = m < 0 ? 0 : m > 1 ? 1 : m;
  const a = m < 0.5 ? C[0] : C[1];
  const b = m < 0.5 ? C[1] : C[2];
  const f = m < 0.5 ? m * 2 : m * 2 - 1;
  return a.map((x, i) => x + (b[i] - x) * f);
};

const html = fs.readFileSync('C:/Users/aditya/Downloads/Axiogen orb (1).html', 'utf8');
const pStart = html.indexOf('const P=');
const pEnd = html.indexOf(',TAU=Math.PI*2', pStart);
const pCode = html.slice(pStart + 'const P='.length, pEnd);
const P = JSON.parse(pCode);
console.log('Points count:', P.length);

function renderSvg(S, t = 1.2) {
  const cx = S / 2;
  const R = S / 2 * 0.88;
  const rs = Math.pow(S / 300, 0.6) * 1.5;
  const cl = v => v < 0 ? 0 : v > 1 ? 1 : v;

  const yaw = 0.26 * Math.sin(t * 0.5);
  const tilt = 0.14 * Math.sin(t * 0.33);
  const sy = Math.sin(yaw), cw = Math.cos(yaw);
  const st = Math.sin(tilt), ct = Math.cos(tilt);
  const wave = (((t * 0.38) % 1 + 1) % 1) * 2.6 - 1.3;

  const D = [];
  for (const [gx, gy, e] of P) {
    const pz = -gx * sy, py = -gy * ct - pz * st, z = -gy * st + pz * ct, dep = (z + 1) / 2;
    const cr = Math.exp(-Math.pow(gx * 0.5 + gy * 0.87 - wave, 2) / 0.05);
    D.push({
      x: cx + gx * cw * R,
      y: cx - py * R,
      z,
      r: (0.75 + 0.75 * dep + (e ? 0.25 : 0) + 0.5 * cr) * rs,
      v: cl((e ? 0.62 : 0.5) + 0.14 * dep + 0.3 * cr),
      c: gc((gy + 1) / 2)
    });
  }
  D.sort((a, b) => a.z - b.z);

  let circles = '';
  for (const d of D) {
    const g = d.v * 255;
    const l = Math.min(1, d.v * 1.12);
    const k = 0.95;
    let rgb = [0, 1, 2].map(i => g * (1 - k) + d.c[i] * l * k);
    if (d.v > 0.85) {
      const w = (d.v - 0.85) / 0.15 * 0.45;
      rgb = rgb.map(x => x + (255 - x) * w);
    }
    const color = `rgb(${rgb[0]|0},${rgb[1]|0},${rgb[2]|0})`;
    const radius = Math.max(1, d.r);
    circles += `<circle cx="${d.x.toFixed(2)}" cy="${d.y.toFixed(2)}" r="${radius.toFixed(2)}" fill="${color}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}"><rect width="${S}" height="${S}" fill="#000000"/>${circles}</svg>`;
}

async function main() {
  const svg512 = renderSvg(512, 1.2);
  fs.writeFileSync('public/icon-orb.svg', svg512);

  // Generate 512, 192, 96, 48, 180 pngs
  await sharp(Buffer.from(svg512)).resize(512, 512).png().toFile('public/icon.png');
  await sharp(Buffer.from(svg512)).resize(512, 512).png().toFile('app/icon.png');
  await sharp(Buffer.from(svg512)).resize(192, 192).png().toFile('public/icon-192x192.png');
  await sharp(Buffer.from(svg512)).resize(96, 96).png().toFile('public/icon-96x96.png');
  await sharp(Buffer.from(svg512)).resize(48, 48).png().toFile('public/icon-48x48.png');
  await sharp(Buffer.from(svg512)).resize(180, 180).png().toFile('public/apple-touch-icon.png');

  // Build favicon.ico
  const sizes = [16, 32, 48, 64];
  const images = await Promise.all(sizes.map(s => {
    const sSvg = renderSvg(s * 2, 1.2);
    return sharp(Buffer.from(sSvg)).resize(s, s).png().toBuffer();
  }));

  const dirEntrySize = 16;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  const dataOffset = 6 + sizes.length * dirEntrySize;
  const entries = [];
  let offset = dataOffset;
  for (let i = 0; i < sizes.length; i++) {
    const e = Buffer.alloc(dirEntrySize);
    e[0] = sizes[i] >= 256 ? 0 : sizes[i];
    e[1] = sizes[i] >= 256 ? 0 : sizes[i];
    e[2] = 0;
    e[3] = 0;
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(images[i].length, 8);
    e.writeUInt32LE(offset, 12);
    offset += images[i].length;
    entries.push(e);
  }
  fs.writeFileSync('public/favicon.ico', Buffer.concat([header, ...entries, ...images]));
  fs.writeFileSync('app/favicon.ico', Buffer.concat([header, ...entries, ...images]));

  console.log('Successfully generated static favicon files from Axiogen orb!');
}

main().catch(console.error);
