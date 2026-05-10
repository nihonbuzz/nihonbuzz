import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nihonbuzz - Connecting You to Japan",
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
    ],
  },
  openGraph: {
    title: "Nihonbuzz - Connecting You to Japan",
    description: "Belajar Bahasa Jepang & Karir Profesional. Gabung Nihonbuzz Academy sekarang.",
    url: 'https://nihonbuzz.org',
    siteName: 'Nihonbuzz',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nihonbuzz Ecosystem',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nihonbuzz - Connecting You to Japan",
    description: "Platform edukasi dan media Jepang terdepan di Indonesia.",
    images: ['/opengraph-image.jpg'],
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
