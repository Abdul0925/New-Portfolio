import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led a team of developers in creating responsive web applications using React and Node.js.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2018 - 2020",
    description: "Developed and maintained client websites using HTML, CSS, and JavaScript frameworks.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Innovations",
    period: "2016 - 2018",
    description: "Assisted in the development of web applications and gained experience in full-stack development.",
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

