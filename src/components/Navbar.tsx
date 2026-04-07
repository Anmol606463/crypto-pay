import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-x-0 border-t-0 rounded-none bg-dark-lighter/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center border border-primary-500/30">
              <Wallet className="w-6 h-6 text-primary-400" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              CryptoPay
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Product</Link>
            <Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link to="/plugins" className="text-sm text-gray-400 hover:text-white transition-colors">Plugins</Link>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Docs</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Login</a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-x-0 border-b-0 rounded-none">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base text-gray-400 hover:text-white">Product</Link>
            <Link to="/pricing" className="block px-3 py-2 text-base text-gray-400 hover:text-white">Pricing</Link>
            <Link to="/plugins" className="block px-3 py-2 text-base text-gray-400 hover:text-white">Plugins</Link>
            <a href="#" className="block px-3 py-2 text-base text-gray-400 hover:text-white">Docs</a>
            <div className="pt-4 flex flex-col gap-2">
              <a href="#" className="block px-3 py-2 text-base text-gray-400 hover:text-white text-center border border-gray-700 rounded-lg">Login</a>
              <button className="bg-primary-600 text-white px-3 py-2 rounded-lg text-base font-medium">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
