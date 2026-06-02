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
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link
            href="#services"
            className="w-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("#services")
            }}
          >
            Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/projects" className="w-full cursor-pointer">
            Projects
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="#about"
            className="w-full cursor-pointer"
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
            className="w-full cursor-pointer"
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
