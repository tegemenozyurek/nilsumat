import type { Metadata } from "next";
import { Dancing_Script, Inter, Poppins, WindSong } from "next/font/google";
import "./globals.css";

// Ana gövde fontu: Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Başlıklar ve vurgular için: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

// El yazısı efekti için: Dancing Script
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
});

// El yazısı efekti için: WindSong
const windSong = WindSong({
  subsets: ["latin"],
  variable: "--font-windsong",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nilsu Mat",
  description:
    "Ortaokul, LGS, TYT ve AYT seviyelerinde birebir özel matematik dersleri. Nilsu Uğurlu ile güvenilir, planlı ve öğrencinin seviyesine uygun matematik eğitimi.",
  metadataBase: new URL("https://tegemenozyurek.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nilsu Mat",
    description:
      "Ortaokul, LGS, TYT ve AYT öğrencileri için online ve yüz yüze birebir matematik dersleri.",
    url: "https://tegemenozyurek.github.io",
    siteName: "Nilsu Mat",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${poppins.variable} ${dancingScript.variable} ${windSong.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
