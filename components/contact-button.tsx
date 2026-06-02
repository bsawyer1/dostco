"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactButton() {
  const handleClick = () => {
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <Link href="/#contact">
      <Button 
        variant="outline"
        size="lg"
        className="border-[#0d2b5c] text-[#0d2b5c] hover:bg-[#0d2b5c] hover:text-white px-10 py-6 text-base font-medium tracking-wide transition-all duration-300" 
        onClick={handleClick}
      >
        Contact Us For Your Project
      </Button>
    </Link>
  )
}
