import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroVideo from "@assets/generated_videos/drone_ascending_over_coal_mine_site.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-black flex flex-col justify-center hero-section pb-24">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-40 scale-110 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 sm:pt-28">
        <div className="max-w-2xl">
          {/* Simple Main Heading */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            <span className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Siyaphusha Consortium</span>
          </h1>
          
          {/* Simple Description */}
          <p className="text-base sm:text-lg text-white/80 mb-12 font-normal leading-relaxed" style={{textShadow: '0 1px 4px rgba(0,0,0,0.4)'}}>
            Mining and logistics solutions you can trust.
          </p>

          {/* Two Simple Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-block">
              <Button className="bg-white text-black hover:bg-white/90 font-semibold h-11 px-8 rounded-lg text-sm transition-colors duration-300">
                Our Services
              </Button>
            </a>
            <a href="/assets/company-profile.pdf" download="SIYAPHUSHA-Company-Profile.pdf">
              <Button className="border border-white text-white hover:bg-white/10 font-semibold h-11 px-8 rounded-lg text-sm transition-colors duration-300 bg-transparent">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
