import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown, Check } from 'lucide-react';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';
  const initialFilter = queryParams.get('filter') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSort, setSelectedSort] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  }).sort((a, b) => {
    if (selectedSort === 'Price: Low to High') return a.price - b.price;
    if (selectedSort === 'Price: High to Low') return b.price - a.price;
    return 0; // Default: Featured
  });

  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Page Header */}
      <header className="bg-background-white border-b border-background py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight"
          >
            {selectedCategory === 'All' ? 'Our Collection' : selectedCategory}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/60 max-w-xl mx-auto"
          >
            Discover premium art supplies selected for quality and professional results.
          </motion.p>
        </div>
      </header>

      {/* Toolbar */}
      <div className="sticky top-[72px] z-30 bg-background-white/90 backdrop-blur-md border-b border-background py-4 shadow-soft">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest px-4 py-2 border border-background rounded-xl hover:bg-background transition-all"
          >
            <Filter size={16} />
            <span>Filter</span>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {['All', ...categories.map(c => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat ? 'text-accent' : 'text-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest px-4 py-2 hover:text-accent transition-all">
              <span>Sort: {selectedSort}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full right-0 mt-1 w-48 bg-background-white rounded-xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
              {sortOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedSort(opt)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-background rounded-lg flex items-center justify-between"
                >
                  {opt}
                  {selectedSort === opt && <Check size={14} className="text-accent" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-32">
              <h3 className="text-2xl font-bold text-primary/30">No products found in this category.</h3>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-6 px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all"
              >
                View All Collection
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[60]" 
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background-white z-[70] shadow-premium p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-background rounded-full transition-all">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6 font-bold">By Category</h4>
                  <div className="space-y-4">
                    {['All', ...categories.map(c => c.name)].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full flex items-center justify-between text-lg font-medium hover:text-accent transition-all ${
                          selectedCategory === cat ? 'text-accent' : 'text-primary'
                        }`}
                      >
                        {cat}
                        {selectedCategory === cat && <Check size={20} />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsFilterOpen(false)}
                className="absolute bottom-8 left-8 right-8 py-4 bg-primary text-white font-bold rounded-xl tracking-widest uppercase text-sm"
              >
                Apply Filters
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
