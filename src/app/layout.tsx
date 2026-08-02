import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dance For Joy | Inspiring Confidence, One Step at a Time",
  description:
    "A warm, professional dance studio in Brielle, NJ offering age-appropriate classes in ballet, tap, jazz, hip hop, acro, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
