"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function GenAIClubHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleJoinWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=Hi%20GenAI%20College%20Club%20%F0%9F%9A%80",
      "_blank"
    );
    setIsOpen(false);
  };

  const navigationItems = ["About", "Events", "Teams" ,  "Projects", "Contact"];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-black/70 border-b border-yellow-400/20 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-4",
          "md:px-6 lg:px-8 sm:px-3"
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="GenAI College Club home">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
            <span className="text-black font-bold text-sm">AI</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-yellow-400">
            GenAI College Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navigationItems.map((item, idx) => (
            <Link
              key={`desktop-${item}-${idx}`}
              href={`/${item.toLowerCase()}`}
              className="text-white opacity-80 hover:opacity-100 hover:text-yellow-400 transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pr-2 sm:pr-1">
          {/* Desktop WhatsApp Button */}
          <div className="hidden md:block">
            <Button
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold shadow-[0_12px_40px_rgba(250,204,21,.25)] hover:shadow-[0_12px_40px_rgba(250,204,21,.35)] transition-all duration-200"
              onClick={handleJoinWhatsApp}
              aria-label="Join the club on WhatsApp"
            >
              Join on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden p-2 text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[360px] bg-black/95 backdrop-blur-md border-l border-yellow-400/20 text-white p-6"
            >
              <SheetTitle className="text-xl font-semibold text-yellow-400">
                GenAI College Club
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-300 mb-6">
                Explore our AI community
              </SheetDescription>

              <div className="flex flex-col h-full">
                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-4" role="navigation">
                  {navigationItems.map((item, idx) => (
                    <Link
                      key={`mobile-${item}-${idx}`}
                      href={`/${item.toLowerCase()}`}
                      className="text-lg font-medium text-white hover:text-yellow-400 transition-colors py-2 px-3 rounded-md hover:bg-yellow-400/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </nav>

                {/* Mobile WhatsApp Button */}
                <div className="mt-auto p-4 border-t border-yellow-400/20">
                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md hover:shadow-lg transition-all duration-200 py-3"
                    onClick={handleJoinWhatsApp}
                    aria-label="Join the club on WhatsApp"
                  >
                    Join on WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
