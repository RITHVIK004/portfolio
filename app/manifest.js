export default function manifest() {
  return {
    name: 'Rithvik R Portfolio',
    short_name: 'Rithvik.dev',
    description: 'Portfolio of Rithvik R - Software Developer specializing in Java, Spring Boot, AWS, Django and Next.js.',
    start_url: '/',
    display: 'standalone',
    background_color: '#05071a',
    theme_color: '#7c3aed',
    icons: [
      {
        src: '/rithvik.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/rithvik.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
