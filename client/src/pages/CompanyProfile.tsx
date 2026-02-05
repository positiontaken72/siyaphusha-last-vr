import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from "lucide-react";

export function CompanyProfile() {
  const primaryColor = "hsl(0 0% 0%)";
  const secondaryColor = "hsl(0 0% 100%)";

  return (
    <div className="bg-white min-h-screen p-8 md:p-16 max-w-4xl mx-auto print:p-0 print:max-w-none text-black selection:bg-black selection:text-white" id="profile-container">
      {/* Cover Page */}
      <div className="min-h-[1056px] flex flex-col justify-between border-8 border-black p-12 mb-16 relative overflow-hidden page-break-after-always">
        <div className="absolute inset-0 opacity-10 pointer-events-none industrial-pattern"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-24">
            <div className="flex items-center gap-4">
              <img src="/attached_assets/Copy_of_SIYAPHUSHA_LOGO_WHITE_(1)_1770260074500.png" alt="Siyaphusha Logo" className="h-16 w-auto" />
            </div>
            <div className="text-right uppercase tracking-[0.2em] font-bold text-sm">
              Established 2020
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-xl font-bold tracking-[0.3em] mb-4 text-gray-500 uppercase">Powering Progress, Responsibly.</h2>
            <h1 className="text-7xl md:text-8xl font-black leading-none mb-8 tracking-tighter">COMPANY<br />PROFILE</h1>
            <div className="h-2 w-32 bg-black mb-8"></div>
            <p className="text-2xl font-bold uppercase tracking-widest max-w-md">
              Integrated Mining, Earthworks & Logistics Solutions
            </p>
          </div>

          <div className="mt-auto pt-12 border-t-4 border-black flex justify-between items-end">
            <div className="text-sm font-bold uppercase tracking-wider">
              Phola, Ogies, Mpumalanga
            </div>
            <div className="text-right">
              <div className="font-black text-lg">2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="min-h-[1056px] p-12 mb-16 border-l-8 border-black page-break-after-always">
        <h2 className="text-4xl font-black mb-16 uppercase tracking-tight">Table of Contents</h2>
        <div className="space-y-6">
          {[
            "Executive Summary",
            "Our Story & Vision",
            "Leadership & Organizational Structure",
            "Our Services",
            "Operational Excellence",
            "Our Capabilities: Fleet & Technical Assets",
            "Our Commitment",
            "Partner With Us"
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 group">
              <div className="flex items-center gap-6">
                <span className="font-black text-2xl text-gray-300">0{i + 1}</span>
                <span className="text-xl font-bold uppercase tracking-wide">{item}</span>
              </div>
              <div className="h-px flex-1 mx-8 border-t border-dotted border-gray-300"></div>
              <span className="font-bold">P. {i + 2}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1. Executive Summary */}
      <div className="min-h-[1056px] p-12 mb-16 page-break-after-always">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">01</div>
          <h2 className="text-4xl font-black uppercase tracking-tight">Executive Summary</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tight">Powering Progress Since 2020</h3>
            <p className="text-xl leading-relaxed font-medium">
              Four years ago we started with a simple goal. We wanted to be a different kind of partner in the Mpumalanga mining sector. One that combined real experience with genuine reliability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Siyaphusha delivers integrated mining support, earthworks, and logistics from our base in Phola. We have moved over 1,000,000 tonnes of material for leading industry clients. We have done this while building a perfect safety record across 30,000 operational hours. Our clients trust us because we understand the pressure they face. They know we will do what we say we will do.
            </p>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="font-black text-sm uppercase tracking-widest mb-6">A Record of Reliable Delivery</h3>
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-black">1M+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Tonnes Transported with our haulage fleet</div>
              </div>
              <div>
                <div className="text-4xl font-black">30k+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Operational Hours with zero lost time incidents</div>
              </div>
              <div>
                <div className="text-4xl font-black">25k+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Daily tons material handling</div>
              </div>
              <div>
                <div className="text-4xl font-black">3.4M+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Tons managed and stockpiled</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Our Story & Vision */}
      <div className="min-h-[1056px] p-12 mb-16 page-break-after-always">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">02</div>
          <h2 className="text-4xl font-black uppercase tracking-tight">Our Story & Vision</h2>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-black uppercase mb-4 tracking-wider">How We Began</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Our story is not complicated. Two partners with deep industry experience saw a need for a contractor who did things properly. In 2020 we established Siyaphusha in Phola. We built the company on a foundation of hands on knowledge. We believe the best way to run a project is to understand the work from the ground up.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-black hover:bg-black hover:text-white transition-colors duration-500">
              <h3 className="text-lg font-black uppercase mb-4 tracking-widest">Where We Are Headed</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Our vision is clear. We want to be the first company mining and civil clients think of when they need work done. They should think of us not because we are the largest but because we are the most dependable. We aim to build partnerships that last for years, not just for one project.
              </p>
            </div>
            <div className="p-8 bg-black text-white">
              <h3 className="text-lg font-black uppercase mb-4 tracking-widest">What We Do Every Day</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Our mission is our daily practice. We come to work to deliver safe, effective service. We enhance our clients productivity. We care for our team and the environment where we work. We measure our success by the trust our clients place in us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Leadership */}
      <div className="min-h-[1056px] p-12 mb-16 page-break-after-always">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">03</div>
          <h2 className="text-4xl font-black uppercase tracking-tight">Leadership</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 rounded-none border-2 border-black">
            <h3 className="text-2xl font-black mb-2">Themba Nkosi</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Executive Partner</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Themba focuses on our future. He builds the partnerships that drive our growth. With years of experience, he understands what clients really need from a service provider. His work connects our operations to long term opportunities. You will often find him discussing project goals with clients or reviewing site progress with our teams.
            </p>
          </Card>
          <Card className="p-8 rounded-none border-2 border-black bg-black text-white">
            <h3 className="text-2xl font-black mb-2">Solomon Howard</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Operations Partner</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Solomon focuses on today’s work. He directs all field operations with a hands on approach. His experience means he knows how to get things done safely and on time. He believes that protecting our team is the first step to any successful project. His day is spent on site, with our equipment, and with our crews.
            </p>
          </Card>
        </div>

        <div className="border-t-2 border-black pt-12">
          <h3 className="text-xl font-black uppercase mb-8 tracking-wider text-center">Our Partnership</h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 italic">
            Together, we lead Siyaphusha. Themba looks ahead to where we are going. Solomon manages the work that gets us there. This balance is how we deliver for our clients. It is how we maintain our standards.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-blue-900 text-white px-6 py-3 font-bold uppercase tracking-widest text-[10px] border-2 border-black">Siyaphusha Management</div>
            <div className="w-px h-4 bg-gray-400"></div>
            <div className="flex gap-8">
              <div className="bg-blue-600 text-white p-4 w-48 text-center border-2 border-black">
                <div className="font-black uppercase text-sm">Themba Nkosi</div>
                <div className="text-[8px] font-bold opacity-80 uppercase tracking-widest">Executive Partner</div>
              </div>
              <div className="bg-blue-600 text-white p-4 w-48 text-center border-2 border-black">
                <div className="font-black uppercase text-sm">Solomon Howard</div>
                <div className="text-[8px] font-bold opacity-80 uppercase tracking-widest">Operations Partner</div>
              </div>
            </div>
            <div className="w-px h-4 bg-gray-400"></div>
            <div className="grid grid-cols-4 gap-4 w-full px-4">
              <div className="bg-emerald-600 text-white p-2 text-center text-[8px] font-black uppercase border-2 border-black">Business Development</div>
              <div className="bg-emerald-600 text-white p-2 text-center text-[8px] font-black uppercase border-2 border-black">Finance & Admin</div>
              <div className="bg-red-500 text-white p-2 text-center text-[8px] font-black uppercase border-2 border-black">Compliance</div>
              <div className="bg-emerald-600 text-white p-2 text-center text-[8px] font-black uppercase border-2 border-black">Operations Management</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Our Services */}
      <div className="min-h-[1056px] p-12 mb-16 page-break-after-always">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">04</div>
          <h2 className="text-4xl font-black uppercase tracking-tight">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { title: "Logistics and Haulage", desc: "We transport bulk materials safely across Mpumalanga. Our 34-ton side tippers form a core part of this capability, handling over 25,000 tons daily." },
            { title: "Stockpile Management", desc: "Good stockpile management prevents delays and ensures consistency. Our team has managed over 3,400,000 tons in stockpile volumes." },
            { title: "Mine Rehabilitation", desc: "We restore mining land to a productive state. Our work follows careful plans and meets all regulations to leave the land better for future use." },
            { title: "Crushing and Plant Hire", desc: "We process raw materials to meet specific client grades using mobile plants on site. We also hire out this equipment to other operators." },
            { title: "Civil Works", desc: "We build strong, durable infrastructure including haul roads, dams, and site facilities. We build things right the first time to avoid problems later." },
            { title: "Soil Stripping", desc: "We remove overburden to access resources efficiently. We handle topsoil with care so it can be reused later, protecting the environment." }
          ].map((service, i) => (
            <div key={i} className="group relative">
              <div className="absolute -left-6 top-0 text-4xl font-black text-gray-100 group-hover:text-black transition-colors">0{i + 1}</div>
              <h3 className="text-xl font-black uppercase mb-3 tracking-tight">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-gray-100 pl-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Operational Excellence */}
      <div className="min-h-[1056px] p-12 mb-16 page-break-after-always">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">05</div>
          <h2 className="text-4xl font-black uppercase tracking-tight">Operational Excellence</h2>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-black uppercase mb-6 tracking-wider">Key Routes and Volumes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { route: "Phola to Greenside", tons: "500,000 Tons", client: "Thungela Resources" },
                { route: "Isibonelo to Landau", tons: "150,000 Tons", client: "Thungela Resources" },
                { route: "Umsimbithi to Eskom", tons: "750,000 Tons", client: "Glencore" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 border-t-4 border-black">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{item.client}</div>
                  <div className="text-lg font-black mb-1">{item.route}</div>
                  <div className="text-sm font-bold text-black">{item.tons}</div>
                </div>
              ))}
            </div>
          </section>
          
          <div className="p-12 border-2 border-black flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">A Proven Track Record</h3>
            <p className="text-gray-600 max-w-xl text-sm italic">
              "We measure our success by the trust our clients place in us. Our 30,000+ hour incident free record is our greatest achievement. Safety is not just a rule here. It is the foundation of our culture."
            </p>
          </div>
        </div>
      </div>

      {/* 6. Capabilities */}
      <div className="min-h-[1056px] p-12 mb-16 page-break-after-always">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">06</div>
          <h2 className="text-4xl font-black uppercase tracking-tight">Capabilities</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-black uppercase mb-4 border-b-2 border-black inline-block">Haulage Fleet</h3>
              <p className="text-sm text-gray-600 mb-4">We operate a modern fleet of side tipper trucks, including 34-ton capacity vehicles. We support them with fuel tankers and lowbed trailers. This fleet handles over 25,000 tons in our daily operations.</p>
              <ul className="space-y-2 text-sm font-medium">
                <li>• Side Tipper Trucks (34-ton capacity)</li>
                <li>• Fuel Tankers</li>
                <li>• Lowbed Trailers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase mb-4 border-b-2 border-black inline-block">Earthmoving Equipment</h3>
              <p className="text-sm text-gray-600 mb-4">We use excavators, dozers, graders, and loaders. We choose the right size machine for each job, making our work efficient and cost effective.</p>
              <ul className="space-y-2 text-sm font-medium">
                <li>• Excavators & Dozers</li>
                <li>• Graders & Front-End Loaders</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-black uppercase mb-4 border-b-2 border-black inline-block">Processing Plant</h3>
              <p className="text-sm text-gray-600 mb-4">We have mobile crushing and screening plants. These allow us to process material on site to produce the exact product specifications required.</p>
              <ul className="space-y-2 text-sm font-medium">
                <li>• Mobile Crushing Units</li>
                <li>• Screening Plants</li>
                <li>• Conveyor Systems</li>
              </ul>
            </div>
            <div className="bg-black text-white p-8">
              <div className="text-3xl font-black mb-2">&gt;95%</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Operational Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Our Commitment */}
      <div className="min-h-[1056px] p-12 mb-16 page-break-after-always">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">07</div>
          <h2 className="text-4xl font-black uppercase tracking-tight">Our Commitment</h2>
        </div>

        <div className="space-y-16">
          <div className="flex gap-8">
            <div className="w-24 h-24 shrink-0 bg-black flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Safety First</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our 30,000+ hour incident free record is our greatest achievement. Safety is the foundation of our culture. We train thoroughly, we speak up about concerns, and we stop work if something is not right.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black uppercase mb-4 border-l-4 border-black pl-4">Environmental Care</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We take our environmental responsibility seriously. Our rehabilitation work uses proven scientific methods to return land to a healthy, sustainable condition.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-4 border-l-4 border-black pl-4">Community Investment</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We are invested in Phola. We sponsor the local Chakalaka Future Stars football team and support early childhood education with learning supplies.
              </p>
              <div className="flex gap-4">
                <span className="text-[10px] font-bold bg-gray-100 px-3 py-1 uppercase tracking-tighter">Chakalaka Future Stars</span>
                <span className="text-[10px] font-bold bg-gray-100 px-3 py-1 uppercase tracking-tighter">ECD Supplies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Partner With Us */}
      <div className="min-h-[1056px] p-12 mb-16 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl">08</div>
            <h2 className="text-4xl font-black uppercase tracking-tight">Partner With Us</h2>
          </div>

          <div className="mb-16 overflow-hidden border-2 border-black">
            <Table>
              <TableHeader className="bg-black">
                <TableRow>
                  <TableHead className="text-white font-black uppercase tracking-widest text-xs py-4">Purpose</TableHead>
                  <TableHead className="text-white font-black uppercase tracking-widest text-xs py-4">Designated Channel</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { purpose: "Strategic Projects", channel: "Themba Nkosi / themba@siyaphusha.co.za" },
                  { purpose: "Operations & Fleet", channel: "Solomon Howard / solly@siyaphusha.co.za" },
                  { purpose: "Daily Operations", channel: "operations@siyaphusha.co.za" },
                  { purpose: "General Info", channel: "info@siyaphusha.co.za" }
                ].map((row, i) => (
                  <TableRow key={i} className="border-b border-black">
                    <TableCell className="font-bold text-xs uppercase py-6">{row.purpose}</TableCell>
                    <TableCell className="text-xs font-medium py-6">{row.channel}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="bg-black text-white p-12 mt-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="font-black text-3xl mb-8 tracking-tighter uppercase">SIYAPHUSHA Consortium (PTY) Ltd</div>
              <div className="space-y-4 text-sm opacity-80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Phola, Ogies, Mpumalanga</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4" />
                  <span>www.siyaphusha.co.za</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>info@siyaphusha.co.za</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end text-right">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Powering Progress, Responsibly.</div>
              <div className="text-[8px] opacity-40">© {new Date().getFullYear()} Siyaphusha Consortium (PTY) Ltd</div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Controls (Hidden in PDF) */}
      <div className="fixed bottom-8 right-8 print:hidden flex flex-col gap-4">
        <button 
          onClick={() => window.print()}
          className="bg-black text-white p-6 rounded-none font-black uppercase tracking-widest flex items-center gap-4 hover:bg-gray-800 transition-colors shadow-2xl animate-industrial-pulse"
        >
          <Download className="w-6 h-6" />
          Generate PDF Profile
        </button>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .page-break-after-always {
            page-break-after: always;
          }
        }
        #profile-container {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </div>
  );
}
