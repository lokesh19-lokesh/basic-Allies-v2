import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const ProductGrid = ({ products, title, subtitle }) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-2xl mx-auto">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-[1.1]"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary/60 leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
