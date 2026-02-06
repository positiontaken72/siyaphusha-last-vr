import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import logoImg from "@assets/SIYAPHUSHA_LOGO_B_W__2_-removebg-preview_(1)_1770263085249.png";

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
      {/* Main Navigation - Transparent, fixed bar */}
      <header 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-4 sm:py-5"
        )}
        style={{ borderRadius: 0 }}
        data-testid="main-header"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logotype */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group" data-testid="logo-link">
            <img 
              src={logoImg} 
              alt="Siyaphusha Consortium (PTY) Ltd Logo" 
              className="h-16 sm:h-20 w-auto object-contain transition-all duration-300" 
            />
          </Link>

          {/* Desktop Nav - Underline hover effect */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative cursor-pointer group py-2"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                <span 
                  className={cn(
                    "font-heading font-bold text-xs uppercase tracking-wide transition-colors duration-300 drop-shadow-sm",
                    location === link.href ? "text-white" : "text-white/70 group-hover:text-white"
                  )}
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
                className="font-heading font-bold bg-white text-black hover:bg-white/90 px-4 lg:px-5 uppercase tracking-widest text-xs transition-transform duration-200 hover:-translate-y-0.5"
                data-testid="button-download-profile"
              >
                <Download className="mr-2 h-3.5 w-3.5" />
                PROFILE
              </Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 bg-white/10 backdrop-blur-sm text-white transition-all duration-200 hover:bg-white/20"
            style={{ borderRadius: 0 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 p-4 flex flex-col gap-4 shadow-2xl"
            data-testid="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-heading font-bold text-base block py-2 border-b border-gray-100 cursor-pointer tracking-tight",
                  location === link.href ? "text-black" : "text-gray-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <a href="/assets/company-profile.pdf" download="SIYAPHUSHA-Company-Profile.pdf" className="w-full">
              <Button 
                className="font-heading font-bold w-full bg-black text-white hover:bg-gray-800 uppercase mt-2 text-sm"
                data-testid="mobile-button-download-profile"
              >
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 relative z-10">
          <div>
            <div className="mb-6">
              <img 
                src={logoImg} 
                alt="Siyaphusha Consortium (PTY) Ltd Logo" 
                className="h-16 sm:h-20 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              A leading provider of expert mining, earthworks, and logistics solutions. Delivering scale, safety, and efficiency since 2020.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/siyaphusha" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://facebook.com/siyaphusha" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <Facebook className="h-4 w-4" />
              </a>
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

        <div className="container mx-auto px-4 pt-8 border-t border-white/10 text-center text-[10px] sm:text-xs text-gray-500 relative z-10 font-bold uppercase tracking-[0.2em]">
          <p className="mb-2">WWW.SIYAPHUSHA.CO.ZA | INFO@SIYAPHUSHA.CO.ZA</p>
          <p className="opacity-60">&copy; {new Date().getFullYear()} SIYAPHUSHA CONSORTIUM (PTY) LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
