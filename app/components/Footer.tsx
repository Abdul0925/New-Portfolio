import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">&copy; 2025 Abdul Rahim. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

