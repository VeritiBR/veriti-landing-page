"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "../../public/logo.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "Quem Somos" },
    { href: "#services", label: "Serviços" },
    { href: "#plans", label: "Planos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={Logo}
                  alt="VERITI - Contabilidade e Gestão Tributária"
                  width={170}
                  height={70}
                  className="h-auto w-auto"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center space-x-4 flex-shrink-0">
              <Button asChild className="hidden lg:inline-flex bg-teal-600 hover:bg-teal-700 font-medium">
                <Link href="#contact">Entre em Contato</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Menu</h2>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-lg"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-teal-600 hover:bg-teal-700 font-medium mt-6">
                  <Link href="#contact" onClick={toggleMenu}>Entre em Contato</Link>
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}