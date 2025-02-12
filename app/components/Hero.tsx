import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Abdul Rahim</h1>
          <p className="text-xl mb-6">A passionate web developer creating amazing digital experiences</p>
          <Button size="lg" variant="secondary">
            <a href="https://drive.google.com/file/d/1G_KSrn5DXCX-kGFO5WSl0QuXyjF05Nog/view?usp=drive_link" target="_blank">
              Download CV
            </a>
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image src="/abdul.jpg" alt="Abdul_Rahim" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

