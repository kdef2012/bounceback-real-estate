import Link from 'next/link';
import { Sparkles, Activity, View, Building2, Map, Scale, TrendingUp, Handshake, Eye, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <header id="home" className="hero" style={{ backgroundImage: "url('/assets/hero.png')" }}>
        <div className="hero-content">
          <h1 className="hero-title">Experience the Future of Real Estate</h1>
          <p className="hero-subtitle">Bounceback Real Estate Group brings AI-driven match-making, absolute transparency, and luxury curation to your next move.</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter City, Neighborhood, or Zip" />
            <select>
              <option>Any Price</option>
              <option>$500k - $1M</option>
              <option>$1M - $5M</option>
              <option>$5M+</option>
            </select>
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </header>

      <section id="revolutionary" className="section-container bg-dark">
        <h2 className="section-title">Revolutionary Platform Features</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <div className="feature-icon"><Sparkles size={32} /></div>
            <h3>"Life Event" Smart Search</h3>
            <p>Our AI analyzes your life changes—new baby, new job, or retirement—to recommend homes and neighborhoods that perfectly fit your upcoming lifestyle needs.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon"><Activity size={32} /></div>
            <h3>Live Zoning & Development Tracker</h3>
            <p>Don't get surprised by a skyscraper blocking your view. See real-time municipal permit data overlaid on the map to know exactly what's being built around your future home.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><View size={32} /></div>
            <h3>Hyper-Realistic Multiplayer Virtual Open Houses</h3>
            <p>Join a live, scheduled virtual open house. An agent walks through the home with a 360-camera while you tune in via browser or VR headset, asking real-time questions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Scale size={32} /></div>
            <h3>Transparent "Bidding War" Auction Mode</h3>
            <p>No more blind offers. If sellers opt-in, buyers can see exactly what other verified offers are on the table in real-time, removing the anxiety of the negotiation process.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><TrendingUp size={32} /></div>
            <h3>Instant Renovation ROI Scanner</h3>
            <p>Upload a photo of an outdated kitchen on a listing, and our AI instantly estimates the cost to renovate it and calculates how much equity it would add to the home's value.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Handshake size={32} /></div>
            <h3>"Make Me Move" Off-Market Network</h3>
            <p>Homeowners can secretly list their "Make Me Move" price without officially listing the house. Buyers willing to pay that premium get exclusive access to unlisted inventory.</p>
          </div>
        </div>
      </section>

      <section id="listings" className="section-container">
        <h2 className="section-title">Exclusive Featured Listings</h2>
        <div className="listings-grid">
          
          <div className="listing-card">
            <div className="listing-image" id="prop1-img" style={{ backgroundImage: "url('/assets/prop1.png')" }}>
              <span className="listing-badge">Exclusive</span>
            </div>
            <div className="listing-details">
              <div className="listing-price">$4,250,000</div>
              <h3 className="listing-address">The Glass House Reserve</h3>
              <div className="listing-meta">
                <span><Eye size={16} /> 4 Beds</span>
                <span><Map size={16} /> 5 Baths</span>
                <span><MapPin size={16} /> 6,200 sqft</span>
              </div>
            </div>
          </div>

          <div className="listing-card">
            <div className="listing-image" id="prop2-img" style={{ backgroundImage: "url('/assets/prop2.png')" }}>
              <span className="listing-badge">Just Listed</span>
            </div>
            <div className="listing-details">
              <div className="listing-price">$8,900,000</div>
              <h3 className="listing-address">Skyline Penthouse Collection</h3>
              <div className="listing-meta">
                <span><Eye size={16} /> 3 Beds</span>
                <span><Map size={16} /> 4.5 Baths</span>
                <span><MapPin size={16} /> 4,100 sqft</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Dominate the Market?</h2>
          <p>Join our waitlist for the Make Me Move network or talk to our agents today.</p>
          <div className="cta-buttons">
            <Link href="/valuation" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Get Home Valuation</Link>
            <Link href="/contact" className="btn-outline-light" style={{ textDecoration: 'none', display: 'inline-block' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
