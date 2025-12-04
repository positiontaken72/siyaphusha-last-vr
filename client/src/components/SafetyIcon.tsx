export function SafetyIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Hard Hat */}
      <path d="M32 8C20 8 12 14 12 24C12 28 14 31 16 33H48C50 31 52 28 52 24C52 14 44 8 32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      
      {/* Hard Hat Brim */}
      <path d="M12 32C10 34 10 38 10 40C10 42 12 44 14 44H50C52 44 54 42 54 40C54 38 54 34 52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      
      {/* Head/Face outline */}
      <circle cx="32" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Shield background */}
      <path d="M32 42L42 48C42 56 38 60 32 62C26 60 22 56 22 48L32 42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
      
      {/* Shield checkmark */}
      <path d="M29 52L31 54L35 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
