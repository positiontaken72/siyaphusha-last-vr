import { Button } from "@/components/ui/button";
import heroVideo from "@assets/generated_videos/drone_ascending_over_coal_mine_site.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center" data-testid="hero-section">
      {/* Video Background - The Proof Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6) contrast(1.1)' }}
          data-testid="hero-video"
        />
        {/* White gradient overlay to lift shadows */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.08) 100%)' 
          }} 
        />
        {/* Subtle dark vignette for depth */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.4) 100%)' 
          }} 
        />
      </div>

      {/* Content - The Command Layer */}
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* H1 - Main Title */}
          <h1 
            className="font-heading text-white mb-4"
            style={{ 
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              letterSpacing: '-0.05em',
              lineHeight: 1.05
            }}
            data-testid="hero-title"
          >
            Siyaphusha Consortium
          </h1>
          
          {/* H2 - Tagline */}
          <h2 
            className="text-white/90 mb-8"
            style={{ 
              fontWeight: 600,
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase'
            }}
            data-testid="hero-tagline"
          >
            Powering Progress, Responsibly.
          </h2>
          
          {/* Body Text */}
          <p 
            className="text-white/70 mb-12"
            style={{ 
              fontWeight: 400,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
              lineHeight: 1.7,
              maxWidth: '42ch'
            }}
            data-testid="hero-description"
          >
            Your trusted partner in mining, earthworks, and logistics — transforming resources into community wealth and industrial growth.
          </p>

          {/* CTAs - Sharp, Minimal */}
          <div className="flex flex-col sm:flex-row gap-4" data-testid="hero-cta-container">
            <a href="#services">
              <Button 
                className="bg-white text-[#0a0a0a] hover:bg-white font-semibold px-8 py-6 text-sm uppercase tracking-widest transition-transform duration-200 hover:-translate-y-0.5"
                style={{ 
                  fontWeight: 600,
                  borderRadius: 0
                }}
                data-testid="button-services"
              >
                Our Services
              </Button>
            </a>
            <a href="/projects">
              <Button 
                className="bg-transparent text-white hover:bg-transparent border border-white/80 font-semibold px-8 py-6 text-sm uppercase tracking-widest transition-transform duration-200 hover:-translate-y-0.5"
                style={{ 
                  fontWeight: 600,
                  borderRadius: 0,
                  backgroundColor: 'transparent'
                }}
                data-testid="button-projects"
              >
                View Projects
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle scan line effect for technical feel */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}
      />
    </section>
  );
}
