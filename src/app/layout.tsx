import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Muqadas Urooj - Software Engineer & Full Stack Developer",
  description: "Software Engineer and Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies. Silver Medalist with 3.91/4.00 CGPA.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Karachi, Pakistan"],
  authors: [{ name: "Muqadas Urooj" }],
  creator: "Muqadas Urooj",
  openGraph: {
    title: "Muqadas Urooj - Software Engineer & Full Stack Developer",
    description: "Software Engineer and Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.",
    url: "https://muqadasurooj.netlify.app",
    siteName: "Muqadas Urooj Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muqadas Urooj - Software Engineer & Full Stack Developer",
    description: "Software Engineer and Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
