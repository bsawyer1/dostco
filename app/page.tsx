import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Home, Building2, Paintbrush } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { NavLinks } from "@/components/nav-links"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      {/* Glassmorphic Header */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ATMbAUTJLWuhlKkJV89o8oNvP0aFqE.png"
              alt="Dostco Construction Logo"
              width={44}
              height={44}
              className="h-9 w-9"
            />
            <span className="text-lg font-semibold text-[#0d2b5c] tracking-tight">Dostco Construction</span>
          </Link>
          <NavLinks />
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:block">
              <Button 
                variant="outline" 
                className="border-[#0d2b5c] text-[#0d2b5c] hover:bg-[#0d2b5c] hover:text-white transition-all duration-300 font-medium"
              >
                Get an Estimate
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-[75vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XpeVigtWKlMloauWoZsZkiLcle80ey.png"
              alt="Luxury home renovation project by Dostco Construction"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                Quality Construction & Remodeling Services
              </h1>
              <p className="mt-4 text-base text-white/90 tracking-wide leading-relaxed md:text-lg max-w-xl">
                Professional construction services for your home or business
              </p>
              <div className="mt-6">
                <Link href="#contact">
                  <Button 
                    size="lg"
                    className="bg-[#0d2b5c] hover:bg-[#0d2b5c]/90 text-white px-6 py-5 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg"
                  >
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-14 md:py-16 bg-[#0d2b5c]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl text-white">
                Our Services
              </h2>
              <p className="max-w-[500px] text-white/70 text-sm md:text-base leading-relaxed">
                Comprehensive construction services to meet all your needs
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="group flex flex-col items-center text-center space-y-2 p-5 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-sm">
                <Home className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-base font-semibold text-white tracking-tight">Remodeling</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Interior and exterior renovation services
                </p>
              </div>
              <div className="group flex flex-col items-center text-center space-y-2 p-5 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-sm">
                <Building2 className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-base font-semibold text-white tracking-tight">New Construction</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Build your dream home from the ground up
                </p>
              </div>
              <div className="group flex flex-col items-center text-center space-y-2 p-5 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-sm">
                <Paintbrush className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-base font-semibold text-white tracking-tight">Finish Work</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Detailed and precise finishing touches
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-14 md:py-16 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl text-[#0d2b5c]">
                Our Projects
              </h2>
              <p className="max-w-[500px] text-slate-600 text-sm md:text-base leading-relaxed">
                Recent construction and remodeling projects
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={
                      i === 1
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480856553_122124715688679184_6932363517102418529_n.jpg-Vj9voRPdsL0XlqdNEHzzFRtTBKwwWV.jpeg"
                        : i === 2
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480787627_122124727952679184_1891380757834985415_n.jpg-jG4tuyoOjPPbtOFZUVIs3lGmQ0WMRF.jpeg"
                          : i === 3
                            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480745551_122124728456679184_6282069251467861983_n.jpg-5xDbAztFJmSVB24DohPN3nMjmxkTv7.jpeg"
                            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481012344_122124728024679184_7027650897347738561_n.jpg-eJS3UYGZyHTObKi9kiiAOFO8lSNyVL.jpeg"
                    }
                    alt={
                      i === 1
                        ? "Cedar-sided ranch home renovation"
                        : i === 2
                          ? "A-frame home with wraparound deck"
                          : i === 3
                            ? "Interior sunroom with vaulted ceiling"
                            : "Custom deck with black railings"
                    }
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/projects">
                <Button 
                  variant="outline"
                  size="default"
                  className="border-[#0d2b5c] text-[#0d2b5c] hover:bg-[#0d2b5c] hover:text-white text-sm font-medium tracking-wide transition-all duration-300"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-14 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
              <div className="space-y-3 order-2 lg:order-1">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl text-[#0d2b5c]">
                  About Dostco Construction
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Dostco Construction LLC is a leading Maine construction firm specializing in residential remodeling
                  and new construction. We deliver exceptional craftsmanship with meticulous attention to detail. Our commitment to excellence and client satisfaction has established us as a trusted partner in transforming homes throughout Maine.
                </p>
              </div>
              <div className="relative group overflow-hidden rounded-sm order-1 lg:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9wZvd5YcHltzMJ6UiVdILDj2Q7LpZS.png"
                  alt="Interior renovation project by Dostco Construction"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Owner Section */}
        <section className="w-full py-14 md:py-16 bg-[#0d2b5c]/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-[#0d2b5c]/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7921.JPG-1SfetJKnAI5GPKIDnqu1AnjW5Y0CUH.jpeg"
                    alt="Caleb Dostie, Owner of Dostco Construction"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-xs font-medium text-[#0d2b5c]/60 tracking-widest uppercase">Meet the Owner</p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight sm:text-2xl text-[#0d2b5c]">
                    Caleb Dostie
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                    With a passion for quality craftsmanship and years of hands-on experience, Caleb founded Dostco Construction to bring exceptional building services to Maine homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-14 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl text-[#0d2b5c]">
                Contact Us
              </h2>
              <p className="max-w-[400px] text-slate-600 text-sm md:text-base leading-relaxed">
                Ready to start your project? Get in touch today.
              </p>
            </div>
            <div className="mx-auto max-w-md">
              <div className="grid gap-4 sm:grid-cols-2">
                <a href="tel:207-740-3233" className="flex flex-col items-center space-y-2 p-5 bg-[#0d2b5c] hover:bg-[#0d2b5c]/90 transition-colors rounded-sm">
                  <Phone className="h-5 w-5 text-white/80" />
                  <span className="text-sm font-medium text-white">207-740-3233</span>
                </a>
                <a href="mailto:Dostcoconstruction@gmail.com" className="flex flex-col items-center space-y-2 p-5 border border-[#0d2b5c] hover:bg-[#0d2b5c]/5 transition-colors rounded-sm">
                  <Mail className="h-5 w-5 text-[#0d2b5c]" />
                  <span className="text-sm font-medium text-[#0d2b5c]">Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0d2b5c] text-white py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ATMbAUTJLWuhlKkJV89o8oNvP0aFqE.png"
                alt="Dostco Construction Logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-base font-semibold tracking-tight">Dostco Construction</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="tel:207-740-3233" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">207-740-3233</span>
              </a>
              <a href="mailto:Dostcoconstruction@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <Link
                href="https://www.facebook.com/profile.php?id=61570375541854"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-center text-xs text-white/50">
              © {new Date().getFullYear()} Dostco Construction. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
