import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { DEFAULT_SHOWCASE_PROJECTS } from '@/lib/defaultOurWork';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { success: true, data: DEFAULT_SHOWCASE_PROJECTS },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('settings')
      .select('value')
      .eq('key', 'our_work_showcase')
      .single();

    if (error || !data?.value) {
      return NextResponse.json(
        { success: true, data: DEFAULT_SHOWCASE_PROJECTS, isDefault: true },
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
      { success: true, data: DEFAULT_SHOWCASE_PROJECTS, fallback: true },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}
