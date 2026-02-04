import { Target, Award, ChevronRight, Mail, Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Themba Nkosi",
    title: "Founder & Executive Director",
    email: "themba@siyaphusha.co.za",
    linkedin: "https://linkedin.com/in/themba-nkosi",
    description: "A visionary leader with deep expertise in the South African mining sector, Themba founded Siyaphusha Consortium with a mission to deliver world-class mining services through innovation and sustainable growth."
  },
  {
    name: "Solly Howard",
    title: "Operations Director",
    email: "solly@siyaphusha.co.za",
    linkedin: "https://linkedin.com/in/solly-howard",
    description: "Driven by a passion for operational excellence and site safety, Solly leads our field teams with a motivational approach that empowers every employee to reach their full potential while maintaining our high standards."
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
      {/* Hero header with proper spacing for fixed navbar */}
      <div className="bg-black pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-4">ABOUT US</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
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
                className="group bg-gray-50 border border-gray-100 p-6 sm:p-10 transition-all duration-500 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-black mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-wider">
                      {leader.title}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                    {leader.description}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <a href={`mailto:${leader.email}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors">
                      <Mail className="h-4 w-4" />
                      {leader.email}
                    </a>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors">
                      <Linkedin className="h-4 w-4" />
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
