import React from "react";

const AudioPlayer = ({ src, autoPlay = false }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Featured Track</h3>
      <audio 
        controls 
        autoPlay={autoPlay}
        className="w-full"
        style={{ height: '40px' }}
      >
        <source src={src} type="audio/mpeg" />
        <source src={src} type="audio/wav" />
        <source src={src} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* About DJ Blue Graphic Header */}
      <div className="mb-8">
        <svg viewBox="0 0 800 200" className="w-full h-auto rounded-lg shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradient backgrounds */}
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#1e3a8a", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#60a5fa", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#f59e0b", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#fbbf24", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#fde047", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#7c3aed", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#a855f7", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#c084fc", stopOpacity:1}} />
            </linearGradient>
            
            {/* Glowing effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Shadow effect */}
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000060"/>
            </filter>
            
            {/* Grid pattern */}
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Background with dynamic shapes */}
          <rect width="800" height="200" fill="url(#blueGradient)" rx="15"/>
          
          {/* Decorative circles */}
          <circle cx="100" cy="50" r="30" fill="url(#goldGradient)" opacity="0.3" filter="url(#glow)"/>
          <circle cx="700" cy="150" r="25" fill="url(#purpleGradient)" opacity="0.4" filter="url(#glow)"/>
          <circle cx="650" cy="40" r="15" fill="#ffffff" opacity="0.6"/>
          
          {/* Sound wave graphics */}
          <g transform="translate(50, 120)">
            <rect x="0" y="0" width="4" height="40" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,0.5; 1,1.2; 1,0.7; 1,1" dur="1.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="8" y="10" width="4" height="20" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,0.8; 1,1.5; 1,0.6; 1,1.1" dur="1.2s" repeatCount="indefinite"/>
            </rect>
            <rect x="16" y="5" width="4" height="30" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,1.2; 1,0.4; 1,1.8; 1,0.9" dur="1.8s" repeatCount="indefinite"/>
            </rect>
            <rect x="24" y="12" width="4" height="16" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,0.6; 1,1.4; 1,0.8; 1,1.2" dur="1.4s" repeatCount="indefinite"/>
            </rect>
          </g>
          
          {/* Main text "About" */}
          <text x="180" y="80" fontFamily="Arial Black, Impact, sans-serif" fontSize="48" fontWeight="900" fill="#ffffff" filter="url(#shadow)">
            About
          </text>
          
          {/* "DJ" with special styling */}
          <text x="180" y="140" fontFamily="Arial Black, Impact, sans-serif" fontSize="56" fontWeight="900" fill="#ffffff" filter="url(#glow)">
            DJ
          </text>
          
          {/* "Blue" text */}
          <text x="280" y="140" fontFamily="Arial Black, Impact, sans-serif" fontSize="56" fontWeight="900" fill="#ffffff" filter="url(#shadow)">
            Blue
          </text>
          
          {/* Decorative vinyl record */}
          <g transform="translate(600, 100)">
            <circle cx="0" cy="0" r="45" fill="#1a1a1a" filter="url(#shadow)"/>
            <circle cx="0" cy="0" r="40" fill="#2a2a2a"/>
            <circle cx="0" cy="0" r="35" fill="#1a1a1a"/>
            <circle cx="0" cy="0" r="30" fill="#2a2a2a"/>
            <circle cx="0" cy="0" r="25" fill="#1a1a1a"/>
            <circle cx="0" cy="0" r="8" fill="url(#goldGradient)"/>
            <circle cx="0" cy="0" r="4" fill="#1a1a1a"/>
            <animateTransform attributeName="transform" type="rotate" values="0 600 100; 360 600 100" dur="8s" repeatCount="indefinite"/>
          </g>
          
          {/* Musical notes floating */}
          <g fill="url(#goldGradient)" opacity="0.7">
            <text x="500" y="60" fontFamily="Arial" fontSize="24">♪</text>
            <text x="520" y="45" fontFamily="Arial" fontSize="18">♫</text>
            <text x="480" y="75" fontFamily="Arial" fontSize="20">♪</text>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="3s" repeatCount="indefinite"/>
          </g>
          
          {/* Subtle grid pattern overlay */}
          <rect width="800" height="200" fill="url(#grid)" rx="15"/>
        </svg>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto">
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold text-gray-800">From vinyl crates to digital decks, DJ Blue's journey began in 2010 with a revolutionary vision:</span> to bridge the gap between timeless classics and cutting-edge beats. What started as late-night sessions perfecting the art of seamless transitions quickly evolved into something extraordinary—a signature sound that transforms dance floors into sonic time machines.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold text-gray-800">With over 200 electrifying performances spanning continents, DJ Blue has become synonymous with unforgettable nights and euphoric crowds.</span> From intimate underground venues to massive festival stages, each set is meticulously crafted to take listeners on an emotional rollercoaster, weaving together unexpected musical narratives that leave audiences craving more.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold text-gray-800">But DJ Blue isn't just about the music—it's about creating moments that transcend the ordinary.</span> Armed with an infectious passion for human connection and an unwavering commitment to artistic innovation, DJ Blue doesn't just play tracks; they curate experiences, craft memories, and ignite something magical in every room they enter. This is more than DJing—this is musical alchemy at its finest.
        </p>
        <p className="mb-6 text-purple-700 text-lg leading-relaxed font-medium">
          <span className="text-xl">🎵</span> The mission? To shatter expectations, blur genre boundaries, and prove that when the right beats meet the right moment, pure magic happens.
        </p>

        {/* Audio Player - Replace with actual audio URL */}
        <AudioPlayer 
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          autoPlay={false}
        />

        {/* YouTube Embed */}
        <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/sBJT1BpOcvg?rel=0&modestbranding=1"
            title="BrownBoiBlue Music Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;