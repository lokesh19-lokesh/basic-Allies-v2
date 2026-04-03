import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-background-white rounded-2xl shadow-soft overflow-hidden relative"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
            New
          </span>
        )}
        {discount > 0 && (
          <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
            -{discount}%
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        <button className="p-2 bg-white rounded-full shadow-premium hover:bg-accent hover:text-white transition-all duration-300">
          <Heart size={18} />
        </button>
        <Link to={`/product/${product.id}`} className="p-2 bg-white rounded-full shadow-premium hover:bg-accent hover:text-white transition-all duration-300">
          <Eye size={18} />
        </Link>
      </div>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden bg-background">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>

      {/* Content */}
      <div className="p-5 text-center">
        <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-primary group-hover:text-accent transition-colors truncate mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-lg font-bold text-primary">₹{product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-primary/30 line-through">₹{product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full py-3 bg-primary text-white text-xs font-bold rounded-xl hover:bg-accent transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={14} />
          <span>ADD TO CART</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
