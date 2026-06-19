import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import JsonLd from './components/JsonLd';

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL('https://rithvik-dev.netlify.app'),
  applicationName: 'Rithvik R Portfolio',
  icons: {
    icon: '/rithvik.jpg',
    shortcut: '/rithvik.jpg',
    apple: '/rithvik.jpg',
  },
  title: {
    default: 'Rithvik R - Full Stack Developer | Java & Spring Boot',
    template: '%s | Rithvik R',
  },
  description: 'Rithvik R is a CSE Final Year student from GCE Erode specializing in Java, Spring Boot, AWS, Django, Next.js and full-stack web development. Open to software developer roles.',
  keywords: [
    'Rithvik R',
    'Rithvik',
    'Rithvik portfolio',
    'Rithvik dev',
    'Rithvik R netlify',
    'portfolio',
    'netlify portfolio',
    'netlify',
    'Rithvik portfolio',
    'Rithvik R dev namakkal portfolio',
    'Rithvik dev portfolio',
    'Rithvik R portfolio',
    'Rithvik R dev portfolio',
    'Rithvik dev portfolio',
    'Rithvik developer',
    'Full Stack Developer',
    'Software Developer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Java Developer',
    'Spring Boot Developer',
    'React Developer',
    'Full Stack Developer',
    'Full Stack Java Developer',
    'Django Developer Portfolio',
    'Next.js Portfolio',
    'GCE Erode',
    'CSE Student',
    'Computer Science Student',
    'AWS Developer',
    'Django Developer',
    'Next.js Developer',
    'MySQL Developer',
    'Firebase Developer',
    'Razorpay Integration',
    'Twilio Integration',
    'REST API Developer',
    'Namakkal',
    'Tamil Nadu',
    'Chennai',
    'Software Developer India',
    'Software Developer Tamil Nadu',
    'Java Spring Boot portfolio',
    'Django Next.js full stack',
    'Portfolio',
    'Student Portfolio Website',
    'Final Year Project',
    'Ride sharing project',
    'Carpool Website',
    'Internship Portfolio',
    'iNoesis',
    'Incrix',
  ],
  authors: [{ name: 'Rithvik R', url: 'https://rithvik-dev.netlify.app' }],
  creator: 'Rithvik R',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rithvik-dev.netlify.app',
    siteName: 'Rithvik R Portfolio',
    title: 'Rithvik R - Software Developer | Java & Spring Boot',
    description: 'CSE Final Year student from GCE Erode. Building scalable backends with Java, Spring Boot & AWS. Open to software developer roles.',
    images: [
      {
        url: 'https://rithvik-dev.netlify.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rithvik R - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rithvik R - Software Developer',
    description: 'CSE Final Year | Java | Spring Boot | AWS | Django | Next.js',
    images: ['https://rithvik-dev.netlify.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://rithvik-dev.netlify.app',
  },
  verification: {
    google: 'googleb610cc557e045993',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>
        <ThemeProvider>
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
