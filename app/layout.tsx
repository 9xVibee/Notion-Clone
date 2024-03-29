import { Toaster } from "sonner";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { EdgeStoreProvider } from "../lib/edgestore";
import { ThemeProvider } from "@/components/provider/theme-provider";
import ConvexClientProvider from "@/components/provider/convex-provider";
import ModalProvider from "@/components/provider/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion | Abhay Panchal",
  description: "The connected workspace where better, faster work happens",
  icons: {
    icon: [
      {
        media: "( prefers-color-scheme: light )",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "( prefers-color-scheme: dark )",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
              storageKey="jotion-theme"
            >
              <ModalProvider />
              <Toaster position="bottom-center" />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
