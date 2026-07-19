import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EV Hindustan Corp | Corporate EV Charging Infrastructure Consulting",
  description: "Government-authorized EV charging infrastructure consulting, registration, documentation, site inspection, and investment model support for property and land owners.",
  keywords: ["EV Charging Station Apply", "EV Franchise India", "EV Hindustan Corp", "EV Charging Infrastructure", "Commercial EV charging", "Highway EV charging station application"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-base text-text-main">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
