import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const recursive = localFont({
  src: "./fonts/Recursive.ttf",
});

export const metadata: Metadata = {
  title: "pedrodevelops_",
  description: "Learn, build, share.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth focus:scroll-auto" lang="en">
      <body
        className={cn(
          recursive.className,
          "min-h-screen relative antialiased bg-accent text-foreground selection:bg-stone-600/80 selection:text-white"
        )}
      >
        <div className="fixed top-0 left-0 w-full h-full bg-noise z-[-1]"></div>
        <div className="w-[60rem] flex flex-col min-h-screen mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
