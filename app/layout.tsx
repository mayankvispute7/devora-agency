import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Devora | Elite Digital Engineering",
  description: "We bridge the gap between enterprise-level technology and ambitious businesses.",
};

// 🟢 THIS LOCKS THE MOBILE VIEWPORT PERFECTLY
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents iOS from zooming in when clicking form inputs
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* overflow-x-hidden on the body guarantees no side-scrolling bugs on mobile */}
      <body className={`${inter.className} bg-[#03010A] text-white antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200`}>
        {children}
      </body>
    </html>
  );
}