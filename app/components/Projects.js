'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    number: '01',
    title: 'RideZen — Ride Sharing Platform',
    description: 'A full-stack ride sharing platform with real-time booking, Firebase authentication, Razorpay test mode payments, and Twilio SMS notifications to drivers and passengers about travel details.',
    tech: ['Next.js', 'Django', 'MySQL', 'Firebase', 'Razorpay', 'Twilio', 'n8n'],
    color: '#7c3aed',
    live: 'https://drive.google.com/file/d/1hkJkKwYmlCsUej2wQrGhR-AKAjDXLib8/view?usp=drive_link',
    github: 'https://github.com/RITHVIK004/smart-destination-ride-sharing',
    highlights: ['Firebase Auth', 'Razorpay Payments', 'Twilio SMS Alerts'],
    icon: '🚗',
    badge: 'FINAL YEAR PROJECT',
  },
  {
    number: '02',
    title: 'Virunthombal Restaurant Website',
    description: 'A fully responsive restaurant website featuring a dynamic menu to display food items and a contact section. Designed with visually appealing CSS styling and deployed on Netlify for public access.',
    tech: ['HTML', 'CSS', 'Netlify'],
    color: '#06b6d4',
    live: 'https://virunthombalrestaurants.netlify.app',
    github: 'https://github.com/RITHVIK004/virunthombalrestaurants',
    highlights: ['Responsive Design', 'Live Deployment', 'CSS Animations'],
    icon: '🍽️',
    badge: null,
  },
  {
    number: '03',
    title: 'Student Attendance Management System',
    description: 'A full-stack web application to manage student attendance with complete CRUD operations. Integrated MySQL database for efficient record keeping, retrieval, and scalability.',
    tech: ['Spring Boot', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: '#a855f7',
    live: '#',
    github: 'https://github.com/RITHVIK004/STUDENT-ATTENDANCE-MANAGEMENT-SYSTEM',
    highlights: ['CRUD Operations', 'MySQL Integration', 'Spring Boot Backend'],
    icon: '📋',
    badge: null,
  },
  {
    number: '04',
    title: 'Weather Information Web App',
    description: 'A web application that fetches and displays real-time weather data using OpenWeatherMap API integration. Deployed on AWS EC2 for scalable, cloud-based access.',
    tech: ['Spring Boot', 'JSP', 'OpenWeatherMap API', 'AWS EC2'],
    color: '#06b6d4',
    live: '#',
    github: 'https://github.com/RITHVIK004/weather-app',
    highlights: ['REST API Integration', 'AWS EC2 Deployment', 'Real-time Data'],
    icon: '🌤️',
    badge: null,
  },
];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Projects() {
  const { isDark } = useTheme();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 980);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" style={{
      padding: '8rem 2rem',
      background: isDark
        ? 'linear-gradient(180deg, #05071a 0%, #0a0d2e 100%)'
        : 'linear-gradient(180deg, #f5f3ff 0%, #ede9fe 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glows */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        top: '20%', right: '-150px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        bottom: '10%', left: '-100px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            display: 'inline-block', padding: '0.3rem 1.2rem',
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '999px', fontSize: '0.72rem', color: '#a78bfa',
            letterSpacing: '0.18rem', marginBottom: '1rem',
          }}>PROJECTS</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, color: 'var(--text-primary)',
          }}>
            Things I&apos;ve <span style={{ color: '#7c3aed' }}>Built</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.8rem', fontSize: '0.95rem', maxWidth: '450px', margin: '0.8rem auto 0' }}>
            Real-world projects built with modern technologies and deployed to production
          </p>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              {...fadeUp(0.1 * i + 0.1)}
              whileHover={{ y: -4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: isCompact ? '1fr' : (i % 2 === 0 ? '1fr 2fr' : '2fr 1fr'),
                gap: '0',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'var(--card-bg)',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${project.color}44`;
                e.currentTarget.style.boxShadow = `0 0 40px ${project.color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {(() => {
                const showLeftPanel = isCompact || i % 2 === 0;
                const showRightPanel = !isCompact && i % 2 !== 0;
                return (
                  <>
              {/* Number panel */}
              {showLeftPanel && (
                <div style={{
                  background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
                  borderRight: showRightPanel ? 'none' : `1px solid ${project.color}22`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: isCompact ? '1.5rem 1.2rem' : '3rem 2rem', gap: '1rem',
                }}>
                  <span style={{ fontSize: '3.5rem' }}>{project.icon}</span>
                  <span style={{
                    fontFamily: "'Syne', sans-serif", fontSize: '4rem',
                    fontWeight: 900, color: `${project.color}30`,
                    lineHeight: 1,
                  }}>{project.number}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                    {project.highlights.map(h => (
                      <div key={h} style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.4rem 0.8rem',
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        borderRadius: '6px',
                      }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: project.color, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Content panel */}
              <div style={{ padding: isCompact ? '1.5rem 1.2rem' : '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: project.color, boxShadow: `0 0 8px ${project.color}` }} />
                    <span style={{ fontSize: '0.7rem', color: project.color, letterSpacing: '0.15rem' }}>PROJECT {project.number}</span>
                    {project.badge && (
                      <span style={{
                        padding: '0.2rem 0.7rem',
                        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                        borderRadius: '999px',
                        fontSize: '0.6rem',
                        color: '#fff',
                        fontWeight: 700,
                        letterSpacing: '0.1rem',
                        boxShadow: '0 0 10px rgba(124,58,237,0.5)',
                      }}>⭐ {project.badge}</span>
                    )}
                  </div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontSize: '1.3rem',
                    fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3,
                  }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tech.map(t => (
                      <span key={t} style={{
                        padding: '0.3rem 0.8rem',
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}30`,
                        borderRadius: '999px',
                        fontSize: '0.72rem', color: project.color,
                        fontWeight: 500,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" style={{
                      padding: '0.6rem 1.4rem',
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                      color: '#fff', borderRadius: '8px', textDecoration: 'none',
                      fontSize: '0.8rem', fontWeight: 600,
                      boxShadow: `0 0 15px ${project.color}40`,
                      transition: 'all 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 0 25px ${project.color}66`; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 0 15px ${project.color}40`; }}
                    >Live Demo ↗</a>
                  )}
                  <a href={project.github} style={{
                    padding: '0.6rem 1.4rem',
                    border: `1px solid ${project.color}40`,
                    color: 'var(--text-secondary)', borderRadius: '8px', textDecoration: 'none',
                    fontSize: '0.8rem', fontWeight: 600,
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(124,58,237,0.06)',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = `${project.color}80`; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = `${project.color}40`; }}
                  >GitHub →</a>
                </div>
              </div>

              {/* Right number panel for even items */}
              {showRightPanel && (
                <div style={{
                  background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
                  borderLeft: `1px solid ${project.color}22`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '3rem 2rem', gap: '1rem',
                }}>
                  <span style={{ fontSize: '3.5rem' }}>{project.icon}</span>
                  <span style={{
                    fontFamily: "'Syne', sans-serif", fontSize: '4rem',
                    fontWeight: 900, color: `${project.color}30`, lineHeight: 1,
                  }}>{project.number}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                    {project.highlights.map(h => (
                      <div key={h} style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.4rem 0.8rem',
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        borderRadius: '6px',
                      }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: project.color, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
                  </>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
