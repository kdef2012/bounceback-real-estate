import { Users, Target, ShieldCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main>
      <header className="page-header" style={{ padding: '180px 20px 80px', textAlign: 'center', background: 'var(--clr-darker)' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>About Bounceback</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--clr-gold)' }}>Your comeback is our commitment. Read our story.</p>
      </header>

      {/* Our Story Section */}
      <section className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'var(--clr-white)', marginBottom: '20px', fontSize: '2.5rem' }}>Pioneering the Future of Real Estate</h2>
            <p style={{ color: 'var(--clr-gray)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.1rem' }}>
              At Bounceback Real Estate Group, we believe that finding a home shouldn't be a transaction—it should be a transformation. Founded with the vision to strip away the opacity of traditional real estate, we leverage cutting-edge AI and data analytics to empower our clients.
            </p>
            <p style={{ color: 'var(--clr-gray)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              Whether you are buying your first home, securing a luxury penthouse, or seeking off-market investment opportunities, our revolutionary platform and dedicated team ensure you always have the upper hand.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
             <Image src="/assets/headshot1.png" alt="Founder of Bounceback Real Estate" width={600} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
             <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 style={{ color: 'var(--clr-gold)', fontSize: '1.5rem', marginBottom: '5px' }}>Valerie James</h3>
                <p style={{ color: 'var(--clr-white)' }}>Founder & Principal Broker</p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: 'var(--clr-dark)', padding: '80px 20px' }}>
        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--clr-white)', textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem' }}>Our Core Pillars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: 'var(--clr-black)', padding: '40px', borderRadius: '15px', border: '1px solid var(--clr-border)', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Target size={30} style={{ color: 'var(--clr-gold)' }} />
              </div>
              <h3 style={{ color: 'var(--clr-white)', marginBottom: '15px' }}>Precision Matching</h3>
              <p style={{ color: 'var(--clr-gray)', lineHeight: '1.6' }}>We don't just find houses; we use AI to match you with properties that perfectly align with your life events.</p>
            </div>

            <div style={{ background: 'var(--clr-black)', padding: '40px', borderRadius: '15px', border: '1px solid var(--clr-border)', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <ShieldCheck size={30} style={{ color: 'var(--clr-gold)' }} />
              </div>
              <h3 style={{ color: 'var(--clr-white)', marginBottom: '15px' }}>Absolute Transparency</h3>
              <p style={{ color: 'var(--clr-gray)', lineHeight: '1.6' }}>From live zoning analytics to open bidding wars, we give you the data that other brokerages hide.</p>
            </div>

            <div style={{ background: 'var(--clr-black)', padding: '40px', borderRadius: '15px', border: '1px solid var(--clr-border)', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <TrendingUp size={30} style={{ color: 'var(--clr-gold)' }} />
              </div>
              <h3 style={{ color: 'var(--clr-white)', marginBottom: '15px' }}>Market Dominance</h3>
              <p style={{ color: 'var(--clr-gray)', lineHeight: '1.6' }}>Our exclusive "Make Me Move" network unlocks off-market inventory that gives our buyers the ultimate edge.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Team / Agent Focus */}
      <section className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
           <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', order: -1 }}>
             <Image src="/assets/headshot2.png" alt="Executive Team Member" width={600} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
             <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 style={{ color: 'var(--clr-gold)', fontSize: '1.5rem', marginBottom: '5px' }}>Executive Leadership</h3>
                <p style={{ color: 'var(--clr-white)' }}>Driving Innovation in Real Estate</p>
             </div>
          </div>
          <div style={{ order: 0 }}>
            <h2 style={{ color: 'var(--clr-white)', marginBottom: '20px', fontSize: '2.5rem' }}>An Elite Roster of Negotiators</h2>
            <p style={{ color: 'var(--clr-gray)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.1rem' }}>
              Our agents are more than just licensed realtors; they are local market economists, tech-forward strategists, and relentless advocates for your bottom line.
            </p>
            <p style={{ color: 'var(--clr-gray)', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.1rem' }}>
              Armed with proprietary tools like our ROI Scanner and Live Zoning feeds, the Bounceback team identifies hidden value where others only see a listing.
            </p>
            <a href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Work With Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
