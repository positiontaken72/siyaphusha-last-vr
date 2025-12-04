import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

import chakalakaMain from "@assets/Chakalaka_FC-_Main_1764721523255.jpg";
import chakalaka1 from "@assets/Chakalaka_FC-1_1764721523259.jpg";
import chakalaka2 from "@assets/Chakalaka_FC-2_1764721523262.jpg";
import chakalaka3 from "@assets/Chakalaka_FC-3_1764721523265.jpg";
import chakalaka4 from "@assets/Chakalaka_FC-4_1764721523267.jpg";
import ecd1 from "@assets/ECD-1_1764721523270.jpg";
import ecd2 from "@assets/ECD-2_1764721523273.jpg";

const chakalakaImages = [chakalakaMain, chakalaka1, chakalaka2, chakalaka3, chakalaka4];
const ecdImages = [ecd1, ecd2];

function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden group">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${alt} ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const initiatives = [
  {
    id: 1,
    title: "CHAKALAKA FUTURE STARS",
    description: "Empowering Phola's youth through sports sponsorship. We proudly sponsor this talented football team from Phola, Ogies, competing in the Hollywoodbets Regional League in Nkangala.",
    images: chakalakaImages,
    link: "https://www.facebook.com/p/Chakalaka-Future-Stars-61558207000279/"
  },
  {
    id: 2,
    title: "EARLY CHILDHOOD DEVELOPMENT",
    description: "Investing in South Africa's future by equipping young learners with essential resources including books, crayons, stationery, tables, chairs, and other educational supplies for early childhood care centers.",
    images: ecdImages,
    link: null
  }
];

export function CommunityImpact() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-6 w-6 text-black" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Giving Back</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4">
            OUR COMMUNITY IMPACT
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Investing where we operate. We believe in creating lasting value for the communities that host our operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="group bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg"
            >
              <ImageSlider images={initiative.images} alt={initiative.title} />
              <div className="p-6 sm:p-8">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-black mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {initiative.description}
                </p>
                {initiative.link && (
                  <a
                    href={initiative.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-black hover:underline"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
