import { Target, Award, Mail, Linkedin } from "lucide-react";

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
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tighter">ABOUT US</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2 font-medium leading-relaxed">
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
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4 tracking-tight">
              FOUNDED ON EXPERTISE
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 p-6 sm:p-12">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
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

      <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">
              Our Purpose
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4 tracking-tight">
              VISION & MISSION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto">
            {visionMission.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl p-8 sm:p-12"
                >
                  <div className="mb-8">
                    <div className="h-16 w-16 bg-black flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-black mb-4 tracking-tight uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
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
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4 tracking-tight">
              OUR LEADERSHIP
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              Experienced professionals driving our vision of excellence in the mining sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-200 p-8 sm:p-12 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-black mb-2 tracking-tighter uppercase">
                      {leader.name}
                    </h3>
                    <p className="text-black font-black uppercase text-xs tracking-[0.2em] opacity-60">
                      {leader.title}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 flex-grow font-medium italic">
                    "{leader.description}"
                  </p>

                  <div className="space-y-4 pt-8 border-t border-gray-200">
                    <a href={`mailto:${leader.email}`} className="flex items-center gap-4 text-sm font-bold text-black/70 hover:text-black transition-colors group/link">
                      <div className="h-10 w-10 bg-black/5 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-white transition-all">
                        <Mail className="h-4 w-4" />
                      </div>
                      {leader.email}
                    </a>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm font-bold text-black/70 hover:text-black transition-colors group/link">
                      <div className="h-10 w-10 bg-black/5 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-white transition-all">
                        <Linkedin className="h-4 w-4" />
                      </div>
                      View Professional Profile
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
    </div>
  );
}
