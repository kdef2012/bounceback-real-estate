"use client";

import { useState } from 'react';
import { BarChart3, Home, CheckCircle2 } from 'lucide-react';

export default function ValuationPage() {
  const [formData, setFormData] = useState({ address: '', sqft: '', beds: '', baths: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [valuationData, setValuationData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setValuationData(data);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <main>
      <header className="page-header" style={{ padding: '150px 20px 80px', textAlign: 'center', background: 'var(--clr-darker)' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Instant Home Valuation</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--clr-gold)' }}>Discover your home's hidden equity powered by our AI.</p>
      </header>

      <section className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {status === 'success' && valuationData ? (
          <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '20px', border: '1px solid var(--clr-gold)' }}>
            <h2 style={{ color: 'var(--clr-white)', marginBottom: '10px' }}>Estimated Value for:</h2>
            <p style={{ color: 'var(--clr-gray)', fontSize: '1.2rem', marginBottom: '30px' }}>{formData.address}</p>
            
            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--clr-gold)', marginBottom: '10px' }}>
              {formatCurrency(valuationData.estimatedValue)}
            </div>
            
            <p style={{ color: 'var(--clr-white)', marginBottom: '40px' }}>
              Estimated Range: {formatCurrency(valuationData.rangeLow)} - {formatCurrency(valuationData.rangeHigh)}
            </p>

            <h3 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Ready to unlock this equity?</h3>
            <button onClick={() => window.location.href='/contact'} className="btn-primary">Connect with an Agent</button>
            <br/><br/>
            <button onClick={() => { setStatus('idle'); setValuationData(null); setFormData({ address: '', sqft: '', beds: '', baths: '' }); }} className="btn-outline" style={{ marginTop: '20px' }}>Evaluate Another Property</button>
          </div>
        ) : (
          <div style={{ padding: '40px', background: 'rgba(17,17,17,0.5)', borderRadius: '20px', border: '1px solid var(--clr-border)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>Property Address</label>
                <input required type="text" placeholder="123 Main St, City, ST 12345" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>Sqft</label>
                  <input required type="number" placeholder="2500" value={formData.sqft} onChange={e => setFormData({...formData, sqft: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>Beds</label>
                  <input required type="number" placeholder="4" value={formData.beds} onChange={e => setFormData({...formData, beds: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>Baths</label>
                  <input required type="number" step="0.5" placeholder="2.5" value={formData.baths} onChange={e => setFormData({...formData, baths: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} />
                </div>
              </div>

              <button type="submit" className="btn-primary" disabled={status === 'submitting'} style={{ opacity: status === 'submitting' ? 0.7 : 1, marginTop: '20px' }}>
                {status === 'submitting' ? 'Analyzing Market Data...' : 'Get Instant Valuation'}
              </button>
              {status === 'error' && <p style={{ color: '#ff4444', marginTop: '10px', textAlign: 'center' }}>Failed to calculate valuation. Please try again.</p>}
            </form>
          </div>
        )}

      </section>
    </main>
  );
}
