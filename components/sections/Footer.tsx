"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, Instagram, Github } from "lucide-react";

const links = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Technology", href: "#technology" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Research", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "mailto:support@seeknirvana.com" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:info@seeknirvana.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-nirvana-darker to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nirvana-jade to-nirvana-cyan flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-semibold text-white">Nirvana</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Ancient wisdom meets modern technology. Nirvana Ring guides you
              toward lucid dreams, mindful living, and a longer, more conscious
              life.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-nirvana-cyan hover:border-nirvana-cyan/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-nirvana-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-nirvana-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-nirvana-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © 2026 Seek Nirvana. All rights reserved.
            </p>
            <p className="text-white/30 text-sm flex items-center gap-2">
              <span className="text-nirvana-gold">ॐ</span>
              <span>Made with mindfulness</span>
            </p>
          </div>
        </div>

        {/* Sanskrit Quote */}
        <div className="mt-8 text-center">
          <p className="text-nirvana-gold/30 text-xs tracking-widest">
            तत् त्वम् असि — Thou Art That
          </p>
        </div>
      </div>
    </footer>
  );
}
