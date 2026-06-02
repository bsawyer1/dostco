import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ContactButton } from "@/components/contact-button"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Oceanfront Home Renovation",
      category: "Exterior Remodeling",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nEMEwIODiCkDGECrph82QHne75A2gN.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481052914_122124725234679184_5649493032521924817_n.jpg-H5xpEGFgEwAkNW2figjhhpWQJlhLcv.jpeg",
      description: "Complete exterior transformation featuring new cedar shake siding and architectural windows.",
    },
    {
      id: 2,
      title: "New Lakefront Bunkhouse",
      category: "Interior Renovation",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bCdh1c6bk9ladlAM1edVzFGpkzI2ku.png",
      afterImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sWioEleDYn3tl2q3hg3AOcsxScmBFk.png",
      description:
        "Complete interior transformation featuring new vinyl plank flooring, modern recessed lighting, fresh paint, and custom trim work, turning a basic bunkhouse into a contemporary living space.",
    },
    {
      id: 3,
      title: "Custom Sunroom Addition",
      category: "Interior Remodeling",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CwZrbsDGS7Q4kurgcc1H035LFkMwZA.png",
      afterImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nIG2lk3Usazw9fcpuKxHPVAlcWeaVB.png",
      description:
        "Transforming a 3 season sun room to 4 seasons with all new framing, high energy efficient windows, and a sliding door.",
    },
    {
      id: 4,
      title: "Full Exterior Face Lift",
      category: "Outdoor Living",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bynCWA2Ypkbe6KuOHnoW6DfOTR8K0r.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20from%20iOS.jpg-wvdTt1tv0WBxdIIQteajbjMgFJX9Yq.jpeg",
      description: "Complete exterior transformation with updated windows, roof, and new siding.",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-[#0d2b5c] hover:text-[#0d2b5c]/70 transition-colors tracking-wide"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#0d2b5c] mb-4">
            Our Projects
          </h1>
          <p className="text-base text-slate-600 max-w-[600px] mx-auto leading-relaxed tracking-wide">
            Explore our portfolio of before and after transformations, showcasing our commitment to quality
            craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid gap-16">
          {projects.map((project) => (
            <div key={project.id} className="space-y-6">
              <div className="space-y-3">
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#0d2b5c] md:text-2xl tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed tracking-wide max-w-2xl">{project.description}</p>
                <span className="inline-block border border-slate-200 bg-white px-3 py-1 text-xs text-[#0d2b5c] font-medium tracking-wide">
                  {project.category}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.beforeImage || "/placeholder.svg"}
                    alt={`Before - ${project.title}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs text-[#0d2b5c] font-medium tracking-wide">
                    Before
                  </div>
                </div>
                <div className="group relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.afterImage || "/placeholder.svg"}
                    alt={`After - ${project.title}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs text-[#0d2b5c] font-medium tracking-wide">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ContactButton />
        </div>
      </main>
    </div>
  )
}
