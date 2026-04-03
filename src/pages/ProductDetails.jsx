import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Eye, Share2, Heart, CheckCircle2, Package, Truck, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  
  const [selectedSize, setSelectedSize] = useState('A5');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const images = product.images || [
    product.image
  ];

  const handleAddToCart = () => {
    addToCart({ ...product, selectedSize }, quantity);
  };

  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center space-x-2 text-sm text-primary/40 font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-primary truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-2xl overflow-hidden bg-background-white shadow-premium relative group"
            >
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              {product.isNew && (
                <span className="absolute top-6 left-6 bg-accent text-white text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-widest shadow-soft">
                  New Arrival
                </span>
              )}
            </motion.div>

            <div className="grid grid-cols-4 gap-4">
              {images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-xl overflow-hidden bg-background-white border-2 p-1 transition-all ${
                    activeImage === img ? 'border-accent shadow-soft scale-105' : 'border-transparent hover:border-accent/40'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm font-bold text-primary/40 tracking-widest uppercase">(128 Reviews)</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-primary">₹{product.price.toFixed(2)}</span>
                {discount > 0 && (
                  <>
                    <span className="text-xl text-primary/30 line-through">₹{product.originalPrice.toFixed(2)}</span>
                    <span className="bg-accent/10 text-accent text-sm font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      SAVE {discount}%
                    </span>
                  </>
                )}
              </div>

              <p className="text-lg text-primary/70 mb-10 leading-relaxed whitespace-pre-wrap">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10 p-6 bg-background-white rounded-2xl shadow-soft">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-accent" />
                  <div>
                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">GSM</p>
                    <p className="text-sm font-bold">{product.specs.gsm}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-accent" />
                  <div>
                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Texture</p>
                    <p className="text-sm font-bold">{product.specs.texture}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-accent" />
                  <div>
                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Paper</p>
                    <p className="text-sm font-bold">{product.specs.paperType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-accent" />
                  <div>
                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Pages</p>
                    <p className="text-sm font-bold">{product.specs.pages}</p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">Select Size</h4>
                  <div className="flex flex-wrap gap-3">
                    {['A4', 'A5', 'A6'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-8 py-3 rounded-xl border-2 font-bold transition-all ${
                          selectedSize === size 
                            ? 'border-accent bg-accent/5 text-accent shadow-soft' 
                            : 'border-background hover:border-accent/40 text-primary/60'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center border-2 border-background rounded-xl p-1 bg-background-white shadow-soft">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-background rounded-lg transition-colors font-bold text-xl"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-background rounded-lg transition-colors font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all duration-300 shadow-premium uppercase tracking-widest text-sm flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart — ₹{(product.price * quantity).toFixed(2)}</span>
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-background">
                <div className="flex flex-col items-center text-center">
                  <Package size={24} className="text-primary/40 mb-3" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Eco Packaging</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Truck size={24} className="text-primary/40 mb-3" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Free Shipping</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck size={24} className="text-primary/40 mb-3" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Secure Payment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Reviews Section Placeholder */}
        <section className="mt-24 pt-24 border-t border-background">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Customer Reviews</h2>
              <div className="flex items-center space-x-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <span className="text-2xl font-bold">4.9 / 5.0</span>
                <span className="text-primary/40 font-bold uppercase tracking-widest text-xs">(128 Reviews)</span>
              </div>
            </div>
            <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-sm">
              Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((review) => (
              <div key={review} className="bg-background-white p-8 rounded-2xl shadow-soft">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {review === 1 ? 'JD' : 'AS'}
                    </div>
                    <div>
                      <p className="font-bold">John Doe</p>
                      <p className="text-xs text-primary/40 uppercase tracking-widest font-bold">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-primary/70 leading-relaxed italic">
                  "The quality of the paper is absolutely incredible. It handles watercolor washes beautifully without any warping. The linen cover feels so premium in hand."
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
