import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "Недвижимость в Барселоне",
  description: "Агенство недвижимости в Барселоне",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${font.className} w-full max-w-[1440px] px-2 m-auto md:px-4 lg:px-6`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
