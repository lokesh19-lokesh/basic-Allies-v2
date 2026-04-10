import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, Camera } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tighter">Get in Touch</h1>
            <p className="text-lg text-primary/60 max-w-2xl mx-auto">
              Have a question about our supplies or want to share your latest masterpiece? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary tracking-tight">Connect with us</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <a href="tel:7842922747" className="flex items-center space-x-6 p-6 rounded-3xl bg-background-white border border-background shadow-soft hover:shadow-premium transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-1">Call Us</p>
                      <p className="text-xl font-bold text-primary">78429 22747</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:hello@basicallies.com" className="flex items-center space-x-6 p-6 rounded-3xl bg-background-white border border-background shadow-soft hover:shadow-premium transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-1">Email Us</p>
                      <p className="text-xl font-bold text-primary">basicallies@gmail.com</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-center space-x-6 p-6 rounded-3xl bg-background-white border border-background shadow-soft transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-1">Visit Us</p>
                      <p className="text-lg font-bold text-primary leading-tight">
                        19-4-7/B/15 . Al jubail colony, Chandrayangutta, Hyderabad. 500005
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-background">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6">Social Garden</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/basicallies.com_" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-primary text-background flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 shadow-premium">
                    <Camera size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background-white rounded-[2.5rem] p-8 md:p-12 shadow-premium border border-background border-b-4 border-b-accent">
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">Message Sent!</h3>
                  <p className="text-primary/60 mb-8 max-w-sm">
                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-8 py-3 bg-primary text-background font-bold rounded-xl hover:bg-accent transition-all uppercase tracking-widest text-xs"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-background/50 border border-background rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:bg-background transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-background/50 border border-background rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:bg-background transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Subject</label>
                    <select className="w-full bg-background/50 border border-background rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:bg-background transition-all outline-none appearance-none">
                      <option>Product Inquiry</option>
                      <option>Order Support</option>
                      <option>Wholesale</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Message</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Write your message here..."
                      className="w-full bg-background/50 border border-background rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:bg-background transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full py-5 bg-primary text-background font-bold rounded-2xl hover:bg-accent transition-all transform hover:-translate-y-1 shadow-premium uppercase tracking-widest text-sm flex items-center justify-center space-x-3 disabled:opacity-50 disabled:transform-none"
                  >
                    <span>{formState === 'sending' ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-24 w-full h-96 bg-background-white border-t border-background group cursor-crosshair overflow-hidden relative">
        <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop" className="w-full h-full object-cover" alt="Map pattern" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="p-8 bg-background-white/80 backdrop-blur-md rounded-3xl border border-background shadow-premium max-w-sm">
            <MapPin size={32} className="text-accent mx-auto mb-4" />
            <p className="font-bold text-primary mb-2">Visit our Physical Store</p>
            <p className="text-sm text-primary/60">We're located in the heart of Hyderabad, ready to spark your creativity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
