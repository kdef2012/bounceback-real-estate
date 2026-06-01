"use client";

import { useState } from 'react';
import { Building2, Map as MapIcon, AlertTriangle, Layers, Info } from 'lucide-react';

export default function ZoningPage() {
  const [activeLayer, setActiveLayer] = useState('zoning'); // zoning, permits, flood

  const SidebarItem = ({ icon: Icon, title, description, active }) => (
    <div style={{ display: 'flex', gap: '15px', padding: '15px', background: active ? 'rgba(197, 160, 89, 0.1)' : 'transparent', borderLeft: active ? '4px solid var(--clr-gold)' : '4px solid transparent', cursor: 'pointer', transition: 'all 0.2s' }} onClick={() => setActiveLayer(title.toLowerCase().split(' ')[0])}>
      <Icon size={24} style={{ color: active ? 'var(--clr-gold)' : 'var(--clr-gray)' }} />
      <div>
        <h4 style={{ color: 'var(--clr-white)', marginBottom: '5px' }}>{title}</h4>
        <p style={{ color: 'var(--clr-gray)', fontSize: '0.85rem' }}>{description}</p>
      </div>
    </div>
  );

  return (
    <main>
      <header className="page-header" style={{ padding: '120px 20px 40px', textAlign: 'center', background: 'var(--clr-darker)' }}>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Live Zoning & Permit Analytics</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--clr-gold)' }}>Never get surprised by a skyscraper blocking your view again.</p>
      </header>

      <section style={{ display: 'flex', height: 'calc(100vh - 250px)', minHeight: '600px', borderTop: '1px solid var(--clr-border)', borderBottom: '1px solid var(--clr-border)' }}>
        
        {/* Sidebar Controls */}
        <div style={{ width: '350px', background: 'var(--clr-dark)', overflowY: 'auto', borderRight: '1px solid var(--clr-border)' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid var(--clr-border)' }}>
            <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}><Layers size={20} /> Map Overlays</h3>
          </div>
          
          <SidebarItem 
            icon={Building2} 
            title="Zoning Data" 
            description="View commercial vs residential zones and height restrictions." 
            active={activeLayer === 'zoning'} 
          />
          <SidebarItem 
            icon={AlertTriangle} 
            title="Active Permits" 
            description="See live construction permits pulled from municipal feeds." 
            active={activeLayer === 'active'} 
          />
          <SidebarItem 
            icon={MapIcon} 
            title="Flood Zones" 
            description="FEMA 100-year and 500-year flood risk boundaries." 
            active={activeLayer === 'flood'} 
          />

          <div style={{ padding: '20px', marginTop: '20px' }}>
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', gap: '10px' }}>
              <Info size={20} style={{ color: 'var(--clr-gold)', flexShrink: 0 }} />
              <p style={{ color: 'var(--clr-gray)', fontSize: '0.85rem' }}>Select an area on the map to view detailed parcel data, lot lines, and developer history.</p>
            </div>
          </div>
        </div>

        {/* Fake Interactive Map Area */}
        <div style={{ flex: 1, position: 'relative', background: '#1a1a24', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          
          {/* Map Grid Background Simulation */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }} />

          {/* Fake Map Features based on active layer */}
          {activeLayer === 'zoning' && (
            <>
              <div style={{ position: 'absolute', top: '20%', left: '30%', width: '200px', height: '150px', background: 'rgba(197, 160, 89, 0.2)', border: '2px solid var(--clr-gold)', borderRadius: '4px' }}>
                <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--clr-gold)', fontWeight: 'bold' }}>Mixed Use (High Density)</span>
              </div>
              <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '300px', height: '250px', background: 'rgba(100, 200, 100, 0.1)', border: '2px solid rgba(100,200,100,0.5)', borderRadius: '4px' }}>
                <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(100,200,100,0.8)', fontWeight: 'bold' }}>Residential (Single Family)</span>
              </div>
            </>
          )}

          {activeLayer === 'active' && (
            <>
              <div style={{ position: 'absolute', top: '35%', left: '45%', animation: 'pulseMap 2s infinite' }}>
                <AlertTriangle size={32} style={{ color: '#ff4444' }} />
                <div style={{ background: '#222', padding: '10px', borderRadius: '8px', color: 'white', marginTop: '10px', width: '200px', border: '1px solid #444', position: 'relative', zIndex: 10 }}>
                  <strong>Demo Permit #8892</strong><br/>
                  <span style={{ fontSize: '0.8rem', color: '#aaa' }}>30-story commercial tower approved. Will obstruct south-facing views.</span>
                </div>
              </div>
            </>
          )}

          {activeLayer === 'flood' && (
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '120%', height: '40%', background: 'rgba(50, 150, 255, 0.2)', borderTop: '2px solid rgba(50,150,255,0.6)', transform: 'rotate(-5deg)' }}>
              <span style={{ position: 'absolute', top: '20px', left: '20%', color: 'rgba(50, 150, 255, 0.8)', fontWeight: 'bold' }}>FEMA 100-Year Flood Zone (Zone AE)</span>
            </div>
          )}

        </div>

      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseMap { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }
      `}} />
    </main>
  );
}
