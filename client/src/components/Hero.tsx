import heroVideo from "@assets/generated_videos/drone_ascending_over_coal_mine_site.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center" data-testid="hero-section">
      {/* Video Background with warm golden tone */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.85) contrast(1.05) saturate(1.2) sepia(0.25)',
          }}
          data-testid="hero-video"
        />
        {/* Subtle warm overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(180,140,60,0.15) 0%, rgba(120,80,20,0.1) 100%)' 
          }} 
        />
      </div>

      {/* Clean, Minimal Content */}
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-16">
        <div className="max-w-4xl">
          {/* Main Headline - The Star */}
          <h1 
            className="font-heading font-bold text-white leading-[1.1]"
            style={{ 
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)'
            }}
            data-testid="hero-headline"
          >
            POWERING PROGRESS,
            <br />
            RESPONSIBLY.
          </h1>
        </div>
      </div>
    </section>
  );
}
