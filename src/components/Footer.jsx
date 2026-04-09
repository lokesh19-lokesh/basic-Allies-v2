import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Phone, MapPin, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-white border-t border-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="space-y-8 lg:col-span-1">
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <img src="/logo.png" alt="Allies Art Supplies Logo" className="h-24 object-contain" />
              </Link>
              <p className="text-primary/70 max-w-xs leading-relaxed text-sm">
                Basic Allies becomes that quiet bridge between feeling and healing—a tactile reminder to slow down, breathe, and express.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-background lg:border-none lg:pt-0">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40">Contact Us</h4>
              <div className="space-y-3">
                <a href="tel:7842922747" className="flex items-start space-x-3 text-primary/70 hover:text-accent transition-colors group">
                  <Phone size={16} className="mt-1 flex-shrink-0 text-accent/60 group-hover:text-accent" />
                  <span className="text-sm font-medium">78429 22747</span>
                </a>
                <div className="flex items-start space-x-3 text-primary/70 group">
                  <MapPin size={16} className="mt-1 flex-shrink-0 text-accent/60" />
                  <span className="text-sm leading-relaxed">
                    19-4-7/B/15 . Al jubail colony, Chandrayangutta, Hyderabad. 500005
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Group (Side-by-side on Mobile) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 sm:gap-12">
            {/* Shop */}
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary/80 border-b border-accent/10 pb-2">Shop</h4>
              <ul className="space-y-4">
                <li><Link to="/shop?category=Set 1" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Set 1</Link></li>
                <li><Link to="/shop?category=Set 2" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Set 2</Link></li>
                <li><Link to="/shop?category=Set 3" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Set 3</Link></li>
                <li><Link to="/shop?category=Set 4" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Set 4</Link></li>
                <li><Link to="/shop?category=Set 5" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Set 5</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary/80 border-b border-accent/10 pb-2">Support</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">About Us</Link></li>
                <li><Link to="/shipping" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Shipping Policy</Link></li>
                <li><Link to="/privacy" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Privacy Policy</Link></li>
                <li><Link to="/contact" className="text-sm text-primary/70 hover:text-accent transition-colors font-medium">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-8 lg:col-span-1">
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary/80">Subscribe</h4>
              <p className="text-sm text-primary/70 leading-relaxed">Join our mailing list for early access to new arrivals and exclusive offers.</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-background border border-background/50 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-accent transition-all text-sm placeholder:text-primary/30"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors shadow-soft">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-primary/40 mb-4">Follow Our Journey</h4>
              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/basicallies.com_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary/60 hover:bg-accent hover:text-white transition-all shadow-soft border border-background-white">
                  <Camera size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/30">
          <p>© 2026 Allies Art Supplies. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">The Patterns Company</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
