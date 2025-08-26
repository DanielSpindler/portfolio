import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    shortcut: "/favicon.png",
  },
  title: "Daniel Spindler's Portfolio",
  description: "A showcase of my work as a Full Stack Developer",
  openGraph: {
    title: "Portfolio Daniel",
    description: "Just a portfolio",
    url: "https://daniel-spindler.de",
    siteName: "daniel-spindler.de",
    locale: "en-US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overscroll-none bg-black/90`}
      >
        <Providers>
          <div
            style={{
              backgroundImage: "url('/KitsuneShrine.jpg')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <Header />
            <div className="backdrop-blur-xs bg-black/25 overflow-auto">
              <main className="flex h-screen items-center sm:items-start text-white text-shadow-black text-shadow-md">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
