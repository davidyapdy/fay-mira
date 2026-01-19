"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-medium tracking-tight hover:text-accent transition-colors"
        >
          Your Name
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="#work"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <a
            href="/resume.pdf"
            className="text-sm px-4 py-2 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
