"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { auth, db } from '../../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);
        
        // Fetch user role to ensure they are on the correct dashboard
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const role = docSnap.data().role;
            // If they are on the root dashboard, route them to their role
            if (pathname === '/dashboard') {
              router.push(`/dashboard/${role}`);
            }
          }
        } catch (err) {
          console.error("Error fetching user role:", err);
        }
      } else {
        setIsAuthenticated(false);
        router.push('/'); // Redirect to home if not logged in
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

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
