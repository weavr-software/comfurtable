import type { Metadata } from "next";
import Script from "next/script";
import { config } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "In-Home Pet Euthanasia in Brunswick & the Golden Isles | Comfurtable",
  description:
    "Gentle, compassionate in-home pet euthanasia in Brunswick, St. Simons Island, Jekyll Island, Sea Island, and the Golden Isles. Dr. Missy Weaver provides end-of-life care at home with 25+ years of veterinary experience.",
  keywords: [
    "in-home pet euthanasia",
    "in-home pet euthanasia Brunswick GA",
    "pet euthanasia Brunswick GA",
    "pet euthanasia at home",
    "mobile veterinary euthanasia",
    "compassionate pet euthanasia",
    "end of life care for pets",
    "Brunswick pet euthanasia",
    "St. Simons Island pet euthanasia",
    "Jekyll Island pet euthanasia",
    "Sea Island pet euthanasia",
    "Golden Isles pet euthanasia",
    "how do I know when it is time for pet euthanasia",
    "dog euthanasia at home",
    "cat euthanasia at home",
    "pet cremation services",
    "Dr. Missy Weaver",
    "University of Georgia veterinarian Brunswick",
  ],
  authors: [{ name: "Dr. Missy Weaver" }],
  creator: "Comfurtable",
  publisher: "Comfurtable",
  metadataBase: new URL(config.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.siteUrl,
    title: "In-Home Pet Euthanasia in Brunswick & the Golden Isles | Comfurtable",
    description:
      "Compassionate in-home pet euthanasia and end-of-life care for families in Brunswick and the Golden Isles with Dr. Missy Weaver.",
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
    title: "In-Home Pet Euthanasia in Brunswick & the Golden Isles | Comfurtable",
    description:
      "Gentle, compassionate pet euthanasia at home in Brunswick, St. Simons, Jekyll Island, Sea Island, and nearby Golden Isles communities.",
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
    "name": config.businessName,
    "description": "Compassionate in-home pet euthanasia and end-of-life care in Brunswick and the Golden Isles",
    "url": config.siteUrl,
    "logo": `${config.siteUrl}/logo/comfurtable-large.png`,
    "image": `${config.siteUrl}/art/hero.png`,
    "telephone": "+1-912-357-3329",
    "email": config.email,
    "priceRange": "$500-$700",
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
      "addressLocality": "Brunswick",
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
      "description": "University of Georgia graduate with 25+ years of experience in small animal medicine"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "In-Home Pet Euthanasia Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "In-home euthanasia",
            "description": "A peaceful, veterinarian-led goodbye in the comfort of your home with sedation and family support"
          },
          "price": "400",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Euthanasia with Communal Cremation",
            "description": "In-home euthanasia with communal cremation aftercare coordination"
          },
          "price": "500",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Euthanasia with Private Cremation",
            "description": "In-home euthanasia with private cremation, urn, and return of ashes"
          },
          "price": "600",
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
      <body className="antialiased">
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
