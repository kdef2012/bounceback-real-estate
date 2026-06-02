"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main>
      <header className="page-header" style={{ padding: '150px 20px 80px', textAlign: 'center', background: 'var(--clr-darker)' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Contact Us</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--clr-gold)' }}>Connect with a Bounceback agent today.</p>
      </header>

      <section className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ padding: '40px', background: 'rgba(17,17,17,0.5)', borderRadius: '20px', border: '1px solid var(--clr-border)' }}>
          <h2 style={{ color: 'var(--clr-white)', marginBottom: '30px' }}>Send us a message</h2>
          
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle2 size={64} style={{ color: 'var(--clr-gold)', margin: '0 auto 20px' }} />
              <h3 style={{ color: 'var(--clr-white)', marginBottom: '10px' }}>Message Sent!</h3>
              <p style={{ color: 'var(--clr-gray)' }}>An agent will be in touch with you shortly.</p>
              <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: '20px' }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>Full Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>Phone Number</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--clr-gray)' }}>How can we help?</label>
                <textarea required rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }}></textarea>
              </div>
              <button type="submit" className="btn-primary" disabled={status === 'submitting'} style={{ opacity: status === 'submitting' ? 0.7 : 1 }}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && <p style={{ color: '#ff4444', marginTop: '10px' }}>Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>

        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>Contact Information</h3>
            <p style={{ color: 'var(--clr-gray)', marginBottom: '30px', lineHeight: 1.6 }}>We are available 24/7 to answer your real estate questions. Reach out directly or drop by our headquarters.</p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail style={{ color: 'var(--clr-gold)' }} />
            </div>
            <div>
              <p style={{ color: 'var(--clr-gray)', fontSize: '0.9rem', marginBottom: '4px' }}>Email Us</p>
              <p style={{ color: 'var(--clr-white)', fontWeight: 'bold' }}>vjamesis@outlook.com</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone style={{ color: 'var(--clr-gold)' }} />
            </div>
            <div>
              <p style={{ color: 'var(--clr-gray)', fontSize: '0.9rem', marginBottom: '4px' }}>Call Us</p>
              <p style={{ color: 'var(--clr-white)', fontWeight: 'bold' }}>(336) 307-9512</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin style={{ color: 'var(--clr-gold)' }} />
            </div>
            <div>
              <p style={{ color: 'var(--clr-gray)', fontSize: '0.9rem', marginBottom: '4px' }}>Headquarters</p>
              <p style={{ color: 'var(--clr-white)', fontWeight: 'bold' }}>2203 Eastchester Drive<br/>High Point, NC 27265</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
