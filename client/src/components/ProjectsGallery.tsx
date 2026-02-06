import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    client: "Thungela Resources",
    type: "Haulage",
    location: "Phola Plant",
    scope: "Hauling Coal from Phola Plant to Greenside RLT",
    volume: "500 000 tons",
    status: "Ongoing"
  },
  {
    client: "Thungela Resources",
    type: "Haulage",
    location: "Isibonelo",
    scope: "Hauling Coal from Isibonelo to Landua MRD",
    volume: "800 000 tons",
    status: "Ongoing"
  },
  {
    client: "Thungela Resources",
    type: "Material Handling",
    location: "Operations",
    scope: "Material Handling using 34 ton side tiper trucks",
    volume: "25 000 tons",
    status: "Ongoing"
  },
  {
    client: "Thungela Resources",
    type: "Stockpile Management",
    location: "Operations",
    scope: "Stockpile Management for Thungela Resources",
    volume: "3,4+ Million tons",
    status: "Ongoing"
  }
];

const clients = ["All", "Thungela Resources"];

export function ProjectsGallery() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.client === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Track Record</span>
            <h2 className="font-heading font-black text-4xl text-primary mb-4">FEATURED PROJECTS</h2>
            <p className="text-gray-600">
              Delivering value through operational excellence across South Africa's major mining houses.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {clients.map((client) => (
              <button
                key={client}
                onClick={() => setFilter(client)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all border",
                  filter === client 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-secondary hover:text-secondary"
                )}
              >
                {client}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500" />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                    {project.type}
                  </Badge>
                  <span className="text-xs font-bold text-green-600 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-600 mr-2 animate-pulse" />
                    {project.status}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-xl text-primary mb-2">{project.client}</h3>
                <p className="text-gray-500 text-sm mb-6">{project.location}</p>
                
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div>
                    <span className="text-xs text-gray-400 uppercase block mb-1">Scope</span>
                    <p className="text-sm font-medium text-gray-700">{project.scope}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase block mb-1">Volume</span>
                    <p className="text-sm font-bold text-primary">{project.volume}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
