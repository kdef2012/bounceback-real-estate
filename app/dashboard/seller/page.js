"use client";

import { Home, TrendingUp, Handshake, Activity } from 'lucide-react';
import Link from 'next/link';

export default function SellerDashboard() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid var(--clr-border)', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ color: 'var(--clr-white)', fontSize: '2rem', marginBottom: '5px' }}>Seller Dashboard</h1>
          <p style={{ color: 'var(--clr-gray)' }}>Manage your claimed properties and active bids.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Home size={18} /> Claim New Property
        </button>
      </header>

      {/* Equity Tracker Widget */}
      <section style={{ background: 'var(--clr-darker)', borderRadius: '20px', padding: '30px', border: '1px solid var(--clr-border)', marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <h2 style={{ color: 'var(--clr-white)' }}>Your Claimed Property</h2>
              <span style={{ background: 'rgba(197, 160, 89, 0.2)', color: 'var(--clr-gold)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>Verified Owner</span>
            </div>
            <p style={{ color: 'var(--clr-gray)' }}>2203 Eastchester Drive, High Point, NC 27265</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'var(--clr-gray)', marginBottom: '5px' }}>Estimated Equity Value</p>
            <p style={{ color: 'var(--clr-gold)', fontSize: '2.5rem', fontWeight: 'bold' }}>$845,000</p>
            <p style={{ color: '#51CE70', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}><TrendingUp size={16} /> +4.2% since last month</p>
          </div>
        </div>

        {/* Fake Graph Area */}
        <div style={{ height: '200px', background: 'linear-gradient(to top, rgba(197, 160, 89, 0.1), transparent)', borderBottom: '2px solid var(--clr-gold)', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '10px', height: '10px', background: 'var(--clr-gold)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '40%', left: '30%', width: '10px', height: '10px', background: 'var(--clr-gold)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '35%', left: '50%', width: '10px', height: '10px', background: 'var(--clr-gold)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '60%', left: '70%', width: '10px', height: '10px', background: 'var(--clr-gold)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '80%', left: '90%', width: '10px', height: '10px', background: 'var(--clr-white)', borderRadius: '50%', boxShadow: '0 0 10px var(--clr-white)' }}></div>
          
          <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }} preserveAspectRatio="none" viewBox="0 0 100 100">
            <polyline points="0,100 10,80 30,60 50,65 70,40 90,20 100,20" fill="none" stroke="var(--clr-gold)" strokeWidth="1" />
          </svg>
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Make Me Move Settings */}
        <div style={{ background: 'var(--clr-darker)', borderRadius: '20px', padding: '30px', border: '1px solid var(--clr-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(197, 160, 89, 0.1)', padding: '15px', borderRadius: '50%' }}><Handshake size={24} style={{ color: 'var(--clr-gold)' }} /></div>
            <h2 style={{ color: 'var(--clr-white)' }}>"Make Me Move"</h2>
          </div>
          <p style={{ color: 'var(--clr-gray)', marginBottom: '20px' }}>Your property is currently listed privately to verified buyers.</p>
          <div style={{ background: 'var(--clr-black)', padding: '15px', borderRadius: '10px', border: '1px solid var(--clr-border)', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--clr-gray)' }}>Premium Price:</span>
            <span style={{ color: 'var(--clr-white)', fontWeight: 'bold', fontSize: '1.2rem' }}>$950,000</span>
          </div>
          <button className="btn-outline-light" style={{ width: '100%' }}>Edit Network Settings</button>
        </div>

        {/* Live Bidding War */}
        <div style={{ background: 'var(--clr-darker)', borderRadius: '20px', padding: '30px', border: '1px solid var(--clr-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(50, 200, 100, 0.1)', padding: '15px', borderRadius: '50%' }}><Activity size={24} style={{ color: '#51CE70' }} /></div>
            <h2 style={{ color: 'var(--clr-white)' }}>Live Bidding War</h2>
          </div>
          <p style={{ color: 'var(--clr-gray)', marginBottom: '20px' }}>You have 2 active verified bids from pre-approved buyers.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <div style={{ background: 'var(--clr-black)', padding: '15px', borderRadius: '10px', border: '1px solid var(--clr-gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: 'var(--clr-white)', fontWeight: 'bold' }}>Bid #2094</span>
                <span style={{ color: 'var(--clr-gold)', fontWeight: 'bold' }}>$925,000</span>
              </div>
              <span style={{ fontSize: '0.8rem', color: '#51CE70' }}>Mortgage Pre-Approved</span>
            </div>
            <div style={{ background: 'var(--clr-black)', padding: '15px', borderRadius: '10px', border: '1px solid var(--clr-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: 'var(--clr-gray)', fontWeight: 'bold' }}>Bid #1102</span>
                <span style={{ color: 'var(--clr-white)', fontWeight: 'bold' }}>$900,000</span>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--clr-gray)' }}>Cash Offer</span>
            </div>
          </div>
          <button className="btn-primary" style={{ width: '100%' }}>Enter Negotiation Room</button>
        </div>

      </div>
    </main>
  );
}
