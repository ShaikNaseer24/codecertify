import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

const projects = [
  {
    title: "Custom Web Applications",
    description: "Get your custom web application built by our expert developers",
    image: "/cwb.webp",
    services: [
      "Full-stack Development",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
      "Database Design"
    ],
    // startingPrice: "$2999"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for your business",
    image: "/amd.webp",
    services: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "App Maintenance",
      "API Development"
    ],
    // startingPrice: "$3999"
  },
  {
    title: "UI/UX Design Projects",
    description: "Professional design services for digital products",
    image: "/ui.webp",
    services: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing",
      "Prototyping",
      "Design Systems"
    ],
    // startingPrice: "$1999"
  },
  {
    title: "Custom Enterprise Solutions",
    description: "Tailored solutions for enterprise-level businesses",
    image: "/cm.webp",
    services: [
      "Enterprise Software",
      "Cloud Solutions",
      "System Integration",
      "Legacy System Updates",
      "Technical Consulting"
    ],
    // startingPrice: "$5999"
  }
]

export default function Freelance() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Freelance Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get your project done by our expert team of developers and designers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <CardHeader>
              <CardTitle className="text-2xl text-[#000080] dark:text-[#FFA500]">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Services Included:</h4>
                <ul className="space-y-2">
                  {project.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#FFA500]"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Starting from</p>
                <p className="text-2xl font-bold text-[#000080] dark:text-[#FFA500]">
                  {""}
                </p>
              </div>
              <Button className="bg-[#FFA500] hover:bg-[#000080]">
              <Link href={`/freelance/`}>Get Quote</Link>
              
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Let's discuss your project requirements and create a tailored solution for your business
        </p>
        <Button asChild className="bg-[#FFA500] hover:bg-[#000080] text-lg py-6 px-8">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

