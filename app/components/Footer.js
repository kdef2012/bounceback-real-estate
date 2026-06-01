import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Image src="/assets/logo.png" alt="Bounceback Real Estate Logo" width={110} height={110} className="brand-logo" />
          </div>
          <p>Your comeback is our commitment. The future of real estate is here.</p>
        </div>
        <div className="footer-links">
          <h4>Platform</h4>
          <Link href="/digital-twins">Digital Twins</Link>
          <Link href="/matchmaker">AI Matchmaker</Link>
          <Link href="/zoning">Live Zoning Analytics</Link>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
