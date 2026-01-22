import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Changed font
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NihonBuzz - Connecting You to Japan",
  description: "Platform edukasi dan media Jepang terdepan di Indonesia. Belajar bahasa Jepang (JLPT N5-N3), budaya, dan info karir.",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-icon-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-icon-512x512.png' }, // Assuming these exist or will be mapped
    ],
  },
  openGraph: {
    title: "NihonBuzz - Connecting You to Japan",
    description: "Belajar Bahasa Jepang & Karir Profesional. Gabung NihonBuzz Academy sekarang.",
    url: 'https://nihonbuzz.org',
    siteName: 'NihonBuzz',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'NihonBuzz Ecosystem',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NihonBuzz - Connecting You to Japan",
    description: "Platform edukasi dan media Jepang terdepan di Indonesia.",
    images: ['/opengraph-image.png'],
    creator: '@nihonbuzz',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body
        className={`${jakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
