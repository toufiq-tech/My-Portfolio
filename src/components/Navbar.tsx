"use client";

import Link from "next/link";
import { Menu, X, } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Education & Learning", href: "/education" },
    { name: "Contact", href: "/contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mt-4 flex items-center justify-between overflow-hidden bg-[#111827]/95 backdrop-blur-lg">
          <div className="flex items-center">
            <div className="flex h-20 w-20 items-center justify-center bg-[#5FE3A1]">
              <div className="space-y-1">
                <div className="h-1 w-8 -rotate-12 bg-black"></div>
                <div className="h-1 w-8 -rotate-12 bg-black"></div>
                <div className="h-1 w-8 -rotate-12 bg-black"></div>
              </div>
            </div>

            <Link
              href="/"
              className="px-5 text-3xl font-extrabold tracking-wide text-white transition-all duration-300 hover:text-[#5FE3A1]"
            >
              ToufiQ
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            <Link
              href="/"
              className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:text-[#5FE3A1]"
            >
              Home
              
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:text-[#5FE3A1]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-20 w-20 items-center justify-center bg-[#5FE3A1] text-black lg:hidden"
          >
            {open ? <X size={34} /> : <Menu size={34} />}
          </button>

          <button className="hidden lg:flex h-20 w-20 items-center justify-center bg-[#5FE3A1] text-black">
            <Menu size={34} />
          </button>
        </div>

        {open && (
          <div className="bg-[#111827] lg:hidden">
            <div className="flex flex-col p-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-white transition-all duration-300 hover:text-[#5FE3A1]"
              >
                Home
              </Link>

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-white transition-all duration-300 hover:text-[#5FE3A1]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}