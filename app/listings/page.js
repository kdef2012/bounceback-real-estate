"use client";

import { useState } from 'react';
import { Eye, Map, MapPin, Search, Heart } from 'lucide-react';
import MortgageCalculator from '../components/MortgageCalculator';

const MOCK_LISTINGS = [
  { id: 1, address: "The Glass House Reserve", price: 4250000, beds: 4, baths: 5, sqft: 6200, status: "Exclusive", image: "/assets/prop1.png", lat: 35.958, lng: -80.005 },
  { id: 2, address: "Skyline Penthouse Collection", price: 8900000, beds: 3, baths: 4.5, sqft: 4100, status: "Just Listed", image: "/assets/prop2.png", lat: 36.102, lng: -80.245 },
  { id: 3, address: "Modern Forest Villa", price: 3450000, beds: 5, baths: 6, sqft: 5800, status: "Make Me Move", image: "/assets/hero.png", lat: 35.890, lng: -79.980 },
];

export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('any');
  const [savedHomes, setSavedHomes] = useState([]);
  const [activeListing, setActiveListing] = useState(null); // Used to expand a listing card to show the mortgage calculator

  const filteredListings = MOCK_LISTINGS.filter(listing => {
    const matchesSearch = listing.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = filterPrice === 'any' ? true : 
                         filterPrice === 'low' ? listing.price < 5000000 : 
                         listing.price >= 5000000;
    return matchesSearch && matchesPrice;
  });

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  const toggleSave = (id, e) => {
    e.stopPropagation();
    if (savedHomes.includes(id)) {
      setSavedHomes(savedHomes.filter(savedId => savedId !== id));
    } else {
      setSavedHomes([...savedHomes, id]);
    }
  };

  return (
    <main style={{ display: 'flex', height: '100vh', paddingTop: '80px', overflow: 'hidden' }}>
      
      {/* Left Panel: Zillow-style Map Simulation */}
      <section style={{ flex: 1, background: '#1a1a24', position: 'relative', borderRight: '1px solid var(--clr-border)' }}>
         <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }} />
          {/* Simulated Map Markers */}
          {filteredListings.map((listing, index) => (
             <div key={listing.id} style={{
                position: 'absolute',
                top: `${20 + (index * 25)}%`, // Random mock positioning
                left: `${30 + (index * 20)}%`,
                background: 'var(--clr-gold)',
                color: 'var(--clr-black)',
                padding: '5px 10px',
                borderRadius: '8px',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                cursor: 'pointer',
                transform: 'translate(-50%, -50%)',
                zIndex: 10
             }}>
               {formatCurrency(listing.price / 1000000)}M
             </div>
          ))}
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.7)', padding: '10px 20px', borderRadius: '20px', color: 'white', fontSize: '0.8rem' }}>
             Interactive Map View
          </div>
      </section>

      {/* Right Panel: Scrollable Listings */}
      <section style={{ width: '600px', background: 'var(--clr-dark)', overflowY: 'auto', padding: '20px' }}>
        
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-gray)' }} size={18} />
            <input 
              type="text" 
              placeholder="Search address..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '12px 12px 12px 45px', borderRadius: '30px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} 
            />
          </div>
          <select 
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            style={{ padding: '12px 20px', borderRadius: '30px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white', outline: 'none' }}
          >
            <option value="any">Any Price</option>
            <option value="low">Under $5M</option>
            <option value="high">$5M+</option>
          </select>
        </div>

        <h3 style={{ color: 'var(--clr-white)', marginBottom: '20px' }}>{filteredListings.length} Premium Results</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredListings.map(listing => (
            <div 
              key={listing.id} 
              className="listing-card" 
              style={{ display: 'flex', flexDirection: 'column', height: 'auto', cursor: 'pointer', border: activeListing === listing.id ? '2px solid var(--clr-gold)' : '1px solid var(--clr-border)' }}
              onClick={() => setActiveListing(activeListing === listing.id ? null : listing.id)}
            >
              <div style={{ height: '250px', backgroundImage: `url('${listing.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <span className="listing-badge" style={{ position: 'absolute', top: '15px', left: '15px' }}>{listing.status}</span>
                <div 
                  onClick={(e) => toggleSave(listing.id, e)}
                  style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Heart size={20} fill={savedHomes.includes(listing.id) ? '#ff6b6b' : 'transparent'} color={savedHomes.includes(listing.id) ? '#ff6b6b' : 'white'} />
                </div>
              </div>
              <div className="listing-details" style={{ padding: '20px' }}>
                <div className="listing-price">{formatCurrency(listing.price)}</div>
                <h3 className="listing-address">{listing.address}</h3>
                <div className="listing-meta" style={{ marginBottom: 0 }}>
                  <span><Eye size={16} /> {listing.beds} Beds</span>
                  <span><Map size={16} /> {listing.baths} Baths</span>
                  <span><MapPin size={16} /> {listing.sqft.toLocaleString()} sqft</span>
                </div>
                
                {/* Expandable Mortgage Calculator via state */}
                {activeListing === listing.id && (
                   <MortgageCalculator price={listing.price} />
                )}
              </div>
            </div>
          ))}
          {filteredListings.length === 0 && (
             <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--clr-gray)' }}>No results found.</div>
          )}
        </div>
      </section>

    </main>
  );
}
