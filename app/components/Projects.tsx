import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Hackathon Website",
    description: "An event management website that enables participants and organizers to seamlessly plan, coordinate, and manage hackathons with ease.",
    image: "/hackathon-website.png",
    link: "https://rthack.raisoni.net",
  },
  {
    title: "Placement Hub",
    description: "A comprehensive portal designed for college students, administrators and companies to simplify and streamline the recruitment process efficiently.",
    image: "/placement-hub.jpg",
    link: "https://github.com/Abdul0925",
  },
  {
    title: "Online Buzzer System",
    description: "Online Buzzer is a system built for quiz competitions organized by Encarta IT Cell.",
    image: "/buzzer.png",
    link: "https://github.com/Abdul0925/Encarta-Buzzer",
  },
  // {
  //   title: "Task Tracker CLI",
  //   description: "Task tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on.",
  //   image: "/task-cli.png",
  //   link: "https://github.com/Abdul0925",
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                layout="responsive"
                className="object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Button variant="outline"><a href={project.link} target="_blank">View Project</a></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

