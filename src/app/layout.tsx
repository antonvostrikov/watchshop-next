import type { Metadata } from "next";
import "./globals.scss";
import { open_sans, raleway, roboto, roboto_cond } from "./fonts";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${open_sans.variable} ${raleway.variable} ${roboto.variable} ${roboto_cond.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
