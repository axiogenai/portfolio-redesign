import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json({ success: false, error: 'Database not initialized' }, { status: 500 });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('settings')
      .select('value')
      .eq('key', 'selected_work')
      .single();

    if (error || !data?.value) {
      return NextResponse.json({ success: false, error: 'No custom config found' }, { status: 404 });
    }

    const parsed = JSON.parse(data.value);
    return NextResponse.json(
      { success: true, data: parsed },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
