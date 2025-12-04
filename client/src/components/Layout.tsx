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
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground" style={{ colorScheme: 'dark' }}>
      {/* Main Navigation - Sharp edges, fixed bar */}
      <header 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-[#0a0a0a]/98 backdrop-blur-sm py-4" : "bg-[#0a0a0a] py-5"
        )}
        style={{ borderRadius: 0 }}
        data-testid="main-header"
      >
        <div className="container mx-auto px-6 sm:px-8 flex justify-between items-center">
          {/* Logotype - Montserrat Black */}
          <Link href="/" className="flex flex-col cursor-pointer" data-testid="logo-link">
            <span 
              className="text-white leading-none"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                letterSpacing: '-0.02em'
              }}
            >
              SIYAPHUSHA
            </span>
            <span 
              className="text-[#888888]"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              CONSORTIUM (PTY) LTD
            </span>
          </Link>

          {/* Desktop Nav - Underline hover effect */}
          <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative cursor-pointer group py-2"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                <span 
                  className={cn(
                    "transition-colors duration-300",
                    location === link.href ? "text-white" : "text-[#888888] group-hover:text-white"
                  )}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em'
                  }}
                >
                  {link.label}
                </span>
                {/* Underline on hover */}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300",
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            <a href="/assets/company-profile.pdf" download="SIYAPHUSHA-Company-Profile.pdf">
              <Button 
                className="bg-white text-[#0a0a0a] hover:bg-white px-5 py-2 transition-transform duration-200 hover:-translate-y-0.5"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  borderRadius: 0
                }}
                data-testid="button-download-profile"
              >
                <Download className="mr-2 h-3.5 w-3.5" />
                PROFILE
              </Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 bg-white text-[#0a0a0a] transition-transform duration-200 hover:-translate-y-0.5"
            style={{ borderRadius: 0 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu - Sharp edges */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 w-full bg-[#111111] border-t border-[#222222] p-6 flex flex-col gap-4"
            style={{ borderRadius: 0 }}
            data-testid="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "block py-3 border-b border-[#222222] cursor-pointer",
                  location === link.href ? "text-white" : "text-[#888888]"
                )}
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  letterSpacing: '0.08em'
                }}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <a href="/assets/company-profile.pdf" download="SIYAPHUSHA-Company-Profile.pdf" className="w-full mt-2">
              <Button 
                className="w-full bg-white text-[#0a0a0a] hover:bg-white py-4"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  borderRadius: 0
                }}
                data-testid="mobile-button-download-profile"
              >
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD PROFILE
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
