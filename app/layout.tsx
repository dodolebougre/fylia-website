import { Header } from "@/src/features/header/header";
import { cn } from "@/src/lib/utils";
import { SiteConfig } from "@/src/site-config";
import type { Metadata } from "next";
import { Philosopher, Roboto } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../src/features/footer/footer";
import "./globals.css";

const roboto = Roboto({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const athena = localFont({
  src: "../public/font/Athena-Regular.woff2",
  variable: "--font-athena",
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
});

export const metadata: Metadata = {
  title: "Fylia",
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(roboto.variable, philosopher.variable, athena.variable)}
      >
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
