"use client";

import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function MatchmakerPage() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ lifeEvent: '', priority: '', timeframe: '' });
  const [analyzing, setAnalyzing] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handleSelect = (field, value) => setSelections({ ...selections, [field]: value });

  const submitAnalysis = () => {
    setStep(4);
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResultsReady(true);
    }, 2500); // Fake AI analyzing delay
  };

  const OptionCard = ({ label, field, value }) => (
    <div 
      onClick={() => handleSelect(field, value)}
      style={{ 
        padding: '20px', 
        borderRadius: '12px', 
        border: `2px solid ${selections[field] === value ? 'var(--clr-gold)' : 'var(--clr-border)'}`, 
        background: selections[field] === value ? 'rgba(197, 160, 89, 0.1)' : 'rgba(17,17,17,0.5)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
      }}
    >
      {label}
    </div>
  );

  return (
    <main>
      <header className="page-header" style={{ padding: '150px 20px 60px', textAlign: 'center', background: 'var(--clr-darker)' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>AI Matchmaker</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--clr-gold)' }}>Find your perfect home based on your life events.</p>
      </header>

      <section className="section-container" style={{ maxWidth: '800px', margin: '0 auto', minHeight: '50vh' }}>
        
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h2 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>What life event is prompting your move?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <OptionCard field="lifeEvent" value="new_baby" label="Expecting a Baby" />
              <OptionCard field="lifeEvent" value="new_job" label="New Job / Relocation" />
              <OptionCard field="lifeEvent" value="empty_nest" label="Empty Nester / Downsizing" />
              <OptionCard field="lifeEvent" value="marriage" label="Getting Married" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button onClick={handleNext} disabled={!selections.lifeEvent} className="btn-primary" style={{ opacity: !selections.lifeEvent ? 0.5 : 1 }}>
                Continue <ArrowRight size={18} style={{ display: 'inline', marginLeft: '5px', verticalAlign: 'middle' }} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h2 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>What is your highest priority?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <OptionCard field="priority" value="schools" label="Top-Rated Schools" />
              <OptionCard field="priority" value="commute" label="Short Commute" />
              <OptionCard field="priority" value="quiet" label="Quiet & Secluded" />
              <OptionCard field="priority" value="nightlife" label="Walkable & Nightlife" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button onClick={handleNext} disabled={!selections.priority} className="btn-primary" style={{ opacity: !selections.priority ? 0.5 : 1 }}>
                Continue <ArrowRight size={18} style={{ display: 'inline', marginLeft: '5px', verticalAlign: 'middle' }} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h2 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>When do you need to move?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <OptionCard field="timeframe" value="asap" label="ASAP (0-30 Days)" />
              <OptionCard field="timeframe" value="soon" label="Soon (1-3 Months)" />
              <OptionCard field="timeframe" value="flexible" label="Flexible (3-6 Months)" />
              <OptionCard field="timeframe" value="browsing" label="Just Browsing" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button onClick={submitAnalysis} disabled={!selections.timeframe} className="btn-primary" style={{ opacity: !selections.timeframe ? 0.5 : 1 }}>
                Generate Matches <Sparkles size={18} style={{ display: 'inline', marginLeft: '5px', verticalAlign: 'middle' }} />
              </button>
            </div>
          </div>
        )}

        {step === 4 && analyzing && (
          <div style={{ textAlign: 'center', padding: '60px 0', animation: 'fadeIn 0.5s' }}>
            <Sparkles size={64} style={{ color: 'var(--clr-gold)', margin: '0 auto 20px', animation: 'pulse 1.5s infinite' }} />
            <h2 style={{ color: 'white', marginBottom: '15px' }}>AI is analyzing the market...</h2>
            <p style={{ color: 'var(--clr-gray)' }}>Cross-referencing your profile with live listings, school districts, and off-market data.</p>
          </div>
        )}

        {step === 4 && resultsReady && (
          <div style={{ textAlign: 'center', padding: '40px 0', animation: 'fadeIn 0.5s' }}>
            <CheckCircle2 size={64} style={{ color: 'var(--clr-gold)', margin: '0 auto 20px' }} />
            <h2 style={{ color: 'white', marginBottom: '15px' }}>We found 12 perfect matches!</h2>
            <p style={{ color: 'var(--clr-gray)', marginBottom: '30px' }}>Based on your need for <strong>{selections.priority}</strong> and moving <strong>{selections.timeframe}</strong>.</p>
            <Link href="/listings" className="btn-primary" style={{ textDecoration: 'none' }}>View Your Curated Matches</Link>
          </div>
        )}

      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } 100% { opacity: 0.5; transform: scale(1); } }
      `}} />
    </main>
  );
}
