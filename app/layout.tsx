import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "mvplab - Build MVPs that Launch Fast and Scale Faster",
  description: "High-Impact MVPs for Founders Who Move Fast. We build MVPs with killer design, smooth UX, and real user value. From idea to launch in 2-4 weeks.",
  keywords: ["MVP development", "startup development", "rapid prototyping", "product development", "tech startup", "SaaS development", "mobile app development", "voice agent", "AI development", "startup studio"],
  authors: [{ name: "mvplab" }],
  creator: "mvplab",
  publisher: "mvplab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mvplab.dev",
    siteName: "mvplab",
    title: "mvplab - Build MVPs that Launch Fast and Scale Faster",
    description: "High-Impact MVPs for Founders Who Move Fast. We build MVPs with killer design, smooth UX, and real user value. From idea to launch in 2-4 weeks.",
    images: [
      {
        url: "https://mvplab.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "mvplab - MVP Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mvplab - Build MVPs that Launch Fast and Scale Faster",
    description: "High-Impact MVPs for Founders Who Move Fast. We build MVPs with killer design, smooth UX, and real user value.",
    images: ["https://mvplab.dev/og-image.png"],
    creator: "@mvplab",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: "https://mvplab.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "mvplab",
    url: "https://mvplab.dev",
    logo: "https://mvplab.dev/logo.png",
    description: "High-Impact MVPs for Founders Who Move Fast. We build MVPs with killer design, smooth UX, and real user value.",
    sameAs: [
      "https://twitter.com/mvplab",
      "https://linkedin.com/company/mvplab",
      "https://github.com/mvplab"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@mvplab.dev"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "999",
      highPrice: "9999",
      offerCount: "3"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#6366f1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  );
}