import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const dynamic = "force-static";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Q = cmΔt｜神人",
  description: "ENTP · sp/so · 7w8 · 784。神人 cm 的精神宇宙，以及阿波罗特别授权的德尔斐神谕。",
  openGraph: {
    title: "Q = cmΔt｜神人",
    description: "ENTP · 7w8 · 784 · sp/so｜THE ORACLE OF DELPHI",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "神人 cm 的德尔斐神谕" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Q = cmΔt｜神人",
    description: "ENTP · 7w8 · 784 · sp/so｜THE ORACLE OF DELPHI",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
