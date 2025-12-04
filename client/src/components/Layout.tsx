import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground" style={{ colorScheme: 'dark' }}>
      {/* Main Navigation */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b-2 border-white/5",
          isScrolled ? "bg-black/95 backdrop-blur-xl shadow-2xl py-3" : "bg-black py-5"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex flex-col cursor-pointer group">
            <span className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
              SIYAPHUSHA
            </span>
            <span className="font-heading font-black text-gray-400 text-xs tracking-tight uppercase group-hover:text-white transition-colors duration-300">Consortium PTY Ltd</span>
          </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-heading font-black text-xs uppercase tracking-tight transition-all duration-300 hover:text-gray-200 cursor-pointer relative group px-2 sm:px-3 py-2 rounded-md hover:bg-white/5 text-sm md:text-xs",
                  location === link.href ? "text-white" : "text-white/70"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="/assets/company-profile.pdf" download="SIYAPHUSHA-Company-Profile.pdf">
              <Button 
                className="font-heading font-black bg-white text-black hover:bg-white uppercase tracking-[0.15em] text-xs rounded-sm relative overflow-hidden group h-10 px-4"
              >
                <span className="relative z-10 flex items-center transition-colors duration-500">
                  <Download className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                  Profile
                </span>
              </Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 bg-white text-black hover:bg-gray-100 transition-colors rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-heading font-black text-base sm:text-lg block py-2 border-b border-gray-100 cursor-pointer tracking-tight",
                  location === link.href ? "text-black" : "text-gray-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="/assets/company-profile.pdf" download="SIYAPHUSHA-Company-Profile.pdf" className="w-full">
              <Button className="font-heading font-black w-full bg-black text-white hover:bg-gray-800 uppercase mt-2 text-sm sm:text-base h-10">
                <Download className="mr-2 h-4 w-4" />
                Download Profile
              </Button>
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 sm:pt-24 pb-12 border-t-2 border-white/10 relative overflow-hidden industrial-pattern">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div>
            <div className="mb-6">
              <span className="font-heading font-black text-lg sm:text-xl md:text-2xl text-white tracking-tight block">
                SIYAPHUSHA
              </span>
              <span className="text-gray-400 font-bold text-xs tracking-[0.2em] uppercase">Consortium (PTY) Ltd</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              A leading provider of expert mining, earthworks, and logistics solutions. Delivering scale, safety, and efficiency since 2020.
            </p>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-white pl-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors cursor-pointer">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><a href="/assets/company-profile.pdf" download className="hover:text-white transition-colors">Company Profile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-white pl-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Mine Rehabilitation</li>
              <li>Soil Stripping</li>
              <li>Civils Works</li>
              <li>Material Handling</li>
              <li>Screening & Crushing</li>
              <li>Logistics & Haulage</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-white pl-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white shrink-0" />
                <span>1855 Finca Street, Phola,<br />Mpumalanga</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white shrink-0" />
                <span>+27 (0) 13 648 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white shrink-0" />
                <span>info@siyaphusha.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Siyaphusha Consortium (PTY) Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
