export const meta = {
  metadataBase: new URL('https://pinexio.vercel.app'),
  title: 'SynapseStack - Documentation',
  icons: {
    icon: '/ChatGPT Image Apr 18, 2025, 04_50_18 PM.png', // Path to your site logo/icon
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  description:
    'A customizable Open Source documentation template built with Next.js',
  authors: [{ name: 'Harsh Bhatt' }],
  keywords: [
    'SynapseStack',
    'documentation template',
    'template',
    'Next.js',
    'React',
    'JavaScript',
  ],
  publisher: 'Harsh Bhatt',
  creator: 'Harsh Bhatt',
  openGraph: {
    type: 'website',
    title: 'Pinexio - Documentation Template',
    description:
      'A customizable open-source documentation template built with Next.js.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Pinexio Documentation Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    title: 'Pinexio - Documentation Template', // Twitter card title
    description:
      'A customizable open-source documentation template built with Next.js.', // Twitter card description
    images: ['/og_image.png'], // Image used in the Twitter card
    creator: '@sanjayrajeev', // Twitter handle of the content creator (optional)
  },
  // SEO Enhancements
  alternates: {
    canonical: 'https://pinexio.vercel.app', // Set the canonical URL
  },
  robots: 'index, follow', // Allows search engines to index and follow links
  // Optional: Hreflang for multilingual content (if applicable)
  hreflang: {
    en: 'https://pinexio.vercel.app', // English version URL
    // Add more hreflang if you have other languages (example: Spanish)
    // "es": "https://pinexio.vercel.app/es",
  },
};
