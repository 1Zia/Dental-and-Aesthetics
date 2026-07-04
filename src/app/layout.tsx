import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileWhatsapp } from "@/components/layout/sticky-mobile-whatsapp";
import { clinic, siteUrl } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinic.fullName} | ${clinic.city}`,
    template: `%s | ${clinic.name}`
  },
  description:
    "Premium dental care, facial aesthetics, skin, hair, laser, Botox, fillers, PRP, and cosmetic treatments by Dr. Romana Afridi in Islamabad.",
  keywords: [
    "Dental Hub by Dr Romana",
    "Dental and Aesthetic Hub Islamabad",
    "Dr Romana Afridi",
    "dentist B-17 Islamabad",
    "Botox Islamabad",
    "fillers Islamabad",
    "PRP Islamabad",
    "skin treatments Islamabad"
  ],
  openGraph: {
    title: clinic.fullName,
    description:
      "Female doctor-led dental and aesthetic medicine in Islamabad: dental, skin, hair, laser, Botox, fillers, and PRP.",
    url: siteUrl,
    siteName: clinic.fullName,
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: clinic.fullName,
    description: "Premium dental and aesthetic medicine in B-17 Islamabad."
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <StickyMobileWhatsapp />
      </body>
    </html>
  );
}
