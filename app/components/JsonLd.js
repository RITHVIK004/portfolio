export default function JsonLd() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://rithvik-dev.netlify.app/#person',
      name: 'Rithvik R',
      url: 'https://rithvik-dev.netlify.app',
      image: 'https://rithvik-dev.netlify.app/rithvik.jpg',
      jobTitle: 'Full Stack Developer',
      description: 'CSE Graduate (2026) from GCE Erode specializing in Java, Spring Boot, AWS and full-stack development.',
      email: 'rineeshnitheen@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Namakkal',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Government College of Engineering, Erode',
      },
      knowsAbout: [
        'Java', 'Spring Boot', 'AWS', 'Django',
        'Next.js', 'MySQL', 'Firebase', 'React',
      ],
      sameAs: [
        'https://linkedin.com/in/rithvik-developer',
        'https://github.com/RITHVIK004',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://rithvik-dev.netlify.app/#website',
      url: 'https://rithvik-dev.netlify.app',
      name: 'Rithvik R Portfolio',
      inLanguage: 'en-IN',
      image: 'https://rithvik-dev.netlify.app/og-image.png',
      thumbnailUrl: 'https://rithvik-dev.netlify.app/rithvik.jpg',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rithvik-dev.netlify.app/rithvik.jpg',
      },
      publisher: {
        '@id': 'https://rithvik-dev.netlify.app/#person',
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
