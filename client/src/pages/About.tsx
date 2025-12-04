import { Target, Award, ChevronRight } from "lucide-react";

import thembaNkosiImg from "@assets/WhatsApp_Image_2025-12-03_at_03.06.54_1468d7c2_1764724263634.jpg";
import sollyHowardImg from "@assets/WhatsApp_Image_2025-12-03_at_03.06.55_712bfc15_1764724265338.jpg";

const leaders = [
  {
    name: "Themba Nkosi",
    title: "Founder & Executive Director",
    image: thembaNkosiImg,
    description: "A visionary leader with deep expertise in the South African mining sector, Themba founded Siyaphusha Consortium with a mission to deliver world-class mining services."
  },
  {
    name: "Solly Howard",
    title: "Operations Director",
    image: sollyHowardImg,
    description: "With over 10 years of experience and a background as a safety officer, Solly ensures operational excellence and maintains our impeccable safety record."
  }
];

const visionMission = [
  {
    title: "Our Vision",
    icon: Target,
    content: "To be the premier partner of choice in the mining and logistics sector, recognized for our safety, efficiency, and contribution to sustainable community development in South Africa."
  },
  {
    title: "Our Mission",
    icon: Award,
    content: "Deliver operational excellence through state-of-the-art machinery and skilled personnel. Prioritize Zero Harm in all our operations. Create lasting value for our stakeholders and host communities."
  }
];

export function About() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-black py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4">ABOUT US</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Building the future of South African mining through excellence, integrity, and sustainable practices.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">
              Our History
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4">
              FOUNDED ON EXPERTISE
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 p-6 sm:p-10">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Siyaphusha Consortium (PTY) Ltd was established in 2020 with a singular vision: to provide world-class mining and logistics services that empower the South African economy.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Born from a collaboration of industry experts, we have rapidly grown from a boutique service provider to a major partner for mining giants like Thungela Resources and Glencore. Our foundation is built on a deep understanding of the local mining landscape and a commitment to operational excellence.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Today, we operate across Mpumalanga's key coal belts, delivering end-to-end solutions from earthworks to haulage, all while maintaining an impeccable safety record.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">
              Our Purpose
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4">
              VISION & MISSION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {visionMission.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg"
                >
                  <div className="aspect-[16/6] bg-black flex items-center justify-center">
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">
              Meet The Team
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4">
              OUR LEADERSHIP
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Experienced professionals driving our vision of excellence in the mining sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-black mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-4">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {leader.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-semibold text-black hover:underline"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
