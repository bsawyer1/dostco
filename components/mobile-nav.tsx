"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-[#0d2b5c]">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white/95 backdrop-blur-md border-slate-200">
        <DropdownMenuItem asChild>
          <Link
            href="#services"
            className="w-full cursor-pointer text-[#0d2b5c]"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("#services")
            }}
          >
            Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/projects" className="w-full cursor-pointer text-[#0d2b5c]">
            Projects
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="#about"
            className="w-full cursor-pointer text-[#0d2b5c]"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("#about")
            }}
          >
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="#contact"
            className="w-full cursor-pointer text-[#0d2b5c]"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("#contact")
            }}
          >
            Contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
