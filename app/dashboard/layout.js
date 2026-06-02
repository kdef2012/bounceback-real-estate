"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Mock authentication check - we will replace this with Firebase/Supabase logic
    const checkAuth = async () => {
      // Simulate network delay for auth check
      await new Promise(resolve => setTimeout(resolve, 800));
      // For now, allow access to view the UI. In production, redirect if not logged in.
      setIsAuthenticated(true);
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--clr-black)' }}>
        <Loader2 size={48} style={{ color: 'var(--clr-gold)', animation: 'spin 1s linear infinite' }} />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin { 100% { transform: rotate(360deg); } }
        `}} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--clr-black)', paddingTop: '100px' }}>
      {children}
    </div>
  );
}
