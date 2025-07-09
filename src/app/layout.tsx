import type { Metadata } from "next";
import "./globals.css";
import { playFair, roboto } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    default: "Redeemed International Calvary Mission",
    template: "%s | Redeemed International Calvary Mission"
  },
  description: "Raising and Nuturing God's people for heaven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${playFair.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
