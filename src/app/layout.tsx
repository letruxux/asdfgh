import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { PackagesProvider } from "@/components/packages-provider";

export const metadata: Metadata = {
  title: "wowowowowo ☆",
  description: "easy program dl",
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
      <head />
      <body className={`${font.className} antialiased p-4`}>
        <PackagesProvider>
          <section className="max-w-6xl w-full block mx-auto">{children}</section>
        </PackagesProvider>
      </body>
    </html>
  );
}
