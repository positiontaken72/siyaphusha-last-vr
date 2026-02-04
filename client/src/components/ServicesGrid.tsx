import { ChevronRight } from "lucide-react";

import logisticsImg from "@assets/Logistics_1770225486111.jpeg";
import materialHandlingImg from "@assets/material_handling_1764810320659-BkCG84J1_1770225486112.jpeg";
import stockpileImg from "@assets/stock_pile_loading_1764810457750-Dd2_qpB6_1770225486115.webp";
import crushingImg from "@assets/Crushing-and-Screening_002_1764299692632-BM8M1Hi1_1770225486108.jpeg";
import soilImg from "@assets/soilstripping-1_1764810317359-CD2hhyIY_1770225486113.jpeg";
import civilsImg from "@assets/Civil_Works_1770225486106.jpeg";
import landRehabImg from "@assets/Land_Rehabilitation_1770225486109.jpeg";

const services = [
  {
    title: "Logistics",
    description: "Reliable coal haulage across the Mpumalanga corridor. Our professional fleet delivers efficient and safe transportation solutions.",
    image: logisticsImg,
  },
  {
    title: "Stock Pile",
    description: "Managing inventory for seamless supply. Our stockpile management ensures consistent quality and availability for our mining partners.",
    image: stockpileImg,
  },
  {
    title: "Screening & Crushing",
    description: "Processing raw coal to specified grades. Advanced crushing technology delivers precise size classification to meet client specifications.",
    image: crushingImg,
  },
  {
    title: "Mine Rehabilitation",
    description: "Restoring mined land to its natural state. Our rehabilitation efforts focus on soil restoration, re-vegetation, and sustainable land management for future generations.",
    image: landRehabImg,
  },
  {
    title: "Material Handling",
    description: "Safe and precise movement of bulk materials. State-of-the-art handling systems ensure optimal productivity and operational efficiency.",
    image: materialHandlingImg,
  },
  {
    title: "Soil Stripping",
    description: "Efficient overburden removal to access resources. Our expert teams handle large-scale topsoil removal with precision and environmental responsibility.",
    image: soilImg,
  },
  {
    title: "Civil Works",
    description: "Building dams, roads, and essential mine infrastructure. We deliver critical civil engineering projects that support mining operations and community development.",
    image: civilsImg,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">
            What We Do
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4">
            OUR SERVICES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Professional mining, earthworks, and logistics services built on safety, quality, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {service.description}
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
  );
}
