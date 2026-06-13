import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#050505', 
      color: '#F5F5F0', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'serif'
    }}>
      {/* Background Blur Effect */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at center, #111 0%, #050505 100%)',
        zIndex: 0
      }} />

      <div style={{ zIndex: 1, maxWidth: '800px' }}>
        <p style={{ letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '40px', opacity: 0.8 }}>
          TAILORED MAISON
        </p>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.2' }}>
          Every business has a story | <br /> But not all have a voice
        </h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '60px', fontStyle: 'italic', opacity: 0.9 }}>
          Dedicated to bringing stories buried under corporate noise back to life.
        </p>

        <div style={{ borderTop: '1px solid rgba(245, 245, 240, 0.2)', paddingTop: '40px' }}>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px' }}>
            Stands for those who keep waking up everyday and choose to wear the Crown of what it means to Serve others. 
            To honor those who keep executing at the highest level in what the world calls mundane—that is excellence.
          </p>
        </div>

        <p style={{ marginTop: '60px', fontWeight: 'bold' }}>Light for Leaders</p>
        <p style={{ opacity: 0.7 }}>A reminder that they do not have to stand alone. Your story matters.</p>
        
        <footer style={{ marginTop: '100px', fontSize: '0.7rem', letterSpacing: '2px', opacity: 0.5 }}>
          THE MAISON IS CURRENTLY OCCUPIED — REVEAL IN PROGRESS
        </footer>
      </div>
    </main>
  );
}
