import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Viskrit Technologies",
    period: "Aug 2024 - Oct 2024",
    description: "Build a Online Buzzer System using React, Node.js. and Socket.IO",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-700 dark:text-gray-400">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

