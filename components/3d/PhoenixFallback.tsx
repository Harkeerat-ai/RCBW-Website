/** Static SVG Phoenix fallback — renders on SSR and for reduced-motion users */
export default function PhoenixFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
      <svg
        viewBox="0 0 400 500"
        className="w-[280px] h-[350px] md:w-[400px] md:h-[500px] opacity-20 animate-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="phoenix-grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="50%" stopColor="#F4A236" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <filter id="phoenix-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Main body */}
        <path
          d="M200 60 C150 120, 120 180, 140 260 C150 300, 170 340, 200 400 C230 340, 250 300, 260 260 C280 180, 250 120, 200 60Z"
          fill="url(#phoenix-grad)"
          filter="url(#phoenix-glow)"
          opacity="0.8"
        />
        {/* Left wing */}
        <path
          d="M140 200 C100 170, 40 160, 20 200 C10 230, 30 260, 60 270 C80 275, 110 260, 140 240Z"
          fill="url(#phoenix-grad)"
          opacity="0.6"
        />
        {/* Right wing */}
        <path
          d="M260 200 C300 170, 360 160, 380 200 C390 230, 370 260, 340 270 C320 275, 290 260, 260 240Z"
          fill="url(#phoenix-grad)"
          opacity="0.6"
        />
        {/* Left wing feathers */}
        <path
          d="M120 220 C80 200, 30 210, 10 240 C0 260, 20 280, 50 285 C70 288, 100 270, 120 250Z"
          fill="url(#phoenix-grad)"
          opacity="0.4"
        />
        {/* Right wing feathers */}
        <path
          d="M280 220 C320 200, 370 210, 390 240 C400 260, 380 280, 350 285 C330 288, 300 270, 280 250Z"
          fill="url(#phoenix-grad)"
          opacity="0.4"
        />
        {/* Head crest */}
        <path
          d="M200 60 C190 30, 175 10, 170 5 C180 20, 185 40, 195 55Z"
          fill="#FF6B6B"
          opacity="0.7"
        />
        <path
          d="M200 60 C210 30, 225 10, 230 5 C220 20, 215 40, 205 55Z"
          fill="#FF6B6B"
          opacity="0.7"
        />
        <path
          d="M200 60 C200 25, 200 8, 200 0 C200 20, 200 40, 200 55Z"
          fill="#FBBF24"
          opacity="0.5"
        />
        {/* Tail flames */}
        <path
          d="M200 400 C185 430, 170 460, 165 490 C180 470, 190 440, 200 420Z"
          fill="#FBBF24"
          opacity="0.5"
        />
        <path
          d="M200 400 C215 430, 230 460, 235 490 C220 470, 210 440, 200 420Z"
          fill="#FBBF24"
          opacity="0.5"
        />
        <path
          d="M200 400 C195 440, 190 470, 200 500 C210 470, 205 440, 200 420Z"
          fill="#F4A236"
          opacity="0.6"
        />
        {/* Eye */}
        <circle cx="190" cy="100" r="4" fill="#FFF" opacity="0.9" />
        <circle cx="210" cy="100" r="4" fill="#FFF" opacity="0.9" />
      </svg>
    </div>
  );
}
