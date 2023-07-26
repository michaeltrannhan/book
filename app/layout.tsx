import { fontSans } from "@/fonts";
import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import SiteHeader from "@/components/siteHeader";
import SiteFooter from "@/components/siteFooter";
import { ThemeProvider } from "@/components/themeProvider";
import RQProvider from "@/utils/provider";

export const metadata: Metadata = {
  title: "Book app",
  description: "Where you can find your favorite books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <RQProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </RQProvider>
      </body>
    </html>
  );
}
