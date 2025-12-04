import { Award, Leaf, Shield } from "lucide-react";

import safetyImg from "@assets/generated_images/heavy_machinery_stripping_topsoil..png";
import qualityImg from "@assets/generated_images/coal_crushing_and_screening_plant..png";
import environmentImg from "@assets/generated_images/green_reclaimed_mining_land_with_grass_and_trees..png";

const values = [
  {
    id: 1,
    title: "SAFETY FIRST",
    description: "\"Zero harm philosophy.\" We maintain a safety record second to none, prioritizing the well-being of our workforce and communities above all operational targets.",
    image: safetyImg,
    icon: Shield,
    color: "blue"
  },
  {
    id: 2,
    title: "EXCELLENT QUALITY",
    description: "We deliver on-schedule with the highest standards of proficiency. Our commitment to quality ensures efficiency and reliability in every project we undertake.",
    image: qualityImg,
    icon: Award,
    color: "green"
  },
  {
    id: 3,
    title: "ENVIRONMENT CARE",
    description: "We are committed to sustainable mining practices, from responsible soil stripping to comprehensive mine rehabilitation that restores land for future generations.",
    image: environmentImg,
    icon: Leaf,
    color: "amber"
  }
];

export function ESGSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-black" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Our Commitment</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4">
            OUR VALUES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Safety, quality, and environmental responsibility in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded flex items-center justify-center ${
                    value.color === 'blue' ? 'bg-blue-500' :
                    value.color === 'green' ? 'bg-green-500' :
                    'bg-amber-500'
                  }`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
