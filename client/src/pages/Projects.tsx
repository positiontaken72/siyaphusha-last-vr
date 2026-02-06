import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    client: "Thungela Resources",
    type: "Haulage",
    location: "Phola Plant",
    scope: "Hauling Coal from Phola Plant to Greenside RLT",
    volume: "500 000 tons",
    status: "Ongoing",
    description: "Reliable coal transportation services from Phola Plant to Greenside Rail Load-out Terminal for Thungela Resources."
  },
  {
    client: "Thungela Resources",
    type: "Haulage",
    location: "Isibonelo",
    scope: "Hauling Coal from Isibonelo to Landua MRD",
    volume: "800 000 tons",
    status: "Ongoing",
    description: "Efficient haulage operations connecting Isibonelo Mine to Landau Material Recovery Depot for Thungela Resources."
  },
  {
    client: "Thungela Resources",
    type: "Material Handling",
    location: "Operations",
    scope: "Material Handling using 34 ton side tiper trucks",
    volume: "25 000 tons",
    status: "Ongoing",
    description: "Specialized material handling using 34 ton side tipper trucks for Thungela Resources."
  },
  {
    client: "Thungela Resources",
    type: "Stockpile Management",
    location: "Operations",
    scope: "Stockpile Management for Thungela Resources",
    volume: "3,4+ Million tons",
    status: "Ongoing",
    description: "Comprehensive stockpile management ensuring strategic resource availability for Thungela Resources."
  },
  {
    client: "Glencore / Eskom",
    type: "Haulage",
    location: "Umsimbithi Mine",
    scope: "Hauling coal Umsibithi mine to Eskom Power Stations",
    volume: "750 000 tons",
    status: "Ongoing",
    tags: ["Eskom"],
    description: "Strategic coal supply logistics from Umsimbithi mine to various Eskom Power Stations."
  },
  {
    client: "Transnet",
    type: "Material Handling",
    location: "Operations",
    scope: "Material Handling using 34 tons side tipper trucks",
    volume: "25 000 tons",
    status: "Ongoing",
    description: "Bulk material handling and logistics support for Transnet operations."
  }
];

const clients = ["All", "Thungela Resources", "Glencore", "Eskom", "Transnet"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.client === filter);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero header with proper spacing for fixed navbar */}
      <div className="bg-black pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-4">OUR PROJECTS</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Delivering value through operational excellence across South Africa's major mining houses.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {clients.map((client) => (
              <button
                key={client}
                onClick={() => setFilter(client)}
                className={cn(
                  "px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all border",
                  filter === client 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"
                )}
              >
                {client}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 overflow-hidden transition-all duration-500 hover:shadow-lg"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-black text-white hover:bg-gray-800">
                        {project.type}
                      </Badge>
                      {project.tags?.map(tag => (
                        <Badge key={tag} variant="outline" className="border-black text-black">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <span className={cn(
                      "text-xs font-bold flex items-center",
                      project.status === "Ongoing" ? "text-green-600" : "text-gray-500"
                    )}>
                      <span className={cn(
                        "w-2 h-2 rounded-full mr-2",
                        project.status === "Ongoing" ? "bg-green-600 animate-pulse" : "bg-gray-400"
                      )} />
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-black mb-2">{project.client}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.location}</p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <span className="text-xs text-gray-400 uppercase block mb-1">Scope</span>
                      <p className="text-sm font-medium text-gray-700">{project.scope}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase block mb-1">Volume</span>
                      <p className="text-sm font-bold text-black">{project.volume}</p>
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-semibold text-black hover:underline mt-4"
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
