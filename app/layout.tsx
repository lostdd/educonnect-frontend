import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const Roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "EduConnect",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Roboto.variable} ${Poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
