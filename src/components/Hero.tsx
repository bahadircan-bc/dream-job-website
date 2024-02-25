import VideoThumb from "@/public/images/hero-image-01.jpg";
import { SparklesCore } from "./Sparkles";

export default function Hero() {
  return (
    <section>
      <div className="w-[72rem] mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="w-[48rem] mx-auto text-center relative">
            <h1 className="text-8xl mb-4 font-poiret-one text-red-500" data-aos="fade-up">
              dream
            </h1>
            <div className="w-[48rem] h-40 relative">

              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
