import { Box, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <header className="page-header" style={{ padding: '180px 20px 80px', textAlign: 'center', background: 'var(--clr-darker)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div className="feature-icon" style={{ margin: 0, background: 'rgba(197, 160, 89, 0.15)' }}>
            <Box size={32} />
          </div>
        </div>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Digital Twins</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--clr-gold)' }}>Immersive 3D interactive home models.</p>
      </header>

      <section className="section-container" style={{ minHeight: '40vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Wrench size={48} style={{ color: 'var(--clr-gray)', marginBottom: '20px' }} />
        <h2 style={{ color: 'var(--clr-white)', marginBottom: '15px' }}>Under Construction</h2>
        <p style={{ color: 'var(--clr-gray)', maxWidth: '500px' }}>This page is currently being built by the Bounceback team. Check the Task List to complete manual integrations.</p>
        <Link href="/" className="btn-outline" style={{ marginTop: '30px', textDecoration: 'none' }}>Return Home</Link>
      </section>
    </main>
  );
}
