import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const courseDetails = {
  'web-development': {
    title: "Web Development Bootcamp",
    description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js",
    duration: "3 months",
    image: "/placeholder.svg?height=400&width=600&text=Web+Development",
    price: "$999",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    curriculum: [
      {
        week: "Week 1-2",
        topics: ["HTML5 Fundamentals", "CSS3 Styling", "Responsive Design", "JavaScript Basics"]
      },
      {
        week: "Week 3-4",
        topics: ["Advanced JavaScript", "DOM Manipulation", "ES6+ Features", "API Integration"]
      },
      {
        week: "Week 5-8",
        topics: ["React Fundamentals", "State Management", "Hooks", "Redux", "Next.js"]
      },
      {
        week: "Week 9-12",
        topics: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Authentication"]
      }
    ],
    projects: [
      {
        name: "E-commerce Website",
        description: "Build a full-stack e-commerce platform with payment integration"
      },
      {
        name: "Social Media Dashboard",
        description: "Create a responsive dashboard with real-time updates"
      }
    ]
  },
  // Add more courses here
}

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = courseDetails[params.slug as keyof typeof courseDetails]

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl mb-6">{course.description}</p>
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Duration</h3>
              <p>{course.duration}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Price</h3>
              <p className="text-2xl text-[#FFA500]">{course.price}</p>
            </div>
          </div>
          <Link href="/apply">
            <Button className="w-full bg-[#FFA500] hover:bg-[#000080] text-white">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Course Curriculum</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {course.curriculum.map((module, index) => (
            <div key={index} className="border p-6 rounded-lg dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">{module.week}</h3>
              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FFA500]"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Projects You'll Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {course.projects.map((project, index) => (
            <div key={index} className="border p-6 rounded-lg dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

