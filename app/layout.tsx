/* eslint-disable @next/next/next-script-for-ga */
import { Header } from "@/src/features/header/header";
import { cn } from "@/src/lib/utils";
import { SiteConfig } from "@/src/site-config";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Philosopher, Roboto } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../src/features/footer/footer";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QZED8XL0SS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QZED8XL0SS');
            `,
          }}
        />
      </Head>
      <body
        className={cn(roboto.variable, philosopher.variable, athena.variable)}
      >
        <Header />
        <div>{children}</div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
