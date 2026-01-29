import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nirvana Ring | Awaken Your Dreams, Elevate Your Life",
  description:
    "Smart ring for lucid dreaming, mindfulness, and longevity. Ancient wisdom meets AI technology.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-nirvana-dark text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
