import { Target, Award, Mail, Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Themba Nkosi",
    title: "Founder & Executive Director",
    email: "themba@siyaphusha.co.za",
    linkedin: "https://linkedin.com/company/siyaphusha",
    description: "A visionary leader with deep expertise in the South African mining sector, Themba founded Siyaphusha Consortium with a mission to deliver world-class mining services through innovation and sustainable growth."
  },
  {
    name: "Solly Howard",
    title: "Operations Director",
    email: "solly@siyaphusha.co.za",
    linkedin: "https://linkedin.com/company/siyaphusha",
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
      <div className="bg-black pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tighter uppercase">Our Identity</h1>
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
            <div className="bg-gray-50 p-6 sm:p-12">
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
                  className="group bg-white overflow-hidden transition-all duration-500 hover:shadow-xl p-8 sm:p-12"
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
              Organizational Structure
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black mb-4 tracking-tight">
              MANAGEMENT HIERARCHY
            </h2>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto pb-8">
            <div className="min-w-[800px] flex flex-col items-center">
              {/* Management */}
              <div className="bg-blue-900 text-white px-8 py-4 font-black uppercase tracking-widest text-sm shadow-xl">
                Siyaphusha Management
              </div>
              <div className="w-px h-8 bg-gray-200"></div>

              {/* Partners */}
              <div className="flex gap-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%-120px)] h-px bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-blue-600 text-white p-6 w-64 text-center shadow-lg">
                    <div className="font-black uppercase text-lg">Themba Nkosi</div>
                    <div className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Executive Partner</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-blue-600 text-white p-6 w-64 text-center shadow-lg">
                    <div className="font-black uppercase text-lg">Solomon Howard</div>
                    <div className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Operations Partner</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                </div>
              </div>

              {/* Departments */}
              <div className="flex gap-8 relative w-full justify-center">
                <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gray-200"></div>
                
                {/* BD */}
                <div className="flex flex-col items-center w-48">
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-emerald-600 text-white p-4 w-full text-center text-xs font-black uppercase tracking-tight shadow-md">
                    Business Development
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-amber-500 text-black p-3 w-full text-center text-[10px] font-bold uppercase shadow-sm">
                    BD Executive
                  </div>
                </div>

                {/* Finance */}
                <div className="flex flex-col items-center w-48">
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-emerald-600 text-white p-4 w-full text-center text-xs font-black uppercase tracking-tight shadow-md">
                    Finance & Administration
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="flex gap-2 w-full">
                    <div className="bg-amber-500 text-black p-2 flex-1 text-center text-[9px] font-bold uppercase shadow-sm leading-tight">HR & PROCUREMENT</div>
                    <div className="bg-amber-500 text-black p-2 flex-1 text-center text-[9px] font-bold uppercase shadow-sm leading-tight">FINANCE</div>
                  </div>
                </div>

                {/* Compliance (Shared) */}
                <div className="flex flex-col items-center w-48 relative">
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-red-500 text-white p-4 w-full text-center text-xs font-black uppercase tracking-tight shadow-md">
                    Compliance
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-amber-500 text-black p-4 w-full text-center shadow-sm">
                    <div className="text-[10px] font-black uppercase">SHEQ Officer</div>
                    <div className="text-[8px] font-bold opacity-60">Safety, Health, Environment, Quality</div>
                  </div>
                </div>

                {/* Operations */}
                <div className="flex flex-col items-center w-64">
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="bg-emerald-600 text-white p-4 w-full text-center text-xs font-black uppercase tracking-tight shadow-md">
                    Operations Management
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col items-center flex-1">
                      <div className="bg-amber-500 text-black p-3 w-full text-center text-[9px] font-bold uppercase shadow-sm leading-tight">Logistics Fleet & Superintendent</div>
                      <div className="w-px h-4 bg-gray-200"></div>
                      <div className="bg-gray-100 text-black p-2 w-full text-center text-[8px] font-bold uppercase shadow-sm">Shift Supervisors / Haulage</div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="bg-amber-500 text-black p-3 w-full text-center text-[9px] font-bold uppercase shadow-sm leading-tight">Plant & Civils Superintendent</div>
                      <div className="w-px h-4 bg-gray-200"></div>
                      <div className="bg-gray-100 text-black p-2 w-full text-center text-[8px] font-bold uppercase shadow-sm">SITE FOREMAN / OPS TEAM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                className="group bg-gray-50 p-8 sm:p-12 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
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
                  
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 flex-grow font-medium">
                    {leader.description}
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
