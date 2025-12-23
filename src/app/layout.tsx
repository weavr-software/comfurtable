import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comfurtable - In-Home Pet Euthanasia Services | Southeast Georgia",
  description: "Compassionate in-home euthanasia and end-of-life care for pets in Southeast Georgia. Dr. Missy Weaver provides gentle, veterinarian-led pet euthanasia services in Brunswick, St. Simons Island, Jekyll Island, and Sea Island. 25+ years experience with dignified farewells at home.",
  keywords: [
    "in-home pet euthanasia",
    "pet euthanasia at home",
    "mobile veterinary euthanasia",
    "compassionate pet euthanasia",
    "end of life care for pets",
    "pet hospice care",
    "at home pet euthanasia Southeast Georgia",
    "Brunswick pet euthanasia",
    "St. Simons Island pet euthanasia",
    "Jekyll Island pet euthanasia",
    "Sea Island pet euthanasia",
    "veterinary euthanasia services",
    "dog euthanasia at home",
    "cat euthanasia at home",
    "pet cremation services",
    "Dr. Missy Weaver",
    "gentle pet goodbye",
    "humane pet euthanasia",
  ],
  authors: [{ name: "Dr. Missy Weaver" }],
  creator: "Comfurtable",
  publisher: "Comfurtable",
  metadataBase: new URL("https://comfurtablepets.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://comfurtablepets.com",
    title: "Comfurtable - Compassionate In-Home Pet Euthanasia Services",
    description: "Gentle, veterinarian-led pet euthanasia at home in Southeast Georgia. Dr. Missy Weaver provides compassionate end-of-life care for your beloved pets with 25+ years of experience.",
    siteName: "Comfurtable",
    images: [
      {
        url: "/logo/comfurtable-large.png",
        width: 1200,
        height: 630,
        alt: "Comfurtable - In-Home Pet Euthanasia Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfurtable - In-Home Pet Euthanasia Services",
    description: "Compassionate, veterinarian-led pet euthanasia at home in Southeast Georgia. Gentle goodbyes with dignity and support.",
    images: ["/logo/comfurtable-large.png"],
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Comfurtable",
    "description": "Compassionate in-home pet euthanasia and end-of-life care services",
    "url": "https://comfurtablepets.com",
    "logo": "https://comfurtablepets.com/logo/comfurtable-large.png",
    "image": "https://comfurtablepets.com/art/hero.png",
    "telephone": "+1-912-357-3329",
    "email": "confurtablepets@gmail.com",
    "priceRange": "$400-$700",
    "areaServed": [
      {
        "@type": "City",
        "name": "Brunswick",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "GA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City", 
        "name": "St. Simons Island",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "GA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Jekyll Island",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "GA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Sea Island",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "GA",
          "addressCountry": "US"
        }
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Southeast Georgia",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.149",
      "longitude": "-81.495"
    },
    "employee": {
      "@type": "Person",
      "name": "Dr. Missy Weaver",
      "jobTitle": "Veterinarian",
      "description": "Graduate of the University of Georgia with 25+ years experience in small animal medicine"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pet Euthanasia Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "In-home euthanasia",
            "description": "A peaceful, veterinarian-led goodbye in the comfort of your home"
          },
          "price": "400",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Euthanasia with Communal Cremation",
            "description": "Pet cremation without return of ashes, with optional keepsakes"
          },
          "price": "500",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Euthanasia with Private Cremation",
            "description": "Includes return of ashes, urn, clay paw print and lock of hair"
          },
          "price": "700",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4WRCX9ZWRC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4WRCX9ZWRC');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
