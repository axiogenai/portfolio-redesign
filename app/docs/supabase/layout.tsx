import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClinicOS × Supabase Integration & Technical Spec | Team Axiogen',
  description:
    'Production technical architecture, data models, realtime WebSocket orchestration, and healthcare compliance powering ClinicOS on Supabase cloud infrastructure.',
  openGraph: {
    title: 'ClinicOS × Supabase Integration & Technical Spec | Team Axiogen',
    description:
      'Production technical architecture, data models, realtime WebSocket orchestration, and healthcare compliance powering ClinicOS on Supabase cloud infrastructure.',
    url: 'https://team.axiogen.in/docs/supabase',
    siteName: 'Team Axiogen',
    type: 'website',
  },
};

export default function SupabaseDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
