import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-gray-950 dark:text-white`}>
        <Web3ModalProvider initialState={initialState}>
          <Navbar />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
