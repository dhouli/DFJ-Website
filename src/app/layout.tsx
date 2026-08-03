import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://danceforjoynj.com";

// Google Analytics 4 — reuses the existing GA4 property already set up for
// danceforjoynj.com (visible under danceforjoynj@gmail.com in
// analytics.google.com) rather than creating a duplicate one. Wired in now
// so visitor data starts flowing the moment the rebuilt site goes live.
const gaMeasurementId = "G-N8QV881ZRG";
const title = "Dance For Joy | Inspiring Confidence, One Step at a Time";
const description =
  "A warm, professional dance studio in Brielle, NJ offering age-appropriate classes in ballet, tap, jazz, hip hop, acro, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Dance For Joy",
    images: [
      {
        url: "/images/FinalLogoDFJTransparent-Black-background2.jpg",
        width: 661,
        height: 582,
        alt: "Dance For Joy logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/FinalLogoDFJTransparent-Black-background2.jpg"],
  },
};

// Structured data so search engines (and the AI assistants people are
// increasingly searching through) understand exactly what Dance For Joy is,
// where it is, and how to reach it. This is one of the biggest levers for
// showing up when someone searches "dance studio near me" or "dance classes
// Brielle NJ" — combined with an active, well-reviewed Google Business
// Profile (see TODO.md for what Kim needs to do there).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "Dance For Joy",
  image: `${siteUrl}/images/FinalLogoDFJTransparent-Black-background2.jpg`,
  url: siteUrl,
  telephone: "+1-732-223-5336",
  email: "danceforjoynj@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1025 NJ-70 #2",
    addressLocality: "Brielle",
    addressRegion: "NJ",
    postalCode: "08730",
    addressCountry: "US",
  },
  areaServed: [
    "Brielle, NJ",
    "Manasquan, NJ",
    "Wall Township, NJ",
    "Point Pleasant, NJ",
    "Sea Girt, NJ",
    "Spring Lake, NJ",
    "Howell, NJ",
  ],
  sameAs: [
    "https://www.facebook.com/danceforjoynj/",
    "https://www.instagram.com/danceforjoynj/",
    "https://vimeo.com/danceforjoynj",
    "https://www.youtube.com/user/DanceForJoyNJ",
  ],
  description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
