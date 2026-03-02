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
  title: "Fibras Cortadas y Monofilamentos SAC",
  description: "Especialistas en refuerzo estructural con fibras sintéticas para concreto.",
  icons: {
    // La ruta debe incluir /images/ y la extensión correcta .jpg
    icon: "/images/logo_azul.jpg", 
    shortcut: "/images/logo_azul.jpg",
    apple: "/images/logo_azul.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true} 
      >
        {children}
      </body>
    </html>
  );
}