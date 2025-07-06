import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Roboto } from "next/font/google"


export const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playFair',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
})


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
