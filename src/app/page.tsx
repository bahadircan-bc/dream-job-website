import { BentoGridThirdDemo } from "@/components/Display"
import Hero from "@/components/Hero"
import { HeroParallaxDemo } from "@/components/Parallax"
import { SparklesCore } from "@/components/Sparkles"
import Testimonials from "@/components/Testimonial"
export default function Home() {
  return (
    <>
      <Hero />
      <HeroParallaxDemo/>
      {/* <BentoGridThirdDemo/> */}
      <Testimonials/>
    </>
  )
}
