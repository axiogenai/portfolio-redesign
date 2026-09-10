import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { DEFAULT_WEBSITE_MEDIA } from '@/lib/defaultMedia';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { success: true, data: DEFAULT_WEBSITE_MEDIA },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('settings')
      .select('value')
      .eq('key', 'website_media')
      .single();

    if (error || !data?.value) {
      return NextResponse.json(
        { success: true, data: DEFAULT_WEBSITE_MEDIA, isDefault: true },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    const parsed = JSON.parse(data.value);
    return NextResponse.json(
      { success: true, data: { ...DEFAULT_WEBSITE_MEDIA, ...parsed } },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch {
    return NextResponse.json(
      { success: true, data: DEFAULT_WEBSITE_MEDIA, fallback: true },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}
