'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => {
      const mobile = window.innerWidth < 980;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '0.8rem 1rem' : '1rem 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled
          ? 'var(--nav-bg)'
          : (isDark ? 'rgba(5,7,26,0.62)' : 'rgba(245,243,255,0.75)'),
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : (isDark ? '1px solid rgba(148,163,184,0.2)' : '1px solid rgba(124,58,237,0.18)'),
        transition: 'all 0.4s ease',
      }}
    >
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: isMobile ? '0.45rem' : '0.6rem' }}>
        <div style={{
          width: isMobile ? '34px' : '38px', height: isMobile ? '34px' : '38px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: isMobile ? '1rem' : '1.1rem', color: '#fff',
          boxShadow: '0 0 15px rgba(124,58,237,0.4)',
        }}>R</div>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? '0.95rem' : '1rem',
          color: isDark ? '#f8fafc' : 'var(--text-primary)',
          textShadow: isDark ? '0 0 10px rgba(15,23,42,0.35)' : 'none',
        }}>
          Rithvik<span style={{ color: '#7c3aed' }}>.</span>dev
        </span>
      </a>

      {!isMobile && (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map((link, i) => (
            <motion.a key={link} href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              style={{
                color: isDark ? '#cbd5e1' : 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = isDark ? '#e9d5ff' : '#7c3aed'}
              onMouseLeave={e => e.currentTarget.style.color = isDark ? '#cbd5e1' : 'var(--text-secondary)'}
            >{link}</motion.a>
          ))}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: isDark ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.3)',
              cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: isDark ? '#f8fafc' : '#4c1d95',
              fontSize: '1.1rem', transition: 'all 0.3s',
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </motion.button>
          <a href="https://drive.google.com/file/d/1RoHkcG-MY1PFsZTSRYr4OvItSrplCkcG/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.5rem 1.3rem',
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            color: '#fff', borderRadius: '8px', textDecoration: 'none',
            fontSize: '0.8rem', fontWeight: 600,
            boxShadow: '0 0 15px rgba(124,58,237,0.3)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(124,58,237,0.6)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(124,58,237,0.3)'}
          >Resume ↓</a>
        </div>
      )}

      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: isDark ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.3)',
              cursor: 'pointer',
              color: isDark ? '#f8fafc' : '#4c1d95',
              fontSize: '1rem',
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.3)',
              cursor: 'pointer',
              color: isDark ? '#e2e8f0' : '#4c1d95',
              fontSize: '1.05rem',
              fontWeight: 700,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      )}

      {isMobile && menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: '1rem',
            right: '1rem',
            background: 'var(--nav-bg)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '0.8rem',
            backdropFilter: 'blur(18px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: isDark ? '#cbd5e1' : 'var(--text-secondary)',
                padding: '0.7rem 0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(124,58,237,0.15)',
                background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(124,58,237,0.05)',
                fontSize: '0.9rem',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1RoHkcG-MY1PFsZTSRYr4OvItSrplCkcG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: 'none',
              color: '#fff',
              padding: '0.75rem 0.8rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              fontSize: '0.88rem',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Resume ↓
          </a>
        </div>
      )}
    </motion.nav>
  );
}
