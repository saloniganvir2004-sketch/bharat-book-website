import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["Times New Roman", "serif"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#07101F",
  width: "device-width",
  initialScale: 1,
};

const siteTitle = "BHARAT: The Hindu Civilization & Its Politics | Mayur Maskhare";
const siteDescription =
  "Discover BHARAT: The Hindu Civilization & Its Politics by Mayur Maskhare. A documented history of Indian civilization. Available now on Amazon and Kindle.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "BHARAT book",
    "Hindu civilization book",
    "Mayur Maskhare",
    "Indian history book",
    "Bharat Amazon",
    "Bharat Kindle",
  ],
  authors: [{ name: "Mayur Maskhare" }],
  publisher: "Mayur Maskhare",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: "BHARAT Official Book Website",
    images: [
      {
        url: "/images/BHARAT_Cover_final.png",
        width: 1600,
        height: 2560,
        alt: siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/BHARAT_Cover_final.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "BHARAT: The Hindu Civilization & Its Politics",
    "author": {
      "@type": "Person",
      "name": "Mayur Maskhare",
    },
    "publisher": {
      "@type": "Person",
      "name": "Mayur Maskhare",
    },
    "inLanguage": "en",
    "isbn": "978-93-6068-755-7",
    "bookFormat": "https://schema.org/EBook",
    "url": SITE_URL,
    "image": `${SITE_URL}/images/BHARAT_Cover_final.png`,
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${plusJakarta.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07101F] text-[#F2EBDD] antialiased selection:bg-[#C9973E] selection:text-[#07101F] min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
