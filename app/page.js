'use client';

import { useState, useEffect, useRef } from 'react';

export default function KittenTheater() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);
  const audioRef = useRef(null);

  const kittens = [
    { id: 1, accessory: '🎩', name: 'Chapeau', startX: 15 },
    { id: 2, accessory: '👔', name: 'Cravate', startX: 30 },
    { id: 3, accessory: '🎀', name: 'Ruban', startX: 45 },
    { id: 4, accessory: '🎩', name: 'Chapeau 2', startX: 60 },
    { id: 5, accessory: '🎀', name: 'Ruban 2', startX: 75 }
  ];

  const startShow = () => {
    setShowCurtain(false);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio autoplay prevented'));
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowCurtain(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 50%, #4a2c5e 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>

      {/* Stage Lights */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '30%',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(255,223,100,0.3), transparent 70%)',
        animation: isPlaying ? 'pulse 2s ease-in-out infinite' : 'none',
        pointerEvents: 'none',
        zIndex: 5
      }} />

      {/* Spotlight Effects */}
      {isPlaying && kittens.map((kitten, idx) => (
        <div key={`spotlight-${kitten.id}`} style={{
          position: 'absolute',
          top: '20%',
          left: `${kitten.startX}%`,
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(255,255,200,0.4), transparent 70%)',
          borderRadius: '50%',
          animation: `spotlight 3s ease-in-out infinite ${idx * 0.3}s`,
          transform: 'translate(-50%, 0)',
          pointerEvents: 'none',
          zIndex: 1
        }} />
      ))}

      {/* Stage Floor */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: 'linear-gradient(180deg, transparent 0%, rgba(139,69,19,0.3) 40%, rgba(101,67,33,0.8) 100%)',
        borderTop: '3px solid rgba(218,165,32,0.6)',
        zIndex: 2
      }} />

      {/* Kittens */}
      {kittens.map((kitten, idx) => (
        <div key={kitten.id} style={{
          position: 'absolute',
          bottom: '25%',
          left: `${kitten.startX}%`,
          transform: 'translate(-50%, 0)',
          animation: isPlaying ? `dance 2s ease-in-out infinite ${idx * 0.2}s, sway 3s ease-in-out infinite ${idx * 0.3}s` : 'none',
          zIndex: 3,
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
        }}>
          {/* Kitten Body */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {/* Accessory */}
            <div style={{
              fontSize: '2rem',
              marginBottom: '-10px',
              animation: isPlaying ? `accessory 1.5s ease-in-out infinite ${idx * 0.25}s` : 'none',
              zIndex: 10
            }}>
              {kitten.accessory}
            </div>

            {/* Head */}
            <div style={{
              width: '60px',
              height: '60px',
              background: 'radial-gradient(circle at 30% 30%, #ffffff, #f5f5f5)',
              borderRadius: '50%',
              position: 'relative',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
            }}>
              {/* Ears */}
              <div style={{
                position: 'absolute',
                top: '-5px',
                left: '5px',
                width: '20px',
                height: '25px',
                background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
                borderRadius: '80% 20% 20% 20%',
                transform: 'rotate(-20deg)',
                boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.1)'
              }} />
              <div style={{
                position: 'absolute',
                top: '-5px',
                right: '5px',
                width: '20px',
                height: '25px',
                background: 'linear-gradient(225deg, #ffffff, #f0f0f0)',
                borderRadius: '20% 80% 20% 20%',
                transform: 'rotate(20deg)',
                boxShadow: 'inset -2px 2px 5px rgba(0,0,0,0.1)'
              }} />

              {/* Eyes */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '15px',
                width: '8px',
                height: '12px',
                background: '#2c3e50',
                borderRadius: '50%',
                animation: isPlaying ? 'blink 4s ease-in-out infinite' : 'none'
              }} />
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '15px',
                width: '8px',
                height: '12px',
                background: '#2c3e50',
                borderRadius: '50%',
                animation: isPlaying ? 'blink 4s ease-in-out infinite' : 'none'
              }} />

              {/* Nose */}
              <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '6px',
                height: '5px',
                background: '#ffb6c1',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }} />

              {/* Whiskers */}
              <div style={{
                position: 'absolute',
                top: '28px',
                left: '-15px',
                width: '15px',
                height: '1px',
                background: '#999',
                borderRadius: '1px'
              }} />
              <div style={{
                position: 'absolute',
                top: '32px',
                left: '-15px',
                width: '15px',
                height: '1px',
                background: '#999',
                borderRadius: '1px'
              }} />
              <div style={{
                position: 'absolute',
                top: '28px',
                right: '-15px',
                width: '15px',
                height: '1px',
                background: '#999',
                borderRadius: '1px'
              }} />
              <div style={{
                position: 'absolute',
                top: '32px',
                right: '-15px',
                width: '15px',
                height: '1px',
                background: '#999',
                borderRadius: '1px'
              }} />
            </div>

            {/* Body */}
            <div style={{
              width: '50px',
              height: '55px',
              background: 'radial-gradient(ellipse at 40% 30%, #ffffff, #f5f5f5)',
              borderRadius: '40% 40% 50% 50%',
              marginTop: '-5px',
              position: 'relative',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
            }}>
              {/* Front Paws */}
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: '8px',
                width: '12px',
                height: '15px',
                background: 'linear-gradient(180deg, #ffffff, #f0f0f0)',
                borderRadius: '40% 40% 50% 50%'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                right: '8px',
                width: '12px',
                height: '15px',
                background: 'linear-gradient(180deg, #ffffff, #f0f0f0)',
                borderRadius: '40% 40% 50% 50%'
              }} />
            </div>

            {/* Tail */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '-25px',
              width: '35px',
              height: '12px',
              background: 'linear-gradient(90deg, #f5f5f5, #ffffff)',
              borderRadius: '50% 20% 20% 50%',
              transform: 'rotate(-30deg)',
              animation: isPlaying ? `tail 1s ease-in-out infinite ${idx * 0.2}s` : 'none',
              boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
            }} />
          </div>
        </div>
      ))}

      {/* Curtain */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, #8b0000 0%, #a52a2a 20%, #dc143c 40%, #a52a2a 60%, #8b0000 100%)',
        display: 'flex',
        zIndex: showCurtain ? 10 : -1,
        opacity: showCurtain ? 1 : 0,
        transition: 'opacity 1s ease-out',
        pointerEvents: showCurtain ? 'auto' : 'none'
      }}>
        <div style={{
          flex: 1,
          background: 'repeating-linear-gradient(90deg, #8b0000 0px, #a52a2a 40px, #8b0000 80px)',
          borderRight: '3px solid #FFD700',
          boxShadow: '5px 0 20px rgba(0,0,0,0.5)',
          transform: showCurtain ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 1.5s ease-in-out'
        }} />
        <div style={{
          flex: 1,
          background: 'repeating-linear-gradient(90deg, #8b0000 0px, #a52a2a 40px, #8b0000 80px)',
          borderLeft: '3px solid #FFD700',
          boxShadow: '-5px 0 20px rgba(0,0,0,0.5)',
          transform: showCurtain ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 1.5s ease-in-out'
        }} />
      </div>

      {/* Start Button */}
      {!isPlaying && (
        <button onClick={startShow} style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px 40px',
          fontSize: '1.5rem',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          border: 'none',
          borderRadius: '50px',
          color: '#8b0000',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(255,215,0,0.5)',
          zIndex: 11,
          transition: 'all 0.3s ease',
          animation: 'buttonPulse 2s ease-in-out infinite'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
          e.target.style.boxShadow = '0 15px 40px rgba(255,215,0,0.7)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translate(-50%, -50%) scale(1)';
          e.target.style.boxShadow = '0 10px 30px rgba(255,215,0,0.5)';
        }}>
          🎭 Commencer le Spectacle 🎭
        </button>
      )}

      {/* Title */}
      {isPlaying && (
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#FFD700',
          textShadow: '0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,215,0,0.5)',
          zIndex: 6,
          animation: 'titleGlow 2s ease-in-out infinite',
          textAlign: 'center',
          padding: '0 20px'
        }}>
          🎵 Spectacle des Chatons Angora 🎵
        </div>
      )}

      {/* Music Notes */}
      {isPlaying && ['♪', '♫', '♩', '♬'].map((note, idx) => (
        <div key={`note-${idx}`} style={{
          position: 'absolute',
          fontSize: '2rem',
          color: '#FFD700',
          opacity: 0.7,
          animation: `float 3s ease-in-out infinite ${idx * 0.5}s`,
          left: `${20 + idx * 20}%`,
          top: '15%',
          zIndex: 4,
          textShadow: '0 0 10px rgba(255,215,0,0.8)'
        }}>
          {note}
        </div>
      ))}

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=" type="audio/wav" />
      </audio>

      <style jsx global>{`
        @keyframes dance {
          0%, 100% { transform: translate(-50%, 0) rotate(0deg); }
          25% { transform: translate(-50%, -20px) rotate(-5deg); }
          50% { transform: translate(-50%, 0) rotate(0deg); }
          75% { transform: translate(-50%, -15px) rotate(5deg); }
        }

        @keyframes sway {
          0%, 100% { transform: translate(-50%, 0) translateX(0); }
          50% { transform: translate(-50%, 0) translateX(10px); }
        }

        @keyframes tail {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(10deg); }
        }

        @keyframes accessory {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(15deg) scale(1.1); }
        }

        @keyframes blink {
          0%, 90%, 100% { height: 12px; }
          95% { height: 2px; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes spotlight {
          0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -10px) scale(1.2); opacity: 0.7; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.3; }
        }

        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,215,0,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,215,0,1), 0 0 40px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.5); }
        }

        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 10px 30px rgba(255,215,0,0.5); }
          50% { box-shadow: 0 10px 40px rgba(255,215,0,0.8); }
        }
      `}</style>
    </div>
  );
}
