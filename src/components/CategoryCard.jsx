import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-soft block"
    >
      {/* Background Image */}
      <motion.img 
        src={category.image} 
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/20 backdrop-brightness-90 group-hover:backdrop-brightness-75 transition-all duration-300 flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
            {category.name}
          </h3>
          <div className="inline-block h-1 w-12 bg-accent rounded-full transition-all duration-300 group-hover:w-24 mx-auto" />
        </motion.div>
      </div>
      
      {/* Label on Hover */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-6 py-2 bg-white text-primary text-xs font-bold rounded-full shadow-premium uppercase tracking-widest">
          Shop Now
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
