import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { DEFAULT_SERVICES } from '@/lib/defaultServices';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { success: true, data: DEFAULT_SERVICES },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('settings')
      .select('value')
      .eq('key', 'services_deck')
      .single();

    if (error || !data?.value) {
      return NextResponse.json(
        { success: true, data: DEFAULT_SERVICES, isDefault: true },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    const parsed = JSON.parse(data.value);
    return NextResponse.json(
      { success: true, data: parsed },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch {
    return NextResponse.json(
      { success: true, data: DEFAULT_SERVICES, fallback: true },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}
