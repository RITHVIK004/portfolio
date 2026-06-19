'use client';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: '#7c3aed',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'C', icon: 'c' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙',
    color: '#06b6d4',
    skills: [
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Django', icon: 'django' },
      { name: 'REST API', icon: 'fastapi' },
      { name: 'JSP', icon: 'java' },
    ],
  },
  {
    category: 'Frontend',
    icon: '◈',
    color: '#a855f7',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    category: 'Database & Cloud',
    icon: '☁',
    color: '#06b6d4',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'AWS EC2', icon: 'amazonwebservices' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Aurora RDS', icon: 'amazonwebservices' },
    ],
  },
  {
    category: 'Integrations',
    icon: '🔌',
    color: '#7c3aed',
    skills: [
      { name: 'Razorpay', icon: 'razorpay' },
      { name: 'Twilio', icon: 'twilio' },
      { name: 'Firebase Auth', icon: 'firebase' },
      { name: 'OpenWeatherMap', icon: 'openapi' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠',
    color: '#a855f7',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
      { name: 'Netlify', icon: 'netlify' },
    ],
  },
];

// Map icon names to Devicon class names
const deviconMap = {
  java: 'devicon-java-plain colored',
  javascript: 'devicon-javascript-plain colored',
  python: 'devicon-python-plain colored',
  c: 'devicon-c-plain colored',
  spring: 'devicon-spring-plain colored',
  django: 'devicon-django-plain colored',
  fastapi: 'devicon-fastapi-plain colored',
  html5: 'devicon-html5-plain colored',
  css3: 'devicon-css3-plain colored',
  nextjs: 'devicon-nextjs-plain',
  react: 'devicon-react-original colored',
  mysql: 'devicon-mysql-plain colored',
  amazonwebservices: 'devicon-amazonwebservices-plain-wordmark colored',
  firebase: 'devicon-firebase-plain colored',
  twilio: 'devicon-twilio-plain colored',
  openapi: 'devicon-openapi-plain colored',
  git: 'devicon-git-plain colored',
  github: 'devicon-github-original',
  vscode: 'devicon-vscode-plain colored',
  netlify: 'devicon-netlify-plain colored',
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Skills() {
  const { isDark } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  // Load Devicons CSS
  useEffect(() => {
    if (!document.querySelector('#devicons-css')) {
      const link = document.createElement('link');
      link.id = 'devicons-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsNarrow(window.innerWidth < 430);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const t = {
    bg: isDark
      ? 'linear-gradient(180deg, #0a0d2e 0%, #05071a 100%)'
      : 'linear-gradient(180deg, #ede9fe 0%, #f5f3ff 100%)',
    headingColor: 'var(--text-primary)',
    subText: 'var(--text-muted)',
    badgeBg: isDark ? 'rgba(124,58,237,0.12)' : 'rgba(124,58,237,0.08)',
    badgeBorder: isDark ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.35)',
    badgeText: isDark ? '#a78bfa' : '#6d28d9',
    cardBg: 'var(--card-bg)',
    cardBorder: 'var(--border)',
    cardShadow: isDark ? 'none' : '0 4px 24px rgba(124,58,237,0.07)',
    catColor: 'var(--text-primary)',
    skillName: 'var(--text-primary)',
    skillBg: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)',
    skillBorder: isDark ? 'rgba(255,255,255,0.08)' : 'var(--border)',
    skillShadow: isDark ? 'none' : '0 2px 8px rgba(124,58,237,0.06)',
    stripBg: isDark ? 'rgba(124,58,237,0.06)' : 'var(--card-bg)',
    stripBorder: isDark ? 'rgba(124,58,237,0.2)' : 'var(--border)',
    stripTitle: 'var(--text-primary)',
    stripSub: 'var(--text-secondary)',
    iconFilter: isDark ? 'none' : 'none',
  };

  return (
    <section id="skills" style={{
      padding: isMobile ? '6rem 1rem' : '8rem 2rem',
      background: t.bg,
      position: 'relative', overflow: 'hidden',
      transition: 'background 0.4s ease',
    }}>
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        top: '5%', right: '-150px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        bottom: '5%', left: '-100px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: isMobile ? '2.8rem' : '4.5rem' }}>
          <span style={{
            display: 'inline-block', padding: '0.35rem 1.3rem',
            background: t.badgeBg, border: `1px solid ${t.badgeBorder}`,
            borderRadius: '999px', fontSize: '0.72rem', color: t.badgeText,
            letterSpacing: '0.18rem', marginBottom: '1rem',
          }}>TECHNICAL SKILLS</span>

          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, color: t.headingColor,
          }}>
            My <span style={{ color: '#7c3aed' }}>Tech Stack</span>
          </h2>

          <p style={{
            color: t.subText, marginTop: '0.8rem', fontSize: '0.95rem',
            maxWidth: '460px', margin: '0.8rem auto 0',
          }}>
            Technologies I use to build scalable, production-ready applications
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              {...fadeUp(0.08 * gi + 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                padding: isMobile ? '1.2rem' : '1.8rem',
                background: t.cardBg,
                border: `1px solid ${t.cardBorder}`,
                borderRadius: '20px',
                backdropFilter: 'blur(12px)',
                boxShadow: t.cardShadow,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${group.color}66`;
                e.currentTarget.style.boxShadow = `0 12px 40px ${group.color}20`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = t.cardBorder;
                e.currentTarget.style.boxShadow = t.cardShadow;
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.2rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: `${group.color}18`,
                  border: `1px solid ${group.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', color: group.color, fontWeight: 700,
                  boxShadow: `0 0 16px ${group.color}22`,
                }}>
                  {group.icon}
                </div>
                <div>
                  <span style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 800,
                    fontSize: '1rem', color: t.catColor,
                  }}>
                    {group.category}
                  </span>
                  <p style={{ fontSize: '0.7rem', color: t.subText, marginTop: '0.1rem' }}>
                    {group.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Gradient divider */}
              <div style={{
                height: '1px', marginBottom: '1.3rem',
                background: `linear-gradient(90deg, ${group.color}55, transparent)`,
              }} />

              {/* Skill tiles with logos */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr',
                gap: '0.7rem',
              }}>
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * si + 0.08 * gi, duration: 0.4 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      padding: '0.7rem 0.9rem',
                      background: t.skillBg,
                      border: `1px solid ${t.skillBorder}`,
                      borderRadius: '10px',
                      boxShadow: t.skillShadow,
                      cursor: 'default',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${group.color}55`;
                      e.currentTarget.style.boxShadow = `0 4px 16px ${group.color}18`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = t.skillBorder;
                      e.currentTarget.style.boxShadow = t.skillShadow;
                    }}
                  >
                    {/* Tech logo */}
                    {skill.name === 'Razorpay' ? (
                      <img
                        src="https://razorpay.com/favicon.ico"
                        alt="Razorpay"
                        style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '4px' }}
                      />
                    ) : skill.icon.startsWith('http') ? (
                      <img
                        src={skill.icon}
                        alt=""
                        style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          flexShrink: 0,
                        }}
                      />
                    ) : deviconMap[skill.icon] ? (
                      <i
                        className={deviconMap[skill.icon]}
                        style={{
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          color: isDark && (skill.icon === 'nextjs' || skill.icon === 'django') ? '#ffffff' : undefined,
                          filter: 'none',
                        }}
                      />
                    ) : (
                      <span
                        style={{
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        {skill.icon}
                      </span>
                    )}
                    <span style={{
                      fontSize: '0.8rem',
                      color: t.skillName,
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          {...fadeUp(0.6)}
          style={{
            marginTop: '2.5rem',
            padding: isMobile ? '1.2rem' : '1.8rem 2.5rem',
            background: t.stripBg,
            border: `1px solid ${t.stripBorder}`,
            borderRadius: '16px',
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between',
            gap: '1.2rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              color: t.stripTitle, fontSize: '1.05rem', marginBottom: '0.3rem',
            }}>
              Always Learning ✦
            </p>
            <p style={{ fontSize: '0.85rem', color: t.stripSub }}>
              Currently deepening expertise in Django, Next.js & Cloud architecture
            </p>
          </div>

          {/* Learning tech with logos */}
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { name: 'Django', icon: 'devicon-django-plain colored' },
              { name: 'Next.js', icon: 'devicon-nextjs-plain' },
              { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
              { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i + 0.6 }}
                whileHover={{ scale: 1.15, y: -3 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem',
                  cursor: 'default',
                }}
              >
                <i
                  className={item.icon}
                  style={{
                    fontSize: '2rem',
                    color: isDark && (item.name === 'Next.js' || item.name === 'Django') ? '#ffffff' : undefined,
                    filter: 'none',
                  }}
                />
                <span style={{ fontSize: '0.65rem', color: t.subText, fontWeight: 500 }}>{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
