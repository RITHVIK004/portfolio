'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const contactLinks = [
  { label: 'Email', value: 'rineeshnitheen@gmail.com', href: 'mailto:rineeshnitheen@gmail.com', icon: '✉️', color: '#7c3aed' },
  { label: 'LinkedIn', value: 'linkedin.com/in/rithvik-developer', href: 'https://linkedin.com/in/rithvik-developer', icon: '💼', color: '#06b6d4' },
  { label: 'Phone', value: '+91 7639081591', href: 'tel:+917639081591', icon: '📞', color: '#a855f7' },
  { label: 'Location', value: 'Namakkal, Tamil Nadu', href: '#', icon: '📍', color: '#7c3aed' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mnnpqlay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to send form');
      }

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '8rem 2rem',
        background: isDark
          ? 'linear-gradient(180deg, #05071a 0%, #080c1e 100%)'
          : 'linear-gradient(180deg, #f5f3ff 0%, #ede9fe 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.3rem 1.2rem',
              background: 'rgba(124,58,237,0.12)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '999px',
              fontSize: '0.72rem',
              color: '#a78bfa',
              letterSpacing: '0.18rem',
              marginBottom: '1rem',
            }}
          >
            CONTACT
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
            }}
          >
            Let&apos;s <span style={{ color: '#7c3aed' }}>Connect</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.8rem', fontSize: '0.95rem' }}>
            Open to internships, full-time roles & collaborations
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <div>
            <motion.p {...fadeUp(0.1)} style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.2rem', marginBottom: '1.5rem' }}>
              REACH ME AT
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  {...fadeUp(0.1 * i + 0.2)}
                  whileHover={{ x: 6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.2rem',
                    background: 'var(--card-bg)',
                    border: `1px solid ${link.color}20`,
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${link.color}50`;
                    e.currentTarget.style.background = `${link.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${link.color}20`;
                    e.currentTarget.style.background = 'var(--card-bg)';
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      flexShrink: 0,
                      background: `${link.color}15`,
                      border: `1px solid ${link.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.65rem', color: link.color, letterSpacing: '0.1rem', marginBottom: '0.2rem' }}>{link.label}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              {...fadeUp(0.6)}
              style={{
                padding: '1.2rem',
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px #22c55e',
                  flexShrink: 0,
                  animation: 'pulse-glow 2s infinite',
                }}
              />
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Currently <span style={{ color: '#22c55e', fontWeight: 600 }}>available</span> for full-time roles and internship opportunities starting 2026.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.3)}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.2rem', marginBottom: '1.5rem' }}>SEND A MESSAGE</p>

            <form
              action="https://formspree.io/f/mnnpqlay"
              method="POST"
              onSubmit={handleSubmit}
              autoComplete="off"
              suppressHydrationWarning
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div>
                <label style={{ fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.1rem', display: 'block', marginBottom: '0.4rem' }}>YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rithvik R"
                  autoComplete="off"
                  suppressHydrationWarning
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(124,58,237,0.06)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.2)')}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.1rem', display: 'block', marginBottom: '0.4rem' }}>YOUR EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  autoComplete="off"
                  suppressHydrationWarning
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(124,58,237,0.06)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.2)')}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.1rem', display: 'block', marginBottom: '0.4rem' }}>MESSAGE</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Rithvik, I'd like to connect about..."
                  autoComplete="off"
                  suppressHydrationWarning
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(124,58,237,0.06)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.2)')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                suppressHydrationWarning
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.95rem',
                  background: status === 'sent' ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  color: '#fff',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  boxShadow: status === 'sent' ? '0 0 20px rgba(34,197,94,0.4)' : '0 0 20px rgba(124,58,237,0.35)',
                  opacity: status === 'sending' ? 0.75 : 1,
                  transition: 'all 0.3s',
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : status === 'error' ? 'Send Failed - Try Again' : 'Send Message ->'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(124,58,237,0.1)' }}
      >
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
          Designed & Built by <span style={{ color: isDark ? '#a78bfa' : '#7c3aed' }}>Rithvik R</span>
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.35rem' }}>
          &copy; {currentYear} Rithvik R. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}

