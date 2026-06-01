"use client";

import { useState } from 'react';
import { Eye, Map, MapPin, Search, Filter } from 'lucide-react';

const MOCK_LISTINGS = [
  { id: 1, address: "The Glass House Reserve", price: 4250000, beds: 4, baths: 5, sqft: 6200, status: "Exclusive", image: "/assets/prop1.png" },
  { id: 2, address: "Skyline Penthouse Collection", price: 8900000, beds: 3, baths: 4.5, sqft: 4100, status: "Just Listed", image: "/assets/prop2.png" },
  { id: 3, address: "Modern Forest Villa", price: 3450000, beds: 5, baths: 6, sqft: 5800, status: "Make Me Move", image: "/assets/hero.png" },
];

export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('any');

  const filteredListings = MOCK_LISTINGS.filter(listing => {
    const matchesSearch = listing.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = filterPrice === 'any' ? true : 
                         filterPrice === 'low' ? listing.price < 5000000 : 
                         listing.price >= 5000000;
    return matchesSearch && matchesPrice;
  });

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <main>
      <header className="page-header" style={{ padding: '150px 20px 60px', textAlign: 'center', background: 'var(--clr-darker)' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Exclusive Listings</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--clr-gold)' }}>Browse off-market, luxury, and Make Me Move properties.</p>
        
        <div style={{ maxWidth: '800px', margin: '40px auto 0', display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-gray)' }} />
            <input 
              type="text" 
              placeholder="Search by neighborhood or address..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '15px 15px 15px 50px', borderRadius: '30px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} 
            />
          </div>
          <select 
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            style={{ padding: '15px 25px', borderRadius: '30px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white', outline: 'none' }}
          >
            <option value="any">Any Price</option>
            <option value="low">Under $5M</option>
            <option value="high">$5M+</option>
          </select>
        </div>
      </header>

      <section className="section-container">
        {filteredListings.length > 0 ? (
          <div className="listings-grid">
            {filteredListings.map(listing => (
              <div key={listing.id} className="listing-card">
                <div className="listing-image" style={{ backgroundImage: `url('${listing.image}')` }}>
                  <span className="listing-badge">{listing.status}</span>
                </div>
                <div className="listing-details">
                  <div className="listing-price">{formatCurrency(listing.price)}</div>
                  <h3 className="listing-address">{listing.address}</h3>
                  <div className="listing-meta">
                    <span><Eye size={16} /> {listing.beds} Beds</span>
                    <span><Map size={16} /> {listing.baths} Baths</span>
                    <span><MapPin size={16} /> {listing.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <h3 style={{ color: 'var(--clr-white)', marginBottom: '10px' }}>No listings found</h3>
            <p style={{ color: 'var(--clr-gray)' }}>Try adjusting your search filters.</p>
          </div>
        )}
      </section>
    </main>
  );
}
