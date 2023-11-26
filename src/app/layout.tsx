import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CyberStories - Estudos de caso em cibersegurança",
  description: "Estudos de caso em cibersegurança",
  icons: [{ rel: "icon", url: "/favicon.ico" },
  { rel: "apple-touch-icon", sizes:"180x180", url: "/apple-touch-icon.png" },
  { rel: "icon", type:"image/png", sizes:"32x32", url: "/favicon-32x32.png" },
  { rel: "icon", type:"image/png", sizes:"16x16", url: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes:"180x180", url: "/apple-touch-icon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}