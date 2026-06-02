"use client";

import { Heart, Calendar, Sparkles, Settings } from 'lucide-react';
import Link from 'next/link';

export default function BuyerDashboard() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid var(--clr-border)', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ color: 'var(--clr-white)', fontSize: '2rem', marginBottom: '5px' }}>Buyer Dashboard</h1>
          <p style={{ color: 'var(--clr-gray)' }}>Welcome back! Here are your curated matches and saved homes.</p>
        </div>
        <button className="btn-outline-light" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Settings size={18} /> Settings
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        <div style={{ background: 'var(--clr-darker)', borderRadius: '20px', padding: '30px', border: '1px solid var(--clr-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(197, 160, 89, 0.1)', padding: '15px', borderRadius: '50%' }}><Sparkles size={24} style={{ color: 'var(--clr-gold)' }} /></div>
            <h2 style={{ color: 'var(--clr-white)' }}>AI Matchmaker</h2>
          </div>
          <p style={{ color: 'var(--clr-gray)', marginBottom: '15px' }}><strong>Priority:</strong> Top-Rated Schools</p>
          <p style={{ color: 'var(--clr-gray)', marginBottom: '25px' }}><strong>Timeline:</strong> Soon (1-3 Months)</p>
          <Link href="/matchmaker" className="btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Update Profile</Link>
        </div>

        <div style={{ background: 'var(--clr-darker)', borderRadius: '20px', padding: '30px', border: '1px solid var(--clr-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(255, 100, 100, 0.1)', padding: '15px', borderRadius: '50%' }}><Heart size={24} style={{ color: '#ff6b6b' }} /></div>
            <h2 style={{ color: 'var(--clr-white)' }}>Saved Homes</h2>
          </div>
          <p style={{ color: 'var(--clr-white)', fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px' }}>3 <span style={{ fontSize: '1rem', color: 'var(--clr-gray)', fontWeight: 'normal' }}>Properties</span></p>
          <p style={{ color: 'var(--clr-gray)', marginBottom: '25px' }}>You have new active bids on a saved home!</p>
          <Link href="/listings" className="btn-outline-light" style={{ width: '100%', display: 'block', textAlign: 'center', textDecoration: 'none' }}>View Saved List</Link>
        </div>

        <div style={{ background: 'var(--clr-darker)', borderRadius: '20px', padding: '30px', border: '1px solid var(--clr-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(100, 200, 255, 0.1)', padding: '15px', borderRadius: '50%' }}><Calendar size={24} style={{ color: '#64c8ff' }} /></div>
            <h2 style={{ color: 'var(--clr-white)' }}>Virtual Tours</h2>
          </div>
          <div style={{ background: 'var(--clr-black)', padding: '15px', borderRadius: '10px', border: '1px solid var(--clr-border)', marginBottom: '15px' }}>
            <p style={{ color: 'var(--clr-white)', fontWeight: 'bold' }}>The Glass House Reserve</p>
            <p style={{ color: 'var(--clr-gray)', fontSize: '0.9rem' }}>Tomorrow @ 2:00 PM EST</p>
          </div>
          <button className="btn-outline-light" style={{ width: '100%', opacity: 0.5 }}>Join Lobby (Starts Soon)</button>
        </div>

      </div>
    </main>
  );
}
