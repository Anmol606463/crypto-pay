import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center border border-primary-500/30">
                <Wallet className="w-5 h-5 text-primary-400" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                CryptoPay
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Accept crypto payments with speed and control. A merchant platform built for the modern internet.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
              <li><Link to="/plugins" className="text-gray-400 hover:text-white text-sm">Plugins</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Quick Start</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Support / Telegram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-dark-border pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2026 CryptoPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
