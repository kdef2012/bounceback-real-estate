"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/listings" onClick={() => setMenuOpen(false)}>Exclusive Listings</Link>
          <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)}>Get Started</Link>
        </div>
        <div className="logo">
          <Link href="/">
            <Image src="/assets/logo.png" alt="Bounceback Real Estate Logo" width={140} height={140} className="brand-logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
