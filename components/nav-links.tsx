"use client"

import type React from "react"
import Link from "next/link"

export function NavLinks() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link
        href="#services"
        className="text-sm font-medium text-[#0d2b5c] hover:text-[#0d2b5c]/70 transition-colors tracking-wide"
        onClick={(e) => handleScroll(e, "#services")}
      >
        Services
      </Link>
      <Link 
        href="/projects" 
        className="text-sm font-medium text-[#0d2b5c] hover:text-[#0d2b5c]/70 transition-colors tracking-wide"
      >
        Projects
      </Link>
      <Link
        href="#about"
        className="text-sm font-medium text-[#0d2b5c] hover:text-[#0d2b5c]/70 transition-colors tracking-wide"
        onClick={(e) => handleScroll(e, "#about")}
      >
        About
      </Link>
      <Link
        href="#contact"
        className="text-sm font-medium text-[#0d2b5c] hover:text-[#0d2b5c]/70 transition-colors tracking-wide"
        onClick={(e) => handleScroll(e, "#contact")}
      >
        Contact
      </Link>
    </nav>
  )
}
