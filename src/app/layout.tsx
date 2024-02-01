import "@/styles/globals.css";
import ThemeProvider from "@/components/theme-provider";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Analytics from "@/components/analytics";
import { cn } from "@/lib/utils";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Next.js Dashboard",
  description: "Next.js Dashboard Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(ubuntu.className, "h-full")}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
