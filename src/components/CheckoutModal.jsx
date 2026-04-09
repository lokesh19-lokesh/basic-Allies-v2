import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Mail, MapPin, Send, CreditCard } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, cart, grandTotal, shipping, tax, cartTotal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp Message
    const whatsappNumber = "917842922747";
    
    let message = `*New Order from Allies Art Supplies*\n`;
    message += `-----------------------------------\n`;
    message += `*Customer Details:*\n`;
    message += `- Name: ${formData.name}\n`;
    message += `- Phone: ${formData.phone}\n`;
    message += `- Email: ${formData.email}\n`;
    message += `- Address: ${formData.address}, ${formData.city} - ${formData.pincode}\n`;
    if (formData.notes) message += `- Notes: ${formData.notes}\n`;
    message += `\n*Order Items:*\n`;
    
    cart.forEach(item => {
      message += `- ${item.name} (${item.selectedSize || 'Standard'}) x ${item.quantity}: ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*Order Summary:*\n`;
    message += `- Subtotal: ₹${cartTotal.toFixed(2)}\n`;
    message += `- Shipping: ${shipping === 0 ? 'FREE' : '₹' + shipping.toFixed(2)}\n`;
    message += `- Tax: ₹${tax.toFixed(2)}\n`;
    message += `- *Grand Total: ₹${grandTotal.toFixed(2)}*\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/20 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-background rounded-3xl shadow-premium overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-background-white flex items-center justify-between bg-primary text-white">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Complete Your Order</h2>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">Shipping Details</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40 flex items-center space-x-2">
                    <User size={12} className="text-accent" />
                    <span>Full Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border-2 border-background-white bg-background-white focus:border-accent outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40 flex items-center space-x-2">
                    <Phone size={12} className="text-accent" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="99988 87776"
                    className="w-full px-4 py-3 rounded-xl border-2 border-background-white bg-background-white focus:border-accent outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40 flex items-center space-x-2">
                  <Mail size={12} className="text-accent" />
                  <span>Email Address</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-background-white bg-background-white focus:border-accent outline-none transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40 flex items-center space-x-2">
                  <MapPin size={12} className="text-accent" />
                  <span>Shipping Address</span>
                </label>
                <textarea
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street, Apartment, etc."
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border-2 border-background-white bg-background-white focus:border-accent outline-none transition-all font-medium resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40">City</label>
                  <input
                    required
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Hyderabad"
                    className="w-full px-4 py-3 rounded-xl border-2 border-background-white bg-background-white focus:border-accent outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Pincode</label>
                  <input
                    required
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="500001"
                    className="w-full px-4 py-3 rounded-xl border-2 border-background-white bg-background-white focus:border-accent outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-accent transition-all duration-300 shadow-premium uppercase tracking-widest text-sm flex items-center justify-center space-x-3"
              >
                <Send size={20} />
                <span>Complete via WhatsApp — ₹{grandTotal.toFixed(2)}</span>
              </button>
              
              <p className="text-[10px] text-center text-primary/30 font-bold uppercase tracking-widest mt-4">
                You will be redirected to WhatsApp to confirm your order
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
