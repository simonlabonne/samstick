import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samstick",
  description: "Testez vos connaissances sur le hockey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
