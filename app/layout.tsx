import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shenren-cm.realazy.chatgpt.site"),
  title: "神人 cm｜ENTP 的德尔斐神谕",
  description: "ENTP · sp/so · 7w8 · 784。神人 cm 的精神宇宙，以及阿波罗特别授权的德尔斐神谕。",
  openGraph: {
    title: "神人 cm｜ENTP 的德尔斐神谕",
    description: "ENTP · 7w8 · 784 · sp/so｜THE ORACLE OF DELPHI",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "神人 cm 的德尔斐神谕" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "神人 cm｜ENTP 的德尔斐神谕",
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
