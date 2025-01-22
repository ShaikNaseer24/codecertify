import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    image: "/WEB.jpg",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
      "Progressive Web Apps"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    image: "/mb.jpg",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "App Store Deployment",
      "App Maintenance"
    ]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions for digital products",
    image: "/ui.jpg",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing"
    ]
  },
  // {
  //   title: "Cloud Solutions",
  //   description: "Cloud infrastructure and deployment services",
  //   image: "https://picsum.photos/200/300?random=13",
  //   features: [
  //     "Cloud Migration",
  //     "DevOps Services",
  //     "Serverless Architecture",
  //     "Cloud Security",
  //     "Performance Optimization"
  //   ]
  // }
]

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">Professional development services for your business needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={300}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <CardHeader>
              <CardTitle className="text-2xl text-[#000080]">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#FFA500]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#FFA500] hover:bg-[#000080]"><Link href={'/services/'}>Learn More</Link></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

