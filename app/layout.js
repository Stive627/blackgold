import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import { DataProvider } from "../context/DataContext";
import { LangageProvider } from "../context/LangContext";
import { SplashProvider } from "../context/SplashContext";
import { CartProvider } from "../context/CartContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "blackgold",
  description: "e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="logo.png" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <LangageProvider>
        <DataProvider>
          <SplashProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </SplashProvider>
        </DataProvider>
      </LangageProvider>
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4CDDBH7TG5"></Script>
      <Script id="google analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4CDDBH7TG5');`}
      </Script>
    </html>
  );
}
