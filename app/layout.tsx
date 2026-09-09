import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SEER Health — Metabolic Digital Twin",
  description:
    "SEER Health's Metabolic Digital Twin (MDT+) turns real-world glucose, insulin and activity data into predictive insight, so people and the systems that support them can make better metabolic decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-paper text-ink font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
