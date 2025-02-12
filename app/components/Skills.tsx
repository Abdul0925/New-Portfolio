import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Database, Globe , NotebookText  } from "lucide-react"

const skills = [
  { name: "Frontend Development", icon: Code, description: "HTML, CSS, JavaScript, React" },
  { name: "Backend Development", icon: Database, description: "Node.js, PHP, SQL, MongoDB" },
  { name: "Web Technologies", icon: Globe, description: "RESTful APIs, WebSockets" },
  { name: "Concepts", icon: NotebookText , description: "DSA, DBMS, Operating System" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <skill.icon className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

