import React, { useRef, useState } from 'react';
import heroVideo from '../assets/hero-video.mp4';
import refreshIcon from '../assets/refresh.png';


function Hero() {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [ended, setEnded] = useState(false);
  const [unblur, setUnblur] = useState(false);

  const handlePlay = () => {
    setShowIntro(false);
    setUnblur(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play();
        setStarted(true);
        setEnded(false);
      }
    }, 1000);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setEnded(false);
    }
  };

  const scrollToCita = () => {
    const citaSection = document.getElementById('cita');
    if (citaSection) {
      citaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo con desenfoque transicional */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-125 transition-all duration-1000 ${
          unblur ? 'blur-0' : 'blur-[1.5px]'
        }`}
        src={heroVideo}
        type="video/mp4"
        onEnded={() => setEnded(true)}
        controls={false}
      />

      {/* Capa oscura encima del video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

      {/* Mensaje inicial */}
      {!started && (
        <div
          className={`relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 transition-all duration-1000 ${
            showIntro ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-cursive mb-6 drop-shadow-lg">
            Belleza que Inspira Confianza
          </h1>
          <button
            onClick={handlePlay}
            className="bg-white text-black font-display px-6 py-3 text-lg rounded-full shadow-md hover:bg-black hover:text-white transition"
          >
            Ver Transformaciones
          </button>
        </div>
      )}

      {/* Controles después del video */}
      {ended && (
        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center gap-6">
            <button
            onClick={handleReplay}
            aria-label="Reproducir otra vez"
            className="hover:scale-110 transition-transform"
            >
            <img src={refreshIcon} alt="Reiniciar video" className="w-12 h-12" />
            </button>

            <button
            onClick={scrollToCita}
            className="bg-[#d8b26e] text-black font-display px-6 py-3 text-lg rounded-full shadow-md hover:bg-[#f1e0c2] hover:text-black transition"
            >
            Pedir Cita
            </button>
        </div>
        )}
    </section>
  );
}

export default Hero;
