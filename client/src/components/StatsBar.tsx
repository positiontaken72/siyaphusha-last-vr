import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 1400000, label: "Tonnes Hauled", suffix: "+", prefix: "" },
    { value: 25000, label: "Tonnes Handled", suffix: "+", prefix: "" },
    { value: 100, label: "Commitment to Safety", suffix: "%", prefix: "" },
    { value: 4, label: "Major Routes", suffix: "+", prefix: "" },
  ];

  return (
    <section ref={ref} className="bg-white py-12 sm:py-16 border-b border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                {stat.prefix}
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="h-1 w-10 sm:w-12 bg-gray-200 mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300" />
              <p className="text-gray-500 font-medium uppercase tracking-wider text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
