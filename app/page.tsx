import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { NavLinks } from "@/components/nav-links"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ATMbAUTJLWuhlKkJV89o8oNvP0aFqE.png"
              alt="Dostco Construction Logo"
              width={50}
              height={50}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-[#0d2c5a]">Dostco Construction</span>
          </Link>
          <NavLinks />
          <div className="flex items-center gap-4">
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[600px] w-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XpeVigtWKlMloauWoZsZkiLcle80ey.png"
              alt="Luxury home renovation project by Dostco Construction"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-start justify-center pt-24 md:pt-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="bg-[#0d2c5a]/80 p-8 rounded-lg">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Quality Construction & Remodeling Services
                  </h1>
                  <p className="mt-4 text-xl text-white">
                    Professional construction services for your home or business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0d2c5a]">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive construction services to meet all your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#1e88e5] p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0d2c5a] text-center">Interior & Exterior Remodeling</h3>
                <p className="text-center text-gray-500">
                  Transform your space with our professional remodeling services for both interior and exterior
                  projects.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#1e88e5] p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0d2c5a] text-center">New Construction</h3>
                <p className="text-center text-gray-500">
                  Build your dream home or business from the ground up with our expert new construction services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#1e88e5] p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 8V2" />
                    <path d="M15 8V2" />
                    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0d2c5a] text-center">Finish Work</h3>
                <p className="text-center text-gray-500">
                  Add the perfect finishing touches to your project with our detailed and precise finish work services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0d2c5a]">Our Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent construction and remodeling projects
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
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
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link href="/projects">
                <Button className="bg-[#0d2c5a] hover:bg-[#1e88e5] text-lg px-8 py-6">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0d2c5a]">
                  About Dostco Construction
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Dostco Construction LLC is a leading Maine construction firm specializing in residential remodeling
                  and new construction. We deliver exceptional craftsmanship across interior and exterior renovations,
                  with meticulous attention to detail in every project. Our commitment to excellence, transparent
                  communication, and client satisfaction has established us as a trusted partner in transforming homes
                  throughout Maine. Contact us to bring your vision to life.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9wZvd5YcHltzMJ6UiVdILDj2Q7LpZS.png"
                  alt="Interior renovation project in progress by Dostco Construction"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#0d2c5a] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your project? Get in touch with us today for a free consultation.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl mt-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-[#1e88e5]" />
                  <span className="text-xl">207-740-3233</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-[#1e88e5]" />
                  <span className="text-xl">Dostcoconstruction@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ATMbAUTJLWuhlKkJV89o8oNvP0aFqE.png"
              alt="Dostco Construction Logo"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-[#0d2c5a]">Dostco Construction</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} Dostco Construction. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61570375541854"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1e88e5]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
