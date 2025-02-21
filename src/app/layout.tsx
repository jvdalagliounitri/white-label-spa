import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Motors - Sua oficina especializada!",
  description: "Oficina de carros em São Paulo",
  icons: {
    icon: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <a
          href={`https://api.whatsapp.com/send?phone=553498037759&text= ${"Olá, gostaria de fazer um orçamento!"}`}
          className="float bounce"
          target="_blank"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
      </body>
    </html>
  );
}
