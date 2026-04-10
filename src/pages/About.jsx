import React from 'react';
import { Sparkles, Heart, Palette, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-background pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tighter leading-tight">
            Nurturing the soul through <span className="text-accent italic">conscious</span> art.
          </h1>
          <p className="text-xl text-primary/70 leading-relaxed max-w-2xl mx-auto">
            Basic Allies is more than just an art supply store. We are a sanctuary for those who seek solace in creativity and a bridge between feeling and healing.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background-white border-y border-background/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" 
                alt="Art supplies aesthetic" 
                className="relative rounded-2xl shadow-premium w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-accent uppercase tracking-widest text-xs font-bold">
                <Sparkles size={16} />
                <span>Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-primary tracking-tight">The Quiet Bridge</h2>
              <div className="space-y-6 text-primary/70 text-lg leading-relaxed font-medium">
                <p>
                  Started with a simple vision, Basic Allies was born out of the belief that art is a tactile reminder to slow down, breathe, and express. In a world that moves too fast, we provide the tools to help you reconnect with your inner self.
                </p>
                <p>
                  Our curated collections are specifically chosen for every medium and every artist, from the curious beginner to the seasoned professional. We believe that every stroke of a brush or mark of a pencil is a step towards mindfulness.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-background">
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-2">2012</h4>
                  <p className="text-sm text-primary/50 uppercase tracking-widest font-bold">Founded In</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-2">10k+</h4>
                  <p className="text-sm text-primary/50 uppercase tracking-widest font-bold">Artists Inspired</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">Our Philosophy</h2>
            <p className="text-primary/60 max-w-xl mx-auto">We build our foundation on principles that honor both the artist and the earth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="text-accent" size={32} />,
                title: "Mindful Expression",
                desc: "Every product is chosen to facilitate a state of flow and mental well-being."
              },
              {
                icon: <Palette className="text-accent" size={32} />,
                title: "Quality First",
                desc: "We partner with artisans who share our commitment to craftsmanship and durability."
              },
              {
                icon: <Leaf className="text-accent" size={32} />,
                title: "Consciously Crafted",
                desc: "Prioritizing materials that are kind to the environment and safe for the artist."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-background-white border border-background shadow-soft hover:shadow-premium transition-all duration-500 group">
                <div className="mb-6 p-4 bg-background inline-block rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-primary text-background rounded-[4rem] mx-4 md:mx-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's create something meaningful.</h2>
          <p className="text-lg text-background/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our community of artists and receive weekly inspiration, exclusive tutorials, and early access to our seasonal collections.
          </p>
          <button className="px-10 py-5 bg-accent text-primary font-bold rounded-2xl hover:bg-accent-light transition-all transform hover:-translate-y-1 shadow-premium uppercase tracking-widest text-sm">
            Visit Our Shop
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
