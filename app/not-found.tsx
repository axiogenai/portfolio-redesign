import type { Metadata } from 'next';
import SystemErrorPanel from '@/components/ui';

export const metadata: Metadata = {
  title: '404 - Destination Not Accessible | Team Axiogen',
  description: 'The requested resource or page could not be located on the Axiogen network.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none" />
      <div className="w-full max-w-5xl z-10">
        <SystemErrorPanel
          code="404"
          title="This destination isn’t accessible."
          description="The resource you attempted to open may have been moved, archived, or temporarily disconnected from the Axiogen network."
          buttonLabel="Return to Axiogen Base"
          href="/"
        />
      </div>
    </main>
  );
}
