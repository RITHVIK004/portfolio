'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    type: 'CURRENT',
    title: 'Work-Based Learning Intern',
    org: 'C-DAC Chennai',
    location: 'TIDEL Park, Taramani, Chennai',
    period: 'May 2026 – Nov 2026',
    color: '#22c55e',
    icon: '💼',
    points: [
      "Software testing, QA procedures & web application development at MeitY's premier R&D institute.",
      'Hands-on experience in test case design, bug tracking & application maintenance in a team environment.',
    ],
    tag: 'Current',
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    org: 'iNoesis Technology Private Limited',
    location: 'Little Mount, Chennai',
    period: 'Jan 2026 – Apr 2026',
    color: '#7c3aed',
    icon: '💼',
    points: [
      'Completed a 3-month internship at iNoesis Technology Pvt. Ltd. commencing January 21, 2026',
      'Gaining hands-on experience in real-world software development workflows and industry practices',
      'Working on projects to enhance technical skills under professional mentorship',
    ],
    tag: null,
  },
  {
    type: 'work',
    title: 'Full Stack Development Intern',
    org: 'Incrix Techlutions LLP',
    location: 'Kovilpatti',
    period: 'June 2025 – July 2025',
    color: '#06b6d4',
    icon: '💻',
    points: [
      'Worked on full stack web development using Java, Spring Boot and frontend technologies',
      'Gained hands-on experience with real-world project development workflows',
      'Collaborated with team members on building and deploying web applications',
    ],
    tag: null,
  },
  {
    type: 'education',
    title: 'B.E. Computer Science & Engineering',
    org: 'Government College of Engineering, Erode',
    location: 'Erode, Tamil Nadu',
    period: '2022 – 2026',
    color: '#a855f7',
    icon: '🎓',
    points: [
      'Graduated – 2026 with a CGPA of 8.0 up to 8th semester',
      'Served as Class Representative — bridging communication between faculty and students',
      'Secretary of Leo Club GCE Erode — led healthcare, social service and community projects',
    ],
    tag: null,
  },
  {
    type: 'education',
    title: 'Higher Secondary (12th)',
    org: 'Bharathi Higher Secondary School',
    location: 'Namakkal',
    period: '2020 – 2021',
    color: '#64748b',
    icon: '🏫',
    points: [
      'Scored 89.38% in Higher Secondary examinations',
      'Strong foundation in Mathematics and Computer Science',
    ],
    tag: null,
  },
];
const certifications = [
  { name: 'Frontend Developer Internship', issuer: 'iNoesis Technology Pvt. Ltd.', color: '#7c3aed', icon: '🎖️' },
  { name: 'Full Stack Development Internship', issuer: 'Incrix Techlutions LLP', color: '#06b6d4', icon: '🎖️' },
  { name: 'Introduction to HTML', issuer: 'Sololearn', color: '#a855f7', icon: '🏅' },
  { name: 'Introduction to CSS', issuer: 'Sololearn', color: '#a855f7', icon: '🏅' },
];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Experience() {
  const { isDark } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="experience" style={{
      padding: isMobile ? '6rem 1rem' : '8rem 2rem',
      background: isDark
        ? 'linear-gradient(180deg, #0a0d2e 0%, #05071a 100%)'
        : 'linear-gradient(180deg, #ede9fe 0%, #f5f3ff 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        top: '10%', left: '-100px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        bottom: '15%', right: '-80px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: isMobile ? '2.8rem' : '5rem' }}>
          <span style={{
            display: 'inline-block', padding: '0.3rem 1.2rem',
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '999px', fontSize: '0.72rem', color: '#a78bfa',
            letterSpacing: '0.18rem', marginBottom: '1rem',
          }}>EXPERIENCE & EDUCATION</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, color: 'var(--text-primary)',
          }}>
            My <span style={{ color: '#7c3aed' }}>Journey</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? '2.2rem' : '4rem' }}>

          {/* Timeline */}
          <div>
            <motion.p {...fadeUp(0.1)} style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.2rem', marginBottom: '2rem' }}>
              TIMELINE
            </motion.p>

            {/* Vertical timeline */}
            <div style={{ position: 'relative', paddingLeft: isMobile ? '1.3rem' : '2rem' }}>
              {/* Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{
                  position: 'absolute', left: '7px', top: '8px',
                  width: '2px', height: 'calc(100% - 16px)',
                  background: 'linear-gradient(to bottom, #7c3aed, #06b6d4, #a855f7)',
                  transformOrigin: 'top',
                  borderRadius: '2px',
                }}
              />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.15 * i + 0.2)}
                  style={{ position: 'relative', marginBottom: '2.5rem' }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: isMobile ? '-1.3rem' : '-2rem', top: '4px',
                    width: '16px', height: '16px', borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}88`,
                    border: '2px solid #05071a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.5rem',
                  }} />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    style={{
                      padding: isMobile ? '1rem' : '1.4rem',
                      background: 'var(--card-bg)',
                      border: `1px solid ${exp.color}25`,
                      borderRadius: '12px',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${exp.color}55`;
                      e.currentTarget.style.boxShadow = `0 0 20px ${exp.color}12`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = `${exp.color}25`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <span style={{ fontSize: '0.95rem' }}>{exp.icon}</span>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: '0.3rem' }}>
                          {exp.title}
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: exp.color, marginTop: '0.2rem' }}>{exp.org}</p>
                        <p style={{ fontSize: '0.72rem', color: '#475569', marginTop: '0.1rem' }}>{exp.location}</p>
                        {exp.type === 'current' && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '0.8rem', flexWrap: 'wrap' }}>
                            <span style={{
                              padding: '0.25rem 0.7rem',
                              background: `${exp.color}15`,
                              border: `1px solid ${exp.color}30`,
                              borderRadius: '999px',
                              fontSize: '0.65rem', color: exp.color,
                              whiteSpace: 'nowrap',
                            }}>{exp.period}</span>
                            {exp.tag && (
                              <span style={{
                                padding: '0.2rem 0.6rem',
                                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                                borderRadius: '999px',
                                fontSize: '0.6rem', color: '#fff', fontWeight: 700,
                                letterSpacing: '0.1rem',
                                boxShadow: '0 0 10px rgba(34,197,94,0.4)',
                                animation: 'pulse-glow 2s infinite',
                              }}>● {exp.tag}</span>
                            )}
                          </div>
                        )}
                      </div>
                      {exp.type !== 'current' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
                          {exp.tag && (
                            <span style={{
                              padding: '0.2rem 0.6rem',
                              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                              borderRadius: '999px',
                              fontSize: '0.6rem', color: '#fff', fontWeight: 700,
                              letterSpacing: '0.1rem',
                              boxShadow: '0 0 10px rgba(34,197,94,0.4)',
                              animation: 'pulse-glow 2s infinite',
                            }}>● {exp.tag}</span>
                          )}
                          <span style={{
                            padding: '0.25rem 0.7rem',
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}30`,
                            borderRadius: '999px',
                            fontSize: '0.65rem', color: exp.color,
                            whiteSpace: 'nowrap',
                          }}>{exp.period}</span>
                        </div>
                      )}
                    </div>

                    <ul style={{ paddingLeft: '0', listStyle: 'none', marginTop: '0.8rem' }}>
                      {exp.points.map((pt, pi) => (
                        <li key={pi} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'flex-start' }}>
                          <span style={{ color: exp.color, fontSize: '0.7rem', marginTop: '0.3rem', flexShrink: 0 }}>▸</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications + Soft Skills */}
          <div>
            <motion.p {...fadeUp(0.1)} style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.2rem', marginBottom: '2rem' }}>
              CERTIFICATIONS
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.15 * i + 0.2)}
                  whileHover={{ x: 4, borderColor: `${cert.color}55` }}
                  style={{
                    padding: '1.2rem 1.4rem',
                    background: 'var(--card-bg)',
                    border: `1px solid ${cert.color}20`,
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}>{cert.icon}</div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>{cert.name}</p>
                    <p style={{ fontSize: '0.75rem', color: cert.color, marginTop: '0.2rem' }}>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft skills */}
            <motion.p {...fadeUp(0.4)} style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.2rem', marginBottom: '1.5rem' }}>
              SOFT SKILLS & LEADERSHIP
            </motion.p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.75rem' }}>
              {[
                { skill: 'Problem Solving', icon: '🧩' },
                { skill: 'Team Collaboration', icon: '🤝' },
                { skill: 'Decision Making', icon: '⚡' },
                { skill: 'Leadership', icon: '🎯' },
                { skill: 'Communication', icon: '💬' },
                { skill: 'Time Management', icon: '⏱️' },
              ].map((item, i) => (
                <motion.div
                  key={item.skill}
                  {...fadeUp(0.08 * i + 0.5)}
                  whileHover={{ scale: 1.04 }}
                  style={{
                    padding: '0.9rem 1rem',
                    background: 'rgba(124,58,237,0.06)',
                    border: '1px solid rgba(124,58,237,0.15)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.15)'}
                >
                  <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{item.skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




