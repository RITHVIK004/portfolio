'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const info = [
  { label: 'Name', value: 'Rithvik R' },
  { label: 'Location', value: 'Namakkal, TN' },
  { label: 'College', value: 'GCE Erode' },
  { label: 'Email', value: 'rineeshnitheen@gmail.com' },
  { label: 'Graduated', value: '2026' },
  { label: 'Status', value: '✦ Open to Work' },
];

export default function About() {
  const { isDark } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about" style={{
      padding: isMobile ? '6rem 1rem' : '8rem 2rem',
      background: isDark
        ? 'linear-gradient(180deg, #05071a 0%, #0a0d2e 100%)'
        : 'linear-gradient(180deg, #f5f3ff 0%, #ede9fe 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow accent */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        top: '50%', left: '-150px', transform: 'translateY(-50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section heading */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: isMobile ? '2.8rem' : '5rem' }}>
          <span style={{
            display: 'inline-block', padding: '0.3rem 1.2rem',
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '999px', fontSize: '0.72rem', color: '#a78bfa',
            letterSpacing: '0.18rem', marginBottom: '1rem',
          }}>ABOUT ME</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, color: 'var(--text-primary)',
          }}>
            Who Am <span style={{ color: '#7c3aed' }}>I?</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '2.2rem' : '4rem', alignItems: 'center',
        }}>

          {/* Photo card */}
          <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              {/* Gradient border */}
              <div style={{
                position: 'absolute', inset: '-3px', borderRadius: '20px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4, #7c3aed)',
                backgroundSize: '300% 300%',
                animation: 'shimmer 4s linear infinite',
                zIndex: 0,
              }} />
              {/* Photo */}
              <div style={{
                position: 'relative', zIndex: 1, borderRadius: '18px',
                overflow: 'hidden', width: isMobile ? '230px' : '270px', height: isMobile ? '270px' : '310px',
                background: '#0a0d2e',
              }}>
                <Image
                  src="/rithvik.jpg"
                  alt="Rithvik R — Full Stack Developer"
                  width={270} height={310}
                  style={{ objectFit: 'cover', objectPosition: 'top center', width: '100%', height: '100%' }}
                  priority
                />
              </div>
              {/* Floating CGPA badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', bottom: isMobile ? '-0.9rem' : '-1.2rem', right: isMobile ? '-0.8rem' : '-1.2rem', zIndex: 2,
                  background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  borderRadius: '14px', padding: isMobile ? '0.7rem 1rem' : '0.9rem 1.3rem', textAlign: 'center',
                  boxShadow: '0 0 30px rgba(124,58,237,0.5)',
                }}
              >
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#fff' }}>8.0</div>
                <div style={{ fontSize: '0.6rem', color: '#c4b5fd', letterSpacing: '0.12rem' }}>CGPA</div>
              </motion.div>
              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                style={{
                  position: 'absolute', top: isMobile ? '-0.8rem' : '-1rem', left: isMobile ? '-0.8rem' : '-1.2rem', zIndex: 2,
                  background: 'rgba(6,182,212,0.15)',
                  border: '1px solid rgba(6,182,212,0.4)',
                  borderRadius: '12px', padding: isMobile ? '0.55rem 0.8rem' : '0.7rem 1rem', textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#06b6d4' }}>AWS</div>
                <div style={{ fontSize: '0.6rem', color: '#67e8f9', letterSpacing: '0.1rem' }}>CLOUD</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <div>
            <motion.h3 {...fadeUp(0.2)} style={{
              fontFamily: "'Syne', sans-serif", fontSize: '1.7rem', fontWeight: 800,
              color: 'var(--text-primary)', marginBottom: '1.2rem', lineHeight: 1.3,
            }}>
              CSE Graduate &<br />
              <span style={{ color: '#7c3aed' }}>Full Stack Developer</span>
            </motion.h3>

            <motion.p {...fadeUp(0.3)} style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              I&apos;m Rithvik R, a 2026 graduate from <span style={{ color: '#7c3aed' }}>Government College of Engineering, Erode</span>. I specialize in building
              scalable backend systems using <span style={{ color: '#7c3aed' }}>Java ,Django & Spring Boot</span> and deploying on
              <span style={{ color: '#0891b2' }}> AWS EC2 & RDS</span> with real-world project experience.
            </motion.p>

            <motion.p {...fadeUp(0.35)} style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Beyond code, I served as <span style={{ color: '#7c3aed' }}>Class Representative</span> and
              <span style={{ color: '#7c3aed' }}> Secretary of Leo Club – GCE Erode</span>, leading social service
              projects across healthcare and community initiatives.
            </motion.p>

            {/* Info grid */}
            <motion.div {...fadeUp(0.4)} style={{
              display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '0.75rem', marginBottom: '2rem',
            }}>
              {info.map(item => (
                <div key={item.label} style={{
                  padding: '0.75rem 1rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '0.6rem', color: '#7c3aed', letterSpacing: '0.12rem', marginBottom: '0.2rem' }}>
                    {item.label.toUpperCase()}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: item.label === 'Status' ? '#a78bfa' : 'var(--text-primary)', fontWeight: 500 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                padding: '0.75rem 1.8rem',
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                color: '#fff', borderRadius: '8px', textDecoration: 'none',
                fontSize: '0.85rem', fontWeight: 600,
                boxShadow: '0 0 20px rgba(124,58,237,0.35)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 35px rgba(124,58,237,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.35)'; }}
              >Get In Touch →</a>
              <a href="https://linkedin.com/in/rithvik-developer" target="_blank" style={{
                padding: '0.75rem 1.8rem',
                border: '1px solid rgba(6,182,212,0.35)',
                color: '#06b6d4', borderRadius: '8px', textDecoration: 'none',
                fontSize: '0.85rem', fontWeight: 600,
                background: 'rgba(6,182,212,0.05)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(6,182,212,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(6,182,212,0.05)'; }}
              >LinkedIn ↗</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


