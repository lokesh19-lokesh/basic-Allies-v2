import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Something went wrong.</h1>
          <p className="text-primary/60 mb-8 max-w-md">{this.state.error?.message || "An unexpected error occurred."}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all"
          >
            Reload Shop
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;





