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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-[#0d2c5a] hover:text-[#1e88e5] transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#0d2c5a] mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Explore our portfolio of before and after transformations, showcasing our commitment to quality
            craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project) => (
            <div key={project.id} className="grid gap-8 md:gap-12 items-start">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0d2c5a]">{project.title}</h2>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="inline-block rounded-lg bg-[#1e88e5] px-3 py-1 text-sm text-white">
                  {project.category}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src={project.beforeImage || "/placeholder.svg"}
                    alt={`Before - ${project.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-sm text-white">
                    Before
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src={project.afterImage || "/placeholder.svg"}
                    alt={`After - ${project.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-sm text-white">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ContactButton />
        </div>
      </main>
    </div>
  )
}
