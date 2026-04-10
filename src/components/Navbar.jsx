import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background-white/80 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Allies Art Supplies Logo" className="h-24 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">Home</Link>
          <div className="relative group">
            <Link to="/shop" className="text-sm font-medium hover:text-accent transition-colors flex items-center">
              Shop <ChevronDown size={14} className="ml-1" />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background-white rounded-xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
              <Link to="/shop?category=Set 1" className="block px-4 py-2 text-sm hover:bg-background rounded-lg">Set 1</Link>
              <Link to="/shop?category=Set 2" className="block px-4 py-2 text-sm hover:bg-background rounded-lg">Set 2</Link>
              <Link to="/shop?category=Set 3" className="block px-4 py-2 text-sm hover:bg-background rounded-lg">Set 3</Link>
              <Link to="/shop?category=Set 4" className="block px-4 py-2 text-sm hover:bg-background rounded-lg">Set 4</Link>
              <Link to="/shop?category=Set 5" className="block px-4 py-2 text-sm hover:bg-background rounded-lg">Set 5</Link>
            </div>
          </div>
          <Link to="/shop?filter=new" className="text-sm font-medium hover:text-accent transition-colors">New Arrivals</Link>
          <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="p-2 hover:bg-background rounded-full transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="p-2 hover:bg-background rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="p-2 hover:bg-background rounded-full transition-colors hidden md:block">
            <User size={20} />
          </button>
          <button 
            className="md:hidden p-2 hover:bg-background rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background-white border-t border-background mt-3 overflow-hidden">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-lg font-medium">Home</Link>
            <Link to="/shop" className="text-lg font-medium">Shop All</Link>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/shop?category=Set 1" className="text-sm text-primary/70">Set 1</Link>
              <Link to="/shop?category=Set 2" className="text-sm text-primary/70">Set 2</Link>
              <Link to="/shop?category=Set 3" className="text-sm text-primary/70">Set 3</Link>
              <Link to="/shop?category=Set 4" className="text-sm text-primary/70">Set 4</Link>
              <Link to="/shop?category=Set 5" className="text-sm text-primary/70">Set 5</Link>
            </div>
            <Link to="/shop?filter=new" className="text-lg font-medium">New Arrivals</Link>
            <Link to="/about" className="text-lg font-medium">About</Link>
            <Link to="/contact" className="text-lg font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
