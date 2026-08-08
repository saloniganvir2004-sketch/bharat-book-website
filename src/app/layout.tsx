import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://bharat-book-website.vercel.app"),
  title: "BHARAT — The Hindu Civilization & Its Politics | Mayur Maskhare",
  description:
    "Discover BHARAT: The Hindu Civilization & Its Politics by Mayur Maskhare. A documented journey across India's civilizational history, knowledge, politics and enduring questions. Available now.",
  keywords: [
    "BHARAT",
    "Hindu Civilization",
    "Mayur Maskhare",
    "Indian History",
    "Hindu Politics",
    "Documented History",
    "Civilization Book",
    "Gyan Ganj",
    "Itihasa",
  ],
  authors: [{ name: "Mayur Maskhare" }],
  publisher: "Mayur Maskhare",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "BHARAT — The Hindu Civilization & Its Politics | Mayur Maskhare",
    description:
      "You were taught history. But were you taught all of it? A documented history of one civilization by Mayur Maskhare. Available now.",
    url: "https://bharat-book-website.vercel.app",
    siteName: "BHARAT Official Book Website",
    images: [
      {
        url: "/images/og/bharat-og.png",
        width: 1200,
        height: 630,
        alt: "BHARAT: The Hindu Civilization & Its Politics by Mayur Maskhare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHARAT — The Hindu Civilization & Its Politics | Mayur Maskhare",
    description:
      "You were taught history. But were you taught all of it? A documented history of one civilization by Mayur Maskhare. Available now.",
    images: ["/images/og/bharat-og.png"],
  },
  alternates: {
    canonical: "https://bharat-book-website.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${plusJakarta.variable} dark scroll-smooth`}
    >
      <body className="bg-[#07101F] text-[#F2EBDD] antialiased selection:bg-[#C9973E] selection:text-[#07101F] min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
