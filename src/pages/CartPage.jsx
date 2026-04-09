import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus, CreditCard, ShieldCheck, CheckCircle2, ShoppingCart } from 'lucide-react';
import CheckoutModal from '../components/CheckoutModal';
import { scents } from '../data/mockData';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, updateScent, cartTotal } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const shipping = cartTotal > 100 ? 0 : 15;
  const tax = cartTotal * 0.08;
  const grandTotal = cartTotal + shipping + tax;

  const isCartValid = cart.every(item => scents.includes(item.selectedSize));

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto bg-background-white p-12 rounded-3xl shadow-premium"
          >
            <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto mb-8 text-primary/20">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Your Cart is Empty</h2>
            <p className="text-primary/60 mb-10 leading-relaxed">
              Looks like you haven't added any premium art supplies yet. Start your creative journey now!
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all uppercase tracking-widest text-sm shadow-premium"
            >
              <span>Explore Shop</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 tracking-tight">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`flex flex-col sm:flex-row items-center bg-background-white p-6 rounded-2xl shadow-soft group border-2 transition-all ${
                    !scents.includes(item.selectedSize) 
                      ? 'border-red-500/50 bg-red-500/5' 
                      : 'border-transparent hover:border-accent/10'
                  }`}
                >
                  <Link to={`/product/${item.id}`} className="w-32 h-32 rounded-xl overflow-hidden mb-4 sm:mb-0 sm:mr-8 flex-shrink-0 bg-background">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  </Link>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                      <div>
                        <Link to={`/product/${item.id}`} className="text-lg font-bold hover:text-accent transition-colors block mb-1">
                          {item.name}
                        </Link>
                        <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                          !scents.includes(item.selectedSize) ? 'text-red-500' : 'text-primary/40'
                        }`}>
                          {item.category} • Scent: {scents.includes(item.selectedSize) ? item.selectedSize : 'Selection Required ⚠️'}
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-2">
                          {scents.map((scent) => (
                            <button
                              key={scent}
                              onClick={() => updateScent(item.id, item.selectedSize, scent)}
                              className={`px-3 py-1 text-[10px] rounded-full border mb-1 transition-all ${
                                item.selectedSize === scent
                                  ? 'border-accent bg-accent/5 text-accent font-bold'
                                  : 'border-background hover:border-accent/30 text-primary/40 hover:text-primary/70'
                              }`}
                            >
                              {scent}
                            </button>
                          ))}
                        </div>
                      </div>
                      <span className="text-xl font-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center border border-background rounded-xl p-1 bg-background shadow-inner">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-background-white rounded-lg transition-all font-bold"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-background-white rounded-lg transition-all font-bold"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-primary/30 hover:text-red-500 transition-colors flex items-center space-x-2 text-xs font-bold uppercase tracking-widest"
                      >
                        <Trash2 size={16} />
                        <span>Remove Item</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-background-white p-10 rounded-3xl shadow-premium sticky top-32 border border-accent/5"
            >
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Order Summary</h3>

              <div className="space-y-6 mb-8 pb-8 border-b border-background text-primary/70">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="uppercase tracking-widest">Subtotal</span>
                  <span className="font-bold text-primary">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="uppercase tracking-widest">Shipping</span>
                  <span className="font-bold text-primary">
                    {shipping === 0 ? <span className="text-accent uppercase tracking-widest">Free</span> : `₹${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-primary/40">
                  <span className="uppercase tracking-widest">Estimated Tax</span>
                  <span className="font-bold text-primary/60">₹{tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-2xl font-bold mb-10">
                <span className="tracking-tight">Grand Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                disabled={!isCartValid}
                className={`w-full py-5 font-bold rounded-2xl transition-all duration-300 shadow-premium uppercase tracking-widest text-sm flex items-center justify-center space-x-3 mb-6 ${
                  isCartValid 
                    ? 'bg-primary text-white hover:bg-accent' 
                    : 'bg-primary/10 text-primary/30 cursor-not-allowed border-2 border-dashed border-primary/20'
                }`}
              >
                <CreditCard size={20} />
                <span>{isCartValid ? 'Secure Checkout' : 'Select All Scents'}</span>
              </button>

              {/* <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary/50">
                  <ShieldCheck size={18} className="text-accent flex-shrink-0" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Secure 256-bit SSL encryption</p>
                </div>
                <div className="flex items-center space-x-3 text-primary/50">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">14-day premium return policy</p>
                </div>
              </div> */}

              {shipping > 0 && (
                <div className="mt-8 p-4 bg-background rounded-xl border border-background-white shadow-soft">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 leading-relaxed text-center">
                    Add <span className="text-accent">₹{(100 - cartTotal).toFixed(2)}</span> more to qualify for <span className="text-primary">FREE shipping</span>
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        grandTotal={grandTotal}
        shipping={shipping}
        tax={tax}
      />
    </div>
  );
};

export default CartPage;
