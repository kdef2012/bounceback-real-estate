"use client";

import { useState } from 'react';
import { X, Mail, Lock, User, UserPlus } from 'lucide-react';
import { auth, db } from '../../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('buyer'); // 'buyer' or 'seller'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // Handle Login
        await signInWithEmailAndPassword(auth, email, password);
        onClose();
        // Route to generic dashboard, the layout will handle specific routing or we let them navigate
        router.push('/dashboard/buyer'); // Simplification: route to buyer dashboard on login for now
      } else {
        // Handle Registration
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Update display name
        await updateProfile(user, { displayName: name });
        
        // Save user role to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          name,
          email,
          role,
          createdAt: new Date()
        });

        onClose();
        router.push(`/dashboard/${role}`);
      }
    } catch (err) {
      console.error("Auth Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'var(--clr-darker)', width: '100%', maxWidth: '450px', borderRadius: '20px', border: '1px solid var(--clr-border)', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', color: 'var(--clr-gray)' }} onClick={onClose}>
          <X size={24} />
        </div>

        <div style={{ padding: '40px' }}>
          <h2 style={{ color: 'var(--clr-white)', marginBottom: '10px', textAlign: 'center' }}>
            {isLogin ? 'Welcome Back' : 'Join Bounceback'}
          </h2>
          <p style={{ color: 'var(--clr-gray)', textAlign: 'center', marginBottom: '30px' }}>
            {isLogin ? 'Sign in to access your dashboard.' : 'The future of real estate awaits.'}
          </p>

          {error && <div style={{ background: 'rgba(255, 100, 100, 0.1)', color: '#ff6b6b', padding: '10px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}

          {!isLogin && (
            <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
              <div 
                onClick={() => setRole('buyer')}
                style={{ flex: 1, padding: '15px', textAlign: 'center', borderRadius: '10px', border: `2px solid ${role === 'buyer' ? 'var(--clr-gold)' : 'var(--clr-border)'}`, background: role === 'buyer' ? 'rgba(197, 160, 89, 0.1)' : 'transparent', cursor: 'pointer', color: 'white', fontWeight: 'bold' }}
              >
                I am a Buyer
              </div>
              <div 
                onClick={() => setRole('seller')}
                style={{ flex: 1, padding: '15px', textAlign: 'center', borderRadius: '10px', border: `2px solid ${role === 'seller' ? 'var(--clr-gold)' : 'var(--clr-border)'}`, background: role === 'seller' ? 'rgba(197, 160, 89, 0.1)' : 'transparent', cursor: 'pointer', color: 'white', fontWeight: 'bold' }}
              >
                I am a Seller
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {!isLogin && (
              <div style={{ position: 'relative' }}>
                <User style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-gray)' }} size={20} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '10px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} 
                />
              </div>
            )}
            
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-gray)' }} size={20} />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '10px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} 
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-gray)' }} size={20} />
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '10px', border: '1px solid var(--clr-border)', background: 'var(--clr-black)', color: 'white' }} 
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: '10px', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '25px', color: 'var(--clr-gray)' }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => { setIsLogin(!isLogin); setError(''); }} style={{ color: 'var(--clr-gold)', cursor: 'pointer', fontWeight: 'bold' }}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
