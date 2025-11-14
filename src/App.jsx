import React, { useState } from "react";

// Import local images like this in React
import petal1Img from "./assets/IMG-20250709-WA0005.jpg"; // Example for your first petal

export default function App() {
  const PETAL_COUNT = 22;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const center = { x: vw / 2, y: vh / 2 };
  const radius = Math.min(vw, vh) * 0.22;
  const centerRadius = Math.min(vw, vh) * 0.16;
  const petalWidth = Math.min(vw, vh) * 0.045;
  const petalHeight = Math.min(vw, vh) * 0.20;

  const [plucked, setPlucked] = useState(Array(PETAL_COUNT).fill(false));
  const [animations, setAnimations] = useState(Array(PETAL_COUNT).fill(false));
  const [activePetal, setActivePetal] = useState(null);

  // Hardcoded content for 22 petals
  const petalContents = [
    { text: "Tanu, you make my world brighter every day 🌸💖", image: "src/assets/IMG-20250709-WA0005.jpg", audio: "/audio/song1.mp3" },
    { text: "Chotu, your smile is my favorite sight 😍✨", image: "src/assets/IMG-20250709-WA0010.jpg", audio: "/audio/song2.mp3" },
    { text: "Tani, just thinking of you makes me happy 😘💕", image: "src/assets/IMG-20250709-WA0016.jpg", audio: "/audio/song3.mp3" },
    { text: "Bubu, every moment with you feels magical 💫💛", image: "src/assets/IMG-20250709-WA0017.jpg", audio: "/audio/song4.mp3" },
    { text: "Sweetheart, you are my sunshine 🌞💖", image: "src/assets/IMG-20250711-WA0005.jpg", audio: "/audio/song4.mp3" },
    { text: "Tanu, your laugh is my favorite melody 🎶💗", image: "src/assets/IMG-20251113-WA0020.jpg", audio: "/audio/song4.mp3" },
    { text: "Chotu, I can’t stop smiling because of you 😊💓", image: "src/assets/IMG-20251113-WA0021.jpg", audio: "/audio/song4.mp3" },
    { text: "Tani, your hugs feel like home 🏡💞", image: "src/assets/IMG-20251113-WA0022.jpg", audio: "/audio/song4.mp3" },
    { text: "Bubu, you make even ordinary days special ✨❤️", image: "src/assets/IMG-20251113-WA0023.jpg", audio: "/audio/song4.mp3" },
    { text: "Sweetheart, I fall for you more every day 😍💖", image: "src/assets/IMG-20251113-WA0024.jpg", audio: "/audio/song4.mp3" },
    { text: "Tanu, your love fills my heart completely 💘💛", image: "src/assets/IMG-20251113-WA0025.jpg", audio: "/audio/song4.mp3" },
    { text: "Chotu, thinking of you makes everything better 🌸💗", image: "src/assets/IMG-20251113-WA0026.jpg", audio: "/audio/song4.mp3" },
    { text: "Tani, your eyes are my favorite stars ✨🌙", image: "src/assets/IMG-20251113-WA0027.jpg", audio: "/audio/song4.mp3" },
    { text: "Bubu, I love every little thing about you 😘💕", image: "src/assets/IMG-20251113-WA0028.jpg", audio: "/audio/song4.mp3" },
    { text: "Sweetheart, you are my happiest thought 🌞💛", image: "src/assets/IMG-20251113-WA0029.jpg", audio: "/audio/song4.mp3" },
    { text: "Tanu, just your presence calms me 💖🌸", image: "src/assets/IMG-20251113-WA0030.jpg", audio: "/audio/song4.mp3" },
    { text: "Chotu, you make life sweeter every day 🍯💗", image: "src/assets/IMG-20251113-WA0031.jpg", audio: "/audio/song4.mp3" },
    { text: "Tani, I treasure every second with you ⏳💓", image: "src/assets/IMG-20251113-WA0032.jpg", audio: "/audio/song4.mp3" },
    { text: "Bubu, being with you is my favorite adventure 🌈💛", image: "src/assets/IMG-20251113-WA0033.jpg" },
    { text: "Sweetheart, I will love you endlessly ❤️🌸", image: "src/assets/IMG-20251113-WA0034.jpg", audio: "/audio/song4.mp3" },
    { text: "You are my life and my love, now and forever 💞", image: "src/assets/WhatsApp Image 2025-11-13 at 18.00.05_ff759818.jpg", audio: "/audio/song4.mp3" },
    { text: "I love you so much, my dearest Tanu 💖", image: "src/assets/WhatsApp Image 2025-11-13 at 18.00.06_7be2d9f4.jpg" },
  ];

  const handlePluck = (index) => {
    const newAnimations = [...animations];
    newAnimations[index] = true;
    setAnimations(newAnimations);

    setTimeout(() => {
      const newPlucked = [...plucked];
      newPlucked[index] = true;
      setPlucked(newPlucked);
      setActivePetal(index);
    }, 500);
  };

  const closeModal = () => setActivePetal(null);

  const resetPetals = () => {
    setPlucked(Array(PETAL_COUNT).fill(false));
    setAnimations(Array(PETAL_COUNT).fill(false));
    setActivePetal(null);
  };

  return (
    <div className="w-screen h-screen bg-pink-100 flex items-center justify-center overflow-hidden relative">
      
      {/* Reset Button */}
      <button
        onClick={resetPetals}
        style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          backgroundColor: '#f9a8d4',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          zIndex: 100,
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}
      >
        Reset 🌸
      </button>

      

      <svg width="100vw" height="100vh" viewBox={`0 0 ${vw} ${vh}`} className="block">
        {Array.from({ length: PETAL_COUNT }).map((_, i) => {
          if (plucked[i]) return null;

          const angle = (i * 360) / PETAL_COUNT;
          const rad = (angle * Math.PI) / 180;
          const petalX = center.x + radius * Math.sin(rad);
          const petalY = center.y - radius * Math.cos(rad);

          const animClass = animations[i]
            ? "animate-petalPluck"
            : "transition-all duration-300 hover:scale-105 hover:drop-shadow-xl";

          return (
            <ellipse
              key={i}
              cx={petalX}
              cy={petalY}
              rx={petalWidth}
              ry={petalHeight}
              transform={`rotate(${angle} ${petalX} ${petalY})`}
              className={`fill-[url(#petalGradient)] drop-shadow-md cursor-pointer ${animClass}`}
              onClick={() => handlePluck(i)}
            />
          );
        })}

        <circle
          cx={center.x}
          cy={center.y}
          r={centerRadius}
          className="fill-[url(#centerGradient)] drop-shadow-md"
        />

        <defs>
          <linearGradient id="petalGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="70%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>

          <radialGradient id="centerGradient">
            <stop offset="0%" stopColor="#F9B487" />
            <stop offset="60%" stopColor="#e8a36f" />
            <stop offset="100%" stopColor="#d18e5b" />
          </radialGradient>
        </defs>
      </svg>

      {activePetal !== null && (
        <div
          className="absolute flex flex-col items-center justify-start"
          style={{
            left: `${center.x - 160}px`,
            top: `${center.y - 160}px`,
            width: '320px',
            height: '320px',
            backgroundColor: '#ffe3f1',
            borderRadius: '1rem',
            border: '2px solid #f87171',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            padding: '2.5rem 1rem 1rem 1rem',
            zIndex: 50,
            position: 'absolute',
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: 'transparent',
              border: 'none',
              fontSize: '1.3rem',
              cursor: 'pointer',
              color: '#555',
              zIndex: 10,
            }}
          >
            ✕
          </button>

          {/* Decorative hearts */}
          <span style={{ position: 'absolute', top: '15px', left: '15px', fontSize: '1.3rem' }}>❤️</span>
          <span style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '1.3rem' }}>💖</span>
          <span style={{ position: 'absolute', bottom: '15px', left: '15px', fontSize: '1.2rem' }}>💕</span>
          <span style={{ position: 'absolute', bottom: '15px', right: '15px', fontSize: '1.2rem' }}>💘</span>
          <span style={{ position: 'absolute', top: '50%', left: '10%', fontSize: '1.1rem' }}>💓</span>
          <span style={{ position: 'absolute', top: '50%', right: '10%', fontSize: '1.1rem' }}>💗</span>
          <span style={{ position: 'absolute', top: '30%', left: '70%', fontSize: '1.2rem' }}>❤️</span>
          <span style={{ position: 'absolute', bottom: '30%', right: '70%', fontSize: '1.2rem' }}>💖</span>

          {/* Content */}
          <h2 className="text-lg font-semibold text-center mb-2">
            Petal {activePetal + 1}
          </h2>

          <img
            src={petalContents[activePetal].image}
            alt={`Petal ${activePetal + 1}`}
            style={{
              width: '160px',
              height: '160px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              border: '2px solid #f87171',
              marginBottom: '0.5rem',
              marginTop: '0.5rem',
            }}
          />

          {/* Special case for last petal to open image in new tab */}
          {activePetal === PETAL_COUNT - 1 ? (
            <a
              href={petalContents[activePetal].image}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.85rem',
                textAlign: 'center',
                color: '#f87171',
                textDecoration: 'underline',
              }}
            >
              Open surprise image 💌
            </a>
          ) : (
            <p
              style={{
                fontSize: '0.85rem',
                textAlign: 'center',
                color: '#555',
                marginBottom: '0.5rem',
              }}
            >
              {petalContents[activePetal].text}
            </p>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes petalPluck {
            0% { transform: translate(0,0) rotate(0deg); opacity:1; }
            100% { transform: translate(0,-150px) rotate(45deg); opacity:0; }
          }
          .animate-petalPluck {
            animation: petalPluck 0.5s forwards;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s forwards;
          }
        `}
      </style>
    </div>
  );
}
