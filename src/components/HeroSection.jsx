import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: "/assets/hero-1.png",
    title: "Premium Art Supplies",
    subtitle: "Elevate your creativity with our professional-grade tools.",
    cta: "Shop Now",
    link: "/shop"
  },
  {
    id: 2,
    image: "/assets/cat-watercolor.png",
    title: "Handmade Paper Sets",
    subtitle: "Organic textures for the discerning watercolorist.",
    cta: "Discover More",
    link: "/shop?category=Watercolor"
  },
  {
    id: 3,
    image: "/assets/cat-acrylic.png",
    title: "Minimalist Sketchbooks",
    subtitle: "Beautifully bound, impeccably crafted, ready for your ideas.",
    cta: "Explore Collection",
    link: "/shop?category=Sketchbooks"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-start">
            <div className="max-w-2xl fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
              <Link 
                to={slides[currentSlide].link}
                className="inline-flex items-center px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-premium uppercase tracking-wider text-sm"
              >
                {slides[currentSlide].cta}
              </Link>
            </div>
          </div>
        </div>

      {/* Controls */}
      <div className="absolute bottom-10 container mx-auto px-4 md:px-6 flex items-center justify-between z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide}
            className="p-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
