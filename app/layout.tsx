import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Devora | Elite Digital Solutions",
  description: "We build anything your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      {/* This applies the new premium font to the ENTIRE website automatically */}
      <body className="bg-[#05050A] text-white font-sans antialiased selection:bg-white/20">
        {children}
      </body>
    </html>
  );
}