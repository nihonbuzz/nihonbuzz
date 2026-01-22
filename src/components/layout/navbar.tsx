"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Tentang Kami", href: "#about" },
  { name: "Program Belajar", href: "#programs" },
  { name: "Jadwal & Biaya", href: "#schedule" },
  { name: "Artikel", href: "https://nihonbuzz.org/berita" }, // Link to legacy news/blog
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div
        className={`
          flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-4xl"
              : "bg-transparent border-transparent w-full max-w-6xl"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2 group">
          <Image
            src="/assets/logo-white.png"
            alt="NihonBuzz"
            width={140}
            height={40}
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="hidden md:flex text-foreground/80 hover:text-primary hover:bg-white/5"
            size="sm"
          >
            Login Siswa
          </Button>
          
          <Button 
            className="hidden md:flex rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(255,69,0,0.5)]"
            size="sm"
          >
            Daftar Kelas
          </Button>

          {/* Mobile Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-auto rounded-b-[2rem] border-white/10 bg-black/95 backdrop-blur-xl pt-20 pb-10">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
                  <Button variant="outline" className="w-full rounded-full border-white/10 text-foreground hover:bg-white/5">
                    Login Siswa
                  </Button>
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                    Daftar Kelas
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
