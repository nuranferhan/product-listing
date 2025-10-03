import type { Metadata } from "next";
import { avenir, montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Listing - Engagement Rings",
  description: "Browse our collection of beautiful engagement rings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}