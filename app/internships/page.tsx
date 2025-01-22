import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
const internships = [
  {
    title: "Software Development Internship",
    description: "Work on real-world projects using modern tech stack",
    duration: "6 months",
    image: "/sf.webp",
    // stipend: "$1000/month",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Git"]
  },
  {
    title: "UI/UX Design Internship",
    description: "Design user interfaces for web and mobile applications",
    duration: "4 months",
    image: "/uiuix1.jpg",
    // stipend: "$800/month",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"]
  },
  {
    title: "Mobile App Development Internship",
    description: "Build native and cross-platform mobile applications",
    duration: "6 months",
    image: "/mobile (2).webp",
    // stipend: "$1000/month",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
  },
  // {
  //   title: "Data Science Internship",
  //   description: "Work on data analysis and machine learning projects",
  //   duration: "4 months",
  //   image: "https://picsum.photos/200/300?random=9",
  //   // stipend: "$900/month",
  //   technologies: ["Python", "TensorFlow", "Pandas", "SQL", "Jupyter"]
  // }
]

export default function Internships() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Internship Programs</h1>
        <p className="text-xl text-gray-600">Gain real-world experience with our industry-leading internship programs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {internships.map((internship, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={internship.image || "/placeholder.svg"}
              alt={internship.title}
              width={300}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <CardHeader>
              <CardTitle className="text-2xl text-[#000080]">{internship.title}</CardTitle>
              <CardDescription>Duration: {internship.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{internship.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#FFA500] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold text-[#000080]">{}</span>
              <Button className="bg-[#FFA500] hover:bg-[#000080]"><Link href={`/contact/`}>Apply Now</Link></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

