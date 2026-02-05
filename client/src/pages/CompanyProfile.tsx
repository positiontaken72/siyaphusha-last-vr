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
            <div className="bg-black text-white p-6 font-black text-3xl tracking-tighter">
              SIYAPHUSHA
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
            <p className="text-xl leading-relaxed font-medium">
              Siyaphusha is a premier partner for integrated mining support, earthworks, and logistics services, founded on an impeccable safety record and deep operational expertise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since 2020, we have powered progress for major industry clients by reliably executing large-scale projects, hauling 1,000,000+ tonnes, and maintaining a 100% commitment to safety, all from our strategic base in the heart of the Mpumalanga coal corridor.
            </p>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="font-black text-sm uppercase tracking-widest mb-6">Key Achievements</h3>
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-black">1M+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Tonnes Hauled</div>
              </div>
              <div>
                <div className="text-4xl font-black">100%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Safety Record</div>
              </div>
              <div>
                <div className="text-4xl font-black">04+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Years Excellence</div>
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
            <h3 className="text-xl font-black uppercase mb-4 tracking-wider">Our Story</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Founded in 2020 in Phola, Siyaphusha was built by partners with decades of frontline industry experience. We combine large-scale project capability with the agility and direct partner involvement of a dedicated contractor.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-black hover:bg-black hover:text-white transition-colors duration-500">
              <h3 className="text-lg font-black uppercase mb-4 tracking-widest">Our Vision</h3>
              <p className="text-sm leading-relaxed opacity-80">
                To be the trusted partner of choice for mining and civil entities, recognized for relentless reliability, operational excellence, and responsible stewardship.
              </p>
            </div>
            <div className="p-8 bg-black text-white">
              <h3 className="text-lg font-black uppercase mb-4 tracking-widest">Our Mission</h3>
              <p className="text-sm leading-relaxed opacity-80">
                To deliver superior, safe, and integrated service solutions that drive our clients' productivity while positively impacting our people and environment.
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
              Provides strategic vision and oversees commercial growth, leveraging extensive experience in mining services and business development.
            </p>
          </Card>
          <Card className="p-8 rounded-none border-2 border-black bg-black text-white">
            <h3 className="text-2xl font-black mb-2">Solomon Howard</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Operations Partner</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Directs all field operations and logistics, with a hands-on track record in earthworks, plant management, and large-scale haulage.
            </p>
          </Card>
        </div>

        <div className="border-t-2 border-black pt-12">
          <h3 className="text-xl font-black uppercase mb-8 tracking-wider text-center">Organizational Structure</h3>
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
            { title: "Mine Rehabilitation", desc: "Planning, implementation, and monitoring for sustainable land restoration." },
            { title: "Soil Stripping", desc: "Precision overburden removal and large-scale earthmoving." },
            { title: "Civil Works", desc: "Construction of dams, roads, and essential mine infrastructure." },
            { title: "Logistics", desc: "Safe, efficient haulage and transport solutions across Mpumalanga." },
            { title: "Plant Hire", desc: "Raw material processing with mobile plant hire." },
            { title: "Stockpile Management", desc: "Systematic inventory control for seamless supply chain support." }
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
            <h3 className="text-xl font-black uppercase mb-6 tracking-wider">Strategic Logistical Footprint</h3>
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
              "Siyaphusha consistently delivers on their commitments. Their operational agility and focus on safety make them a preferred partner in our coal corridor operations."
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
              <h3 className="text-lg font-black uppercase mb-4 border-b-2 border-black inline-block">Haulage & Logistics</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>• Side Tipper Trucks</li>
                <li>• Fuel Tankers</li>
                <li>• Lowbed Trailers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase mb-4 border-b-2 border-black inline-block">Earthworks & Mining</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>• Excavators & Dozers</li>
                <li>• Graders & Front-End Loaders</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-black uppercase mb-4 border-b-2 border-black inline-block">Processing Plant</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>• Mobile Crushing Units</li>
                <li>• Screening Plants</li>
                <li>• Conveyor Systems</li>
              </ul>
            </div>
            <div className="bg-black text-white p-8">
              <div className="text-3xl font-black mb-2">&gt;95%</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Fleet Availability System</div>
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
                Zero-harm philosophy, rigorous protocols, and continuous training. 100% commitment to safety. Our safety record is the foundation of our reputation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black uppercase mb-4 border-l-4 border-black pl-4">Environment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sustainable operational practices and expert mine rehabilitation to ensure land is restored for future generations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-4 border-l-4 border-black pl-4">Community</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Active investment in our local Phola community through sports sponsorship and educational resources.
              </p>
              <div className="flex gap-4">
                <span className="text-[10px] font-bold bg-gray-100 px-3 py-1 uppercase tracking-tighter">Chakalaka Stars</span>
                <span className="text-[10px] font-bold bg-gray-100 px-3 py-1 uppercase tracking-tighter">ECD Investment</span>
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
                  { purpose: "Safety (SHEQ)", channel: "safety@siyaphusha.co.za" },
                  { purpose: "Finance & Admin", channel: "finance@siyaphusha.co.za" }
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
              <div className="font-black text-3xl mb-8 tracking-tighter">SIYAPHUSHA</div>
              <div className="space-y-4 text-sm opacity-80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Phola, Ogies, Mpumalanga</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4" />
                  <span>www.siyaphusha.co.za</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end text-right">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Powering Progress, Responsibly.</div>
              <div className="text-[8px] opacity-40">© 2026 Siyaphusha Integrated Mining & Logistics</div>
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
