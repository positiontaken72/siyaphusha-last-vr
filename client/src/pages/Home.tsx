import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { RouteMap } from "@/components/RouteMap";
import { ESGSection } from "@/components/ESGSection";
import { CommunityImpact } from "@/components/CommunityImpact";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Logos
import transnetLogo from "@assets/kisspng-transnet-national-ports-authority-rail-transport-p-transnet-national-ports-authority-5b2fe7fb6a5106.2869857915298662354355_1763669634122.webp";
import eskomLogo from "@assets/eskom-logo2_1763669662961.jpeg";
import glencoreLogo from "@assets/Glencore-Logo.wine_1763669624672.png";
import thungelaLogo from "@assets/1361743_1763669642408.png";
import angloLogo from "@assets/1361911_1763669684570.png";

export function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <StatsBar />
      
      {/* Trust Bar - Marquee Style */}
      <section className="py-12 sm:py-20 border-y border-gray-100 bg-white overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {/* Duplicated for seamless loop */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 sm:gap-20 md:gap-40 mx-4 sm:mx-10 md:mx-20 flex-shrink-0">
               <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center">
                 <img src={thungelaLogo} alt="Thungela Resources" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
               </div>
               <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center">
                 <img src={glencoreLogo} alt="Glencore" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
               </div>
               <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center p-2">
                 <img src={transnetLogo} alt="Transnet" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
               </div>
               <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center">
                 <img src={eskomLogo} alt="Eskom" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
               </div>
               <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center">
                 <img src={angloLogo} alt="Anglo American" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
               </div>
            </div>
          ))}
        </div>
      </section>

      <ServicesGrid />
      <RouteMap />
      <ESGSection />
      <CommunityImpact />

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gray-900 text-center w-full">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">READY TO PARTNER?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Download our full company profile to learn more about our capabilities, fleet, and safety record.
          </p>
          <a href="/assets/company-profile.pdf" download="SIYAPHUSHA-Company-Profile.pdf">
            <Button size="lg" className="font-heading font-black bg-white text-black hover:bg-white/90 uppercase h-12 sm:h-14 md:h-16 px-6 sm:px-10 text-sm sm:text-base md:text-lg rounded-sm tracking-[0.15em] transition-all duration-500 overflow-hidden relative group">
              <span className="relative z-10 group-hover:text-black flex items-center transition-colors">
                <Download className="mr-3 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
                Download Company Profile
              </span>
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
