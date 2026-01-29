"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Technology", href: "#technology" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to get the correct href based on current page
  const getHref = (anchor: string) => {
    if (isHomePage) {
      return anchor;
    }
    return `/${anchor}`;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-nirvana-dark/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-nirvana-jade to-nirvana-cyan flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-lg font-semibold text-white hidden sm:block">
                Nirvana
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={getHref(link.href)}
                  className="text-sm text-white/70 hover:text-nirvana-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href={getHref("#pricing")}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-nirvana-jade to-nirvana-jade-dark text-white text-sm font-medium hover:shadow-lg hover:shadow-nirvana-jade/20 transition-shadow"
              >
                Get Nirvana
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-nirvana-dark/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="relative pt-24 px-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={getHref(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl text-white/80 hover:text-nirvana-cyan py-2 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href={getHref("#pricing")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-nirvana-jade to-nirvana-jade-dark text-white font-medium text-center"
                >
                  Get Nirvana — $99
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
