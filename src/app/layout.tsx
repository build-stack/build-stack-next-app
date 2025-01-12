import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./ApolloWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corneliu Iancu",
  description: "Corneliu Iancu's personal blog on technology, software development, and more",
  keywords: ["Corneliu Iancu", "technology", "software development", "blog", "personal website"],
  authors: [{ name: "Corneliu Iancu", url: "https://corneliuiancu.com" }],
  creator: "Corneliu Iancu",
  publisher: "Corneliu Iancu",
  openGraph: {
    title: "Corneliu Iancu",
    description: "Corneliu Iancu's personal blog on technology, software development, and more",
    url: "https://corneliu-iancu.com",
    siteName: "Corneliu Iancu",
    images: [{ url: "https://corneliu-iancu.com/og-image.png" }],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
