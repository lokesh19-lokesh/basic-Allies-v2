import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/herosection.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col justify-center items-start max-w-7xl">
        <div className="max-w-2xl fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Unleash Your <br /> Creativity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-lg">
            India’s first sensory-infused mindful colouring kit designed for emotional regulation..
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-premium uppercase tracking-wider text-sm"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

