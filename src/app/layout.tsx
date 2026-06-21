import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./providers";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://botiyo.live"),
  title: {
    default: "Botiyo AI — Free AI Photo Editor & Background Remover",
    template: "%s | Botiyo AI",
  },
  description:
    "Botiyo AI is a free, AI-powered online photo editor. Remove backgrounds, apply generative fill, upscale images, and smart crop — all in your browser in seconds.",
  keywords: [
    "AI photo editor",
    "background remover",
    "generative fill",
    "AI upscale",
    "smart crop",
    "face crop",
    "remove background online free",
    "AI image editing",
    "Botiyo AI",
    "photo editing online",
  ],
  authors: [{ name: "Botiyo AI Team", url: "https://botiyo.live" }],
  creator: "Botiyo AI",
  publisher: "Botiyo AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://botiyo.live",
    siteName: "Botiyo AI",
    title: "Botiyo AI — Free AI Photo Editor & Background Remover",
    description:
      "Transform your photos instantly with Botiyo AI. Remove backgrounds, apply generative fill, upscale, and smart crop using powerful AI tools — free in your browser.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Botiyo AI — AI Photo Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Botiyo AI — Free AI Photo Editor",
    description:
      "Remove backgrounds, apply generative fill, upscale images & more — all free using Botiyo AI's powerful browser-based AI tools.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://botiyo.live",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// JSON-LD Structured Data
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Botiyo AI",
  url: "https://botiyo.live",
  description:
    "AI-powered photo editing platform. Remove backgrounds, generative fill, smart crop, upscale and more.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://botiyo.live/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Botiyo AI",
  url: "https://botiyo.live",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free Plan",
    },
    {
      "@type": "Offer",
      price: "19",
      priceCurrency: "USD",
      name: "Pro Plan",
    },
  ],
  description:
    "Botiyo AI provides AI-powered image editing capabilities including background removal, generative fill, smart cropping, and upscaling directly in the browser.",
  screenshot: "https://botiyo.live/og-image.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1942572265765591"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
