import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
// RadixUI
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
// Clerk
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myLibrary | Your house of books",
  description:
    "The Ultimate reading list app. Simplifying the way you track your reading, the right way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <Theme>
            <Header />
            <main className="lg:pl-60 m-4">{children}</main>
          </Theme>
        </body>
        <Analytics />
      </html>
    </ClerkProvider>
  );
}
