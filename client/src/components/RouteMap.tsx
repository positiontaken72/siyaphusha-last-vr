import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Fix Leaflet default icon issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerIcon2xPng from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = new Icon({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIcon2xPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom Industrial Marker Icon
const createIndustrialIcon = (color: string) => divIcon({
  className: 'bg-transparent border-none',
  html: `<div style="
    background-color: ${color};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  "></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const routes = [
  {
    id: 1,
    name: "Phola to Greenside",
    color: "#f59e0b", // Secondary Orange
    start: { lat: -26.0086, lng: 29.0486, label: "Phola Plant" },
    end: { lat: -25.9333, lng: 29.1833, label: "Greenside RLT" },
    description: "Hauling Coal from Phola Plant to Greenside (RLT) for Thungela Resources",
    volume: "500,000 Tons"
  },
  {
    id: 2,
    name: "Isibonelo to Landau",
    color: "#3b82f6", // Blue
    start: { lat: -26.3167, lng: 29.2500, label: "Isibonelo Coal Mine" },
    end: { lat: -25.8833, lng: 29.2333, label: "Landau MRD" },
    description: "Hauling Coal from Isibonelo to Landau MRD for Thungela Resources",
    volume: "150,000 Tons"
  },
  {
    id: 3,
    name: "Umsimbithi to Eskom",
    color: "#ef4444", // Red
    start: { lat: -26.0167, lng: 29.7167, label: "Umsimbithi Mine" },
    end: { lat: -26.5167, lng: 29.9833, label: "Eskom Power Stations" },
    description: "Hauling Coal for Umsimbithi Mine to Eskom Power Stations for Glencore",
    volume: "750,000 Tons"
  }
];

export function RouteMap() {
  const [activeRoute, setActiveRoute] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Map Controls / Info */}
          <div className="md:w-1/3 space-y-6">
            <div className="mb-8">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Logistical Reach</span>
              <h2 className="font-heading font-black text-3xl text-primary mb-4">OPERATIONAL FOOTPRINT</h2>
              <p className="text-gray-600">
                Our logistics network spans key mining hubs across Mpumalanga, delivering efficiency and reliability on every route.
              </p>
            </div>

            <div className="space-y-4">
              {routes.map((route) => (
                <div 
                  key={route.id}
                  className={cn(
                    "p-4 rounded-lg border-l-4 cursor-pointer transition-all hover:shadow-md",
                    activeRoute === route.id ? "bg-gray-50 shadow-md" : "bg-white border-gray-200"
                  )}
                  style={{ borderLeftColor: route.color }}
                  onClick={() => setActiveRoute(activeRoute === route.id ? null : route.id)}
                  onMouseEnter={() => setActiveRoute(route.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-primary">{route.name}</h4>
                    <span className="text-xs font-bold px-2 py-1 bg-gray-200 rounded text-gray-600">{route.volume}</span>
                  </div>
                  <p className="text-xs text-gray-500">{route.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Container */}
          <div className="md:w-2/3 h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white relative z-0">
             <MapContainer 
              center={[-26.15, 29.5]} 
              zoom={9} 
              scrollWheelZoom={false} 
              style={{ height: "100%", width: "100%" }}
            >
              {/* Satellite view using ESRI World Imagery */}
              <TileLayer
                attribution='&copy; Tiles &copy; Esri'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
              {/* Streets/Roads overlay */}
              <TileLayer
                attribution='&copy; Tiles &copy; Esri'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}"
              />
              {/* Labels layer for satellite view */}
              <TileLayer
                attribution='&copy; Tiles &copy; Esri'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
              />

              {routes.map((route) => (
                <div key={route.id}>
                  {/* Start Marker */}
                  <Marker position={[route.start.lat, route.start.lng]} icon={createIndustrialIcon(route.color)}>
                    <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                      <span className="font-bold text-xs">{route.start.label}</span>
                    </Tooltip>
                  </Marker>

                  {/* End Marker */}
                  <Marker position={[route.end.lat, route.end.lng]} icon={createIndustrialIcon(route.color)}>
                    <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                      <span className="font-bold text-xs">{route.end.label}</span>
                    </Tooltip>
                  </Marker>

                  {/* Route Line */}
                  <Polyline 
                    positions={[
                      [route.start.lat, route.start.lng],
                      [route.end.lat, route.end.lng]
                    ]}
                    pathOptions={{ 
                      color: route.color, 
                      weight: activeRoute === route.id ? 6 : 3,
                      opacity: activeRoute === route.id ? 1 : 0.6,
                      dashArray: activeRoute === route.id ? '10, 10' : undefined,
                      className: activeRoute === route.id ? 'animate-dash' : ''
                    }}
                  >
                    <Popup>
                      <div className="p-2">
                        <h5 className="font-bold">{route.name}</h5>
                        <p className="text-xs">{route.description}</p>
                        <p className="text-xs font-bold mt-1">Volume: {route.volume}</p>
                      </div>
                    </Popup>
                  </Polyline>
                </div>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
      
      {/* CSS for dash animation */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-dash {
          animation: dash 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
