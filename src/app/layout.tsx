import { FloatingDock } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { IconHome, IconInfoCircle, IconMail, IconFileText, IconBrandGithub } from '@tabler/icons-react';
import { DarkModeToggle } from "@/components/DarkModeToggle";

const navbarItems = [
  { title: 'Home', icon: <IconHome />, href: '/' },
  { title: 'About', icon: <IconInfoCircle />, href: '/about' },
  { title: 'Projects', icon: <IconFileText />, href: '/projects' },
  { title: 'Contact', icon: <IconMail />, href: '/contact' },
  { title: 'Github', icon: <IconBrandGithub />, href: 'https://www.github.com/nowayte' },
];

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nowayte - Developer",
  description:
    "Daniel is a developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-full bg-gray-100 dark:bg-dark-background transition-colors duration-200"
        )}
      >
          <div className="lg:pl-2 lg:pt-2 bg-transparent flex-1 h-full overflow-auto">
            <div className="flex-1 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:lg:border-neutral-700 overflow-y-auto bg-transparent">
              <DarkModeToggle />

              <FloatingDock items={navbarItems} />

              <main className="text-black dark:text-white">
                {children}
              </main>

              <Footer />
            </div>
          </div>
      </body>
    </html>
  );
}