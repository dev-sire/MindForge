import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindForge: Your Thought Refinery",
  description: "MindForge is the ultimate knowledge management and productivity tool. Take your ideas from rough concepts to polished masterpieces with our intuitive interface and powerful features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="mindforge-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
