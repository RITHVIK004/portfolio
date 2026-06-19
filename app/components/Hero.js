'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Full Stack Developer',
  'Java',
  'Spring Boot',
  'Next.js',
  'Django',
];

export default function Hero() {
  const canvasRef = useRef(null);
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      color: Math.random() > 0.6 ? '#7c3aed' : Math.random() > 0.5 ? '#06b6d4' : '#a855f7',
      opacity: Math.random() * 0.6 + 0.2,
    }));

    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });

      // Draw lines between close particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = '#7c3aed';
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', handleResize); };
  }, []);

  // Typewriter
  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length - 1)), 35);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section style={{
      minHeight: '100svh',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #05071a 0%, #0d0f2e 40%, #100a2e 70%, #05071a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '7.2rem 1rem 3rem' : '6rem 2rem 4rem',
    }}>

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Big glow orbs */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)',
        top: '-100px', right: '-100px', zIndex: 0, animation: 'pulse-glow 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)',
        bottom: '-80px', left: '-80px', zIndex: 0, animation: 'pulse-glow 5s ease-in-out infinite 1s',
      }} />

      {/* Floating 3D sphere wireframe (CSS only) */}
      <div style={{
        position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)',
        width: '280px', height: '280px', zIndex: 1,
        animation: 'float 6s ease-in-out infinite',
        display: 'none',
      }} className="sphere-container">
      </div>

      {/* Floating decorative rings */}
      {[
        { size: 300, color: 'rgba(124,58,237,0.12)', top: '10%', right: '5%', delay: '0s', duration: '8s' },
        { size: 200, color: 'rgba(6,182,212,0.08)', bottom: '15%', left: '3%', delay: '2s', duration: '10s' },
        { size: 150, color: 'rgba(168,85,247,0.1)', top: '60%', right: '15%', delay: '1s', duration: '7s' },
      ].map((ring, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: ring.size, height: ring.size,
          borderRadius: '50%',
          border: `1px solid ${ring.color}`,
          top: ring.top, bottom: ring.bottom,
          left: ring.left, right: ring.right,
          zIndex: 0,
          animation: `float${i % 2 === 0 ? '' : '2'} ${ring.duration} ease-in-out infinite`,
          animationDelay: ring.delay,
        }} />
      ))}

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 5, textAlign: 'center', maxWidth: '860px', width: '100%', paddingBottom: isMobile ? '3.8rem' : '4.5rem' }}>

        {/* Top badge */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: isMobile ? '1.3rem' : '2rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: isMobile ? '0.4rem 0.9rem' : '0.45rem 1.4rem',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.4)',
            borderRadius: '999px',
            fontSize: isMobile ? '0.66rem' : '0.78rem',
            color: '#a78bfa',
            letterSpacing: isMobile ? '0.09rem' : '0.12rem',
            backdropFilter: 'blur(10px)',
            maxWidth: isMobile ? '92vw' : 'none',
            textAlign: 'center',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 8px #a78bfa', animation: 'pulse-glow 2s infinite' }} />
            PORTFOLIO 2026 — OPEN TO OPPORTUNITIES
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.15)} style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: isMobile ? 'clamp(2.35rem, 14vw, 3.6rem)' : 'clamp(3.5rem, 9vw, 7.5rem)',
          fontWeight: 900,
          lineHeight: isMobile ? 0.95 : 1,
          marginBottom: '0.5rem',
          maxWidth: '100%',
          wordBreak: 'keep-all',
          overflowWrap: 'normal',
          letterSpacing: isMobile ? '0.01em' : 'normal',
          background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #818cf8 70%, #06b6d4 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 4s linear infinite',
        }}>
          {isMobile ? (
            <>
              RITHVIK
              <br />
              R
            </>
          ) : (
            'RITHVIK R'
          )}
        </motion.h1>

        {/* Subtitle line */}
        <motion.div {...fadeUp(0.25)} style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '0.55rem' : '1rem' }}>
          <div style={{ height: '1px', width: isMobile ? '34px' : '60px', background: 'linear-gradient(to right, transparent, #7c3aed)' }} />
          <span style={{ color: '#64748b', fontSize: isMobile ? '0.72rem' : '0.85rem', letterSpacing: isMobile ? '0.14rem' : '0.2rem' }}>FULL STACK DEVELOPER</span>
          <div style={{ height: '1px', width: isMobile ? '34px' : '60px', background: 'linear-gradient(to left, transparent, #7c3aed)' }} />
        </motion.div>

        {/* Typewriter */}
        <motion.div {...fadeUp(0.35)} style={{ marginBottom: isMobile ? '1.8rem' : '2.5rem', fontSize: isMobile ? '1.15rem' : 'clamp(1rem, 2.5vw, 1.3rem)', minHeight: '2rem' }}>
          <span style={{ color: '#7c3aed' }}>✦ </span>
          <span style={{ color: '#c4b5fd' }}>{displayed}</span>
          <span style={{ display: 'inline-block', width: '2px', height: '1.2em', background: '#7c3aed', marginLeft: '2px', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
          <span style={{ color: '#7c3aed' }}> ✦</span>
        </motion.div>

        {/* Description */}
        <motion.p {...fadeUp(0.45)} style={{
          color: '#94a3b8', fontSize: isMobile ? '0.92rem' : '1rem', lineHeight: isMobile ? 1.7 : 1.8,
          maxWidth: '560px', margin: isMobile ? '0 auto 2.2rem' : '0 auto 3rem',
        }}>
          CSE Graduate from <span style={{ color: '#c4b5fd' }}>GCE Erode</span> building scalable backends
          with <span style={{ color: '#c4b5fd' }}>Spring Boot</span>, deploying on <span style={{ color: '#06b6d4' }}>AWS EC2 & RDS</span>,
          and crafting full-stack web applications.
        </motion.p>

        {/* Stats */}
        <motion.div {...fadeUp(0.55)} style={{
          display: 'flex', justifyContent: 'center', gap: '0', flexWrap: 'wrap',
          marginBottom: isMobile ? '2rem' : '3rem',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: '12px',
          background: 'rgba(124,58,237,0.05)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          maxWidth: isMobile ? '100%' : '600px',
          margin: isMobile ? '0 auto 2rem' : '0 auto 3rem',
        }}>
          {[
            { value: '8.0', label: 'CGPA', color: '#a78bfa' },
            { value: '4+', label: 'PROJECTS', color: '#06b6d4' },
            { value: 'AWS', label: 'CLOUD', color: '#a78bfa' },
            { value: '2026', label: 'GRADUATED', color: '#06b6d4' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              flex: 1, minWidth: isMobile ? '46%' : '120px', padding: isMobile ? '1.1rem 0.6rem' : '1.5rem 1rem', textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(124,58,237,0.15)' : 'none',
            }}>
              <div style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 700, color: stat.color, fontFamily: "'Syne', sans-serif", marginBottom: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: isMobile ? '0.58rem' : '0.65rem', color: '#475569', letterSpacing: isMobile ? '0.1rem' : '0.15rem' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.65)} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects"
            style={{
              padding: '0.9rem 2.2rem',
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              color: '#fff', fontWeight: 600, borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '320px' : 'none',
              boxShadow: '0 0 25px rgba(124,58,237,0.4)',
              transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(124,58,237,0.4)'; }}
          >
            View Projects ✦
          </a>

          <a href="https://linkedin.com/in/rithvik-developer" target="_blank"
            style={{
              padding: '0.9rem 2.2rem',
              background: 'rgba(6,182,212,0.1)',
              color: '#06b6d4', fontWeight: 600, borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '320px' : 'none',
              border: '1px solid rgba(6,182,212,0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(6,182,212,0.2)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(6,182,212,0.1)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; }}
          >
            LinkedIn ↗
          </a>

          <a href="https://drive.google.com/file/d/1RoHkcG-MY1PFsZTSRYr4OvItSrplCkcG/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '0.9rem 2.2rem',
              background: 'rgba(255,255,255,0.04)',
              color: '#94a3b8', fontWeight: 600, borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '320px' : 'none',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
          >
            Resume ↓
          </a>
        </motion.div>

        {/* Tech tags */}
        <motion.div {...fadeUp(0.75)} style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
          {['Java', 'Spring Boot', 'AWS EC2', 'MySQL', 'JavaScript', 'React'].map(tag => (
            <span key={tag} style={{
              padding: '0.3rem 0.9rem',
              background: 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '999px',
              fontSize: '0.75rem',
              color: '#7c6aaa',
              letterSpacing: '0.05rem',
            }}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: isMobile ? '0.55rem' : '1.1rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 5 }}
      >
        <span style={{ color: '#94a3b8', fontSize: '0.65rem', letterSpacing: '0.2rem' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #7c3aed, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
