import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js",
    duration: "3 months",
    image: "/web.webp",
    // price: "$999",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    slug: "web-development"
  },
  {
    title: "Mobile App Development",
    description: "Learn to build native mobile applications for iOS and Android",
    duration: "4 months",
    image: "/mobile.webp",
    // price: "$1299",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
    slug: "mobile-development"
  },
  {
    title: "Data Science & Analytics",
    description: "Master data analysis, visualization, and machine learning",
    duration: "3 months",
    image: "/data_a.jpg",
    price: "$1199",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Tableau"],
    slug: "data-science"
  },

]

export default function Courses() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Our Training Courses</h1>
        <p className="text-xl text-muted-foreground">Comprehensive training programs to boost your tech career</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={600}
              height={400}
              className="w-full object-cover h-[200px]"
            />
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{course.title}</CardTitle>
              <CardDescription>Duration: {course.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{course.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">{""}</span> 
              <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground">
                <Link href={`/courses/`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

