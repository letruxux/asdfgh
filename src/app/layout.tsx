import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { PackagesProvider } from "@/components/packages-provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "asdfgh ☆",
  description: "easy program dl",
  openGraph: {
    title: "asdfgh ☆",
    description: "easy program dl",
    url: "https://asdfgh.vercel.app",
    siteName: "asdfgh ☆",
    images: [
      {
        url: "https://asdfgh.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const font = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>💫</text></svg>"
        />
      </head>
      <body className={`${font.className} antialiased p-4`}>
        <Toaster position="bottom-center" />
        <PackagesProvider>
          <section className="max-w-6xl w-full block mx-auto">{children}</section>
        </PackagesProvider>
      </body>
    </html>
  );
}
