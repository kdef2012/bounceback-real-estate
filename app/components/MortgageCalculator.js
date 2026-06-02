"use client";

import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

export default function MortgageCalculator({ price }) {
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const downPayment = price * (downPaymentPct / 100);
    const principal = price - downPayment;
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numPayments);
    } else {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      // Add estimated property tax (1.2% yearly) and insurance ($150/mo)
      const taxes = (price * 0.012) / 12;
      const insurance = 150;
      setMonthlyPayment(payment + taxes + insurance);
    }
  }, [price, downPaymentPct, interestRate, loanTerm]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div style={{ background: 'rgba(17,17,17,0.8)', padding: '20px', borderRadius: '15px', border: '1px solid var(--clr-border)', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
        <Calculator size={20} style={{ color: 'var(--clr-gold)' }} />
        <h4 style={{ color: 'var(--clr-white)', margin: 0 }}>Estimated Payment</h4>
      </div>
      
      <div style={{ color: 'var(--clr-gold)', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px' }}>
        {formatCurrency(monthlyPayment)}<span style={{ fontSize: '1rem', color: 'var(--clr-gray)', fontWeight: 'normal' }}> /mo</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--clr-gray)', marginBottom: '5px' }}>Down Payment (%)</label>
          <input 
            type="number" 
            value={downPaymentPct} 
            onChange={(e) => setDownPaymentPct(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', background: 'var(--clr-black)', border: '1px solid var(--clr-border)', color: 'white' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--clr-gray)', marginBottom: '5px' }}>Interest Rate (%)</label>
          <input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', background: 'var(--clr-black)', border: '1px solid var(--clr-border)', color: 'white' }}
          />
        </div>
      </div>
    </div>
  );
}
