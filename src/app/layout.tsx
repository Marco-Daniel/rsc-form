import type { Metadata } from 'next';
import {  Roboto } from 'next/font/google';

const roboto = Roboto({ weight: "400", subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RSC Form',
  description: 'Handling forms in react server components',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
