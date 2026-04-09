import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import { products, categories } from '../data/mockData';
const Home = () => {
  const [activeTab, setActiveTab] = useState('Best Selling');

  const newArrivals = products.filter(p => p.isNew);

  const filteredProducts = products.filter(p => {
    if (activeTab === 'Best Selling') return p.isBestSelling;
    if (activeTab === 'New') return p.isNew;
    if (activeTab === 'Popular') return p.isPopular;
    return true;
  });

  return (
    <div className="bg-background">
      {/* Hero */}
      <HeroSection />

      {/* Categories */}
      <section className="py-20 bg-background-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">Shop by Category</h2>
              <p className="text-primary/60 text-lg">Curated collections for every medium and every artist.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <ProductGrid
        products={newArrivals}
        title="New Arrivals"
        subtitle="Freshly crafted supplies to spark your next masterpiece."
      />

      {/* Featured Products with Tabs */}
      {/* <section className="py-20 bg-background-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">Our Favorites</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Best Selling', 'New', 'Popular'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-accent text-white shadow-soft' 
                      : 'bg-background text-primary/50 hover:bg-background/80'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
                <div key={`${activeTab}-${product.id}`} className="overflow-hidden rounded-2xl">
                  <ProductGrid products={[product]} />
                </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/cta-bg.png"
            alt="CTA Background"
            className="w-full h-full object-cover grayscale opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Art is a journey, not a destination.</h2>
          <p className="text-lg text-primary/70 mb-10 leading-relaxed">
            Join the Allies community and get 15% off your first order. Plus, receive weekly inspiration, tutorials, and early access to new releases.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-4 rounded-xl bg-background-white border border-background focus:outline-none focus:border-accent w-full sm:w-80 shadow-soft"
            />
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all duration-300 shadow-premium uppercase tracking-widest text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
