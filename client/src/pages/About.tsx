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

          <div className="max-w-7xl mx-auto overflow-x-auto pb-8">
            <div className="min-w-[1000px] flex flex-col items-center">
              {/* Management Tier */}
              <div className="bg-black text-white px-10 py-5 font-black uppercase tracking-[0.3em] text-sm shadow-2xl border border-white/20">
                Board of Directors / Management
              </div>
              <div className="w-1 h-8 bg-black"></div>

              {/* Partners Tier */}
              <div className="flex gap-20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%-160px)] h-1 bg-black"></div>
                <div className="flex flex-col items-center">
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-blue-700 text-white p-6 w-72 text-center shadow-xl border-b-4 border-blue-900">
                    <div className="font-black uppercase text-xl tracking-tight">Themba Nkosi</div>
                    <div className="text-xs font-bold opacity-90 uppercase tracking-[0.2em] mt-2">Executive Partner</div>
                  </div>
                  <div className="w-1 h-10 bg-black"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-blue-700 text-white p-6 w-72 text-center shadow-xl border-b-4 border-blue-900">
                    <div className="font-black uppercase text-xl tracking-tight">Solomon Howard</div>
                    <div className="text-xs font-bold opacity-90 uppercase tracking-[0.2em] mt-2">Operations Partner</div>
                  </div>
                  <div className="w-1 h-10 bg-black"></div>
                </div>
              </div>

              {/* Departmental Tier */}
              <div className="flex gap-6 relative w-full justify-center">
                <div className="absolute top-0 left-[5%] right-[5%] h-1 bg-black"></div>
                
                {/* Business Development */}
                <div className="flex flex-col items-center w-56">
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-emerald-700 text-white p-4 w-full text-center text-xs font-black uppercase tracking-widest shadow-lg border-b-4 border-emerald-900">
                    Business Development
                  </div>
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-amber-500 text-black p-4 w-full text-center text-[10px] font-black uppercase shadow-md border-b-2 border-amber-700">
                    BD Executive
                  </div>
                </div>

                {/* Finance & Admin */}
                <div className="flex flex-col items-center w-64">
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-emerald-700 text-white p-4 w-full text-center text-xs font-black uppercase tracking-widest shadow-lg border-b-4 border-emerald-900">
                    Finance & Administration
                  </div>
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="bg-amber-500 text-black p-3 text-center text-[9px] font-black uppercase shadow-md border-b-2 border-amber-700 leading-tight flex items-center justify-center">HR & Procurement</div>
                    <div className="bg-amber-500 text-black p-3 text-center text-[9px] font-black uppercase shadow-md border-b-2 border-amber-700 leading-tight flex items-center justify-center">Finance Manager</div>
                  </div>
                  <div className="w-1 h-6 bg-black"></div>
                  <div className="bg-gray-200 text-black p-2 w-[80%] text-center text-[8px] font-bold uppercase shadow-sm border-b border-gray-400">Payroll & Admin Support</div>
                </div>

                {/* Compliance & SHEQ */}
                <div className="flex flex-col items-center w-56">
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-red-700 text-white p-4 w-full text-center text-xs font-black uppercase tracking-widest shadow-lg border-b-4 border-red-900">
                    Compliance / SHEQ
                  </div>
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-amber-500 text-black p-4 w-full text-center shadow-md border-b-2 border-amber-700">
                    <div className="text-[10px] font-black uppercase tracking-tighter">SHEQ Officer</div>
                    <div className="text-[7px] font-bold opacity-80 mt-1">Safety, Health, Environment & Quality</div>
                  </div>
                  <div className="w-1 h-6 bg-black"></div>
                  <div className="bg-gray-200 text-black p-2 w-[80%] text-center text-[8px] font-bold uppercase shadow-sm border-b border-gray-400">Safety Representatives</div>
                </div>

                {/* Operations Management */}
                <div className="flex flex-col items-center w-[400px]">
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="bg-emerald-700 text-white p-4 w-full text-center text-xs font-black uppercase tracking-widest shadow-lg border-b-4 border-emerald-900">
                    Operations Management
                  </div>
                  <div className="w-1 h-8 bg-black"></div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {/* Logistics Branch */}
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-500 text-black p-4 w-full text-center text-[9px] font-black uppercase shadow-md border-b-2 border-amber-700 leading-tight min-h-[60px] flex items-center justify-center">
                        Logistics Fleet Superintendent
                      </div>
                      <div className="w-1 h-6 bg-black"></div>
                      <div className="bg-gray-200 text-black p-3 w-full text-center text-[8px] font-bold uppercase shadow-sm border-b border-gray-400">
                        Shift Supervisors / Haulage
                      </div>
                      <div className="w-1 h-4 bg-black"></div>
                      <div className="bg-gray-100 text-black p-2 w-full text-center text-[7px] font-bold uppercase italic">
                        Drivers & Fleet Operators
                      </div>
                    </div>
                    {/* Plant & Civils Branch */}
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-500 text-black p-4 w-full text-center text-[9px] font-black uppercase shadow-md border-b-2 border-amber-700 leading-tight min-h-[60px] flex items-center justify-center">
                        Plant & Civils Superintendent
                      </div>
                      <div className="w-1 h-6 bg-black"></div>
                      <div className="bg-gray-200 text-black p-3 w-full text-center text-[8px] font-bold uppercase shadow-sm border-b border-gray-400">
                        Site Foreman / Ops Team
                      </div>
                      <div className="w-1 h-4 bg-black"></div>
                      <div className="bg-gray-100 text-black p-2 w-full text-center text-[7px] font-bold uppercase italic">
                        Machinery & Civil Operators
                      </div>
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
