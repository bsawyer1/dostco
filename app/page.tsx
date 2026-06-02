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
        <section id="services" className="w-full py-16 md:py-20 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#0d2b5c]">
                Our Services
              </h2>
              <p className="max-w-[600px] text-slate-600 md:text-base leading-relaxed tracking-wide">
                We provide comprehensive construction services to meet all your needs
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group flex flex-col items-start space-y-3 p-6 border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300">
                <Home className="h-6 w-6 text-slate-400 group-hover:text-[#0d2b5c] transition-colors duration-300" />
                <h3 className="text-lg font-semibold text-[#0d2b5c] tracking-tight">Interior & Exterior Remodeling</h3>
                <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
                  Transform your space with our professional remodeling services for both interior and exterior
                  projects.
                </p>
              </div>
              <div className="group flex flex-col items-start space-y-3 p-6 border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300">
                <Building2 className="h-6 w-6 text-slate-400 group-hover:text-[#0d2b5c] transition-colors duration-300" />
                <h3 className="text-lg font-semibold text-[#0d2b5c] tracking-tight">New Construction</h3>
                <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
                  Build your dream home or business from the ground up with our expert new construction services.
                </p>
              </div>
              <div className="group flex flex-col items-start space-y-3 p-6 border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300">
                <Paintbrush className="h-6 w-6 text-slate-400 group-hover:text-[#0d2b5c] transition-colors duration-300" />
                <h3 className="text-lg font-semibold text-[#0d2b5c] tracking-tight">Finish Work</h3>
                <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
                  Add the perfect finishing touches to your project with our detailed and precise finish work services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#0d2b5c]">
                Our Projects
              </h2>
              <p className="max-w-[600px] text-slate-600 md:text-base leading-relaxed tracking-wide">
                Take a look at some of our recent construction and remodeling projects
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden">
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
                        ? "Cedar-sided ranch home renovation with new windows and deck"
                        : i === 2
                          ? "A-frame style home with large windows and wraparound deck"
                          : i === 3
                            ? "Interior sunroom with vaulted ceiling and panoramic windows"
                            : "Custom deck with black railings and natural wood treads"
                    }
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/projects">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-[#0d2b5c] text-[#0d2b5c] hover:bg-[#0d2b5c] hover:text-white px-8 py-5 text-sm font-medium tracking-wide transition-all duration-300"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-20 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#0d2b5c]">
                  About Dostco Construction
                </h2>
                <p className="text-slate-600 md:text-base leading-relaxed tracking-wide">
                  Dostco Construction LLC is a leading Maine construction firm specializing in residential remodeling
                  and new construction. We deliver exceptional craftsmanship across interior and exterior renovations,
                  with meticulous attention to detail in every project. Our commitment to excellence, transparent
                  communication, and client satisfaction has established us as a trusted partner in transforming homes
                  throughout Maine. Contact us to bring your vision to life.
                </p>
              </div>
              <div className="relative group overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9wZvd5YcHltzMJ6UiVdILDj2Q7LpZS.png"
                  alt="Interior renovation project in progress by Dostco Construction"
                  width={600}
                  height={450}
                  className="w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#0d2b5c]">
                Contact Us
              </h2>
              <p className="max-w-[600px] text-slate-600 md:text-base leading-relaxed tracking-wide">
                Ready to start your project? Get in touch with us today for a free consultation.
              </p>
            </div>
            <div className="mx-auto max-w-2xl">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center space-y-2 p-6 border border-slate-200 bg-zinc-50">
                  <Phone className="h-5 w-5 text-[#0d2b5c]" />
                  <span className="text-base font-medium text-[#0d2b5c] tracking-wide">207-740-3233</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-6 border border-slate-200 bg-zinc-50">
                  <Mail className="h-5 w-5 text-[#0d2b5c]" />
                  <span className="text-base font-medium text-[#0d2b5c] tracking-wide">Dostcoconstruction@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Dark Footer */}
      <footer className="w-full bg-[#0d2b5c] text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 items-start">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ATMbAUTJLWuhlKkJV89o8oNvP0aFqE.png"
                alt="Dostco Construction Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-lg font-semibold tracking-tight">Dostco Construction</span>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-wide text-white/90">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Phone className="h-4 w-4" />
                  <span className="tracking-wide">207-740-3233</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Mail className="h-4 w-4" />
                  <span className="tracking-wide">Dostcoconstruction@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-wide text-white/90">Follow Us</h4>
              <Link
                href="https://www.facebook.com/profile.php?id=61570375541854"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="tracking-wide">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-sm text-white/50 tracking-wide">
              © {new Date().getFullYear()} Dostco Construction. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
