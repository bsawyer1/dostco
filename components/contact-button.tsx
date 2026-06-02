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
      <Button className="bg-[#0d2c5a] hover:bg-[#1e88e5] text-lg px-8 py-6" onClick={handleClick}>
        Contact Us For Your Project
      </Button>
    </Link>
  )
}
