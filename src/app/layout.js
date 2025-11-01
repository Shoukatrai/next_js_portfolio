import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shoukat Dev | MERN Stack Developer",
  description:
    "Shoukat Rai — MERN Stack Developer crafting fast, scalable, and responsive web applications using React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Web Developer",
    "Freelancer",
    "Shoukat Rai",
  ],
  openGraph: {
    title: "Shoukat Dev | MERN Stack Developer",
    description:
      "Building high-performance full-stack web apps with modern technologies.",
    url: "https://yourdomain.com",
    siteName: "Shoukat Dev Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shoukat Dev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoukat Dev | MERN Stack Developer",
    description:
      "MERN Stack Developer specializing in building fast, modern web apps.",
    creator: "@ShoukatRai4",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
