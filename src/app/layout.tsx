import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { ApolloWrapper } from "./ApolloWrapper";

const hkGrotesk = localFont({
  src: [
    {
      path: './../fonts/HKGrotesk/HKGrotesk-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './../fonts/HKGrotesk/HKGrotesk-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './../fonts/HKGrotesk/HKGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-hk-grotesk",
});

const aquawaxPro = localFont({
  src: [
    {
      path: './../fonts/Aquawax-Pro/Aquawax Pro Light/Aquawax-Pro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './../fonts/Aquawax-Pro/Aquawax Pro Medium/Aquawax-Pro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/Aquawax-Pro/Aquawax Pro UltraBold/Aquawax-Pro-UltraBold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: "--font-aquawax-pro",
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
        className={`${hkGrotesk.variable} ${aquawaxPro.variable} antialiased bg-slate-50 dark:bg-slate-900`}
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
