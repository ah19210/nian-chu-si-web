import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "年初四 - 馬年飛躍 ❤️",
  description: "感謝一起吃大家樂，雖平凡但開心",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Sans+HK:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
