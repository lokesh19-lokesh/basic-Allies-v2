import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-white border-t border-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="Allies Art Supplies Logo" className="h-32 object-contain" />
            </Link>
            <p className="text-primary/70 max-w-xs leading-relaxed">
              Basic Allies becomes that quiet bridge between feeling and healing. a tactile reminder to slow down, breathe, and express. aligning seamlessly with The Art of Feeling’s .safe space for emotional release.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-bold text-primary/50">Follow @alliesart</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary/80">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Set 1" className="text-primary/70 hover:text-accent transition-colors">Set 1</Link></li>
              <li><Link to="/shop?category=Set 2" className="text-primary/70 hover:text-accent transition-colors">Set 2</Link></li>
              <li><Link to="/shop?category=Set 3" className="text-primary/70 hover:text-accent transition-colors">Set 3</Link></li>
              <li><Link to="/shop?category=Set 4" className="text-primary/70 hover:text-accent transition-colors">Set 4</Link></li>
              <li><Link to="/shop?category=Set 5" className="text-primary/70 hover:text-accent transition-colors">Set 5</Link></li>
            </ul>
          </div>

          {/* Policy */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary/80">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-primary/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/shipping" className="text-primary/70 hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="/privacy" className="text-primary/70 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-primary/70 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary/80">Subscribe</h4>
            <p className="text-primary/70 leading-relaxed">Join our mailing list for early access to new arrivals and exclusive offers.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-background border border-background/50 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-accent transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors shadow-soft">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background flex flex-col md:flex-row justify-between items-center text-sm text-primary/50">
          <p>© 2026 Allies Art Supplies. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">
            Designed by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">The Patterns Company</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
