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
      <body className={font.className}>
        <Header />
        <main className="sm:px-5 md:px-10 lg:px-10 max-w-screen-xl mx-auto px-10 w-full ">
          {children}
        </main>
      </body>
    </html>
  );
}
