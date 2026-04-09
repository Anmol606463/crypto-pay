import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import QRScannerAnimation from '../components/QRScannerAnimation';
import { 
  Zap, Activity, RefreshCw, LayoutDashboard, Puzzle, Server, 
  CheckCircle, ShieldCheck, Mail, Database, ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20 overflow-hidden">
      <div className="glow-bg top-0 left-1/4"></div>
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left panel */}
            <div className="text-left">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600/10 border border-primary-500/20 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                    <span className="text-[10px] text-primary-400 font-bold uppercase tracking-widest">New: USDC Settlement v2.0</span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
                >
                    Accept crypto <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                        with zero friction
                    </span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-xl text-xl text-gray-400 mb-10 leading-relaxed"
                >
                    Generate merchant QR codes, monitor on-chain transfers in real-time, and get instant callbacks. Built for USDT/USDC order collection with sub-second detection.
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all shadow-xl shadow-primary-600/20 active:scale-95">
                        Start Accepting Crypto
                    </button>
                    <Link to="/plugins" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel hover:bg-white/5 text-white font-semibold flex items-center justify-center gap-2 transition-all">
                        Developer API <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-wrap items-center gap-8 grayscale opacity-50 contrast-125"
                >
                    <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6115a/128/color/usdt.png" className="h-6" alt="USDT" />
                        <span className="text-sm font-bold text-gray-400">USDT</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6115a/128/color/usdc.png" className="h-6" alt="USDC" />
                        <span className="text-sm font-bold text-gray-400">USDC</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6115a/128/color/trx.png" className="h-6" alt="TRON" />
                        <span className="text-sm font-bold text-gray-400">TRON</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6115a/128/color/eth.png" className="h-6" alt="ETH" />
                        <span className="text-sm font-bold text-gray-400">ETH</span>
                    </div>
                </motion.div>
            </div>

            {/* Right panel (animation area) */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
            >
                <QRScannerAnimation />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-purple-600/20 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Value Propositions</h2>
          <p className="text-gray-400">Everything you need to run your crypto checkout smoothly.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Fast order creation", desc: "Millisecond-level order creation for high-frequency payment scenarios." },
            { icon: Activity, title: "Automatic on-chain monitoring", desc: "Automatically monitor transfers and confirmation counts." },
            { icon: RefreshCw, title: "Reliable callbacks", desc: "Automatically push order status updates to your business system." },
            { icon: LayoutDashboard, title: "Merchant dashboard", desc: "Unified management for orders, statuses, archives, and exports." },
            { icon: Puzzle, title: "Plugin & integration ready", desc: "Plugins and developer docs to reduce integration effort." },
            { icon: Server, title: "Built for scale", desc: "Supports multi-address, multi-network, sharded listeners, and high concurrency." }
          ].map((val, i) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={i} 
              className="glass-panel p-8 hover:bg-dark-lighter transition-all"
            >
              <div className="w-12 h-12 bg-primary-600/20 text-primary-400 rounded-lg flex items-center justify-center mb-6">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{val.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-dark-lighter py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">A simple, transparent flow from checkout to fulfillment.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center relative">
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0 z-0"></div>
            {[
              { num: "1", title: "Create an order" },
              { num: "2", title: "Customer pays on-chain" },
              { num: "3", title: "We detect and confirm" },
              { num: "4", title: "Your system gets notified" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-dark border-2 border-primary-500 flex items-center justify-center text-primary-400 text-2xl font-bold mb-6 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Who is it for?</h2>
          <p className="text-gray-400">Perfect for any digital or high-volume business model.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["Digital goods", "Subscription services", "OTC / payment collection", "Cross-border merchants", "SaaS businesses", "E-commerce merchants"].map((useCase, i) => (
            <div key={i} className="glass-panel px-6 py-3 rounded-full text-gray-300 font-medium">
              {useCase}
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className="bg-dark-lighter/30 border-y border-dark-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mechanism-based trust</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Reliable payment infrastructure designed to never drop an order. We built our systems treating every transaction as mission critical.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Activity, text: "Automatic order monitoring" },
                  { icon: ShieldCheck, text: "Confirmation-based settlement flow" },
                  { icon: RefreshCw, text: "Callback retry support" },
                  { icon: Database, text: "Exportable order records & clear audit structure" },
                  { icon: Mail, text: "Merchant notifications via Email / Telegram" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="w-5 h-5 text-primary-500" /> {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full"></div>
              <div className="glass-panel p-8 relative">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-dark-border">
                  <div>
                    <div className="text-sm text-gray-400">Order #88392</div>
                    <div className="text-xl font-bold text-white">500.00 USDT</div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-medium border border-green-500/30">
                    Confirmed
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Network</span>
                    <span className="text-gray-200">TRON (TRC20)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Blocks</span>
                    <span className="text-gray-200">19 / 19</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Callback</span>
                    <span className="text-green-400 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Volume-based pricing</h2>
        <p className="text-gray-400 mb-12">Lower cost per order as you grow. Start small and scale globally.</p>
        
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          {["Starter", "Growth", "Business", "Enterprise"].map((plan, i) => (
            <div key={i} className="glass-panel p-6 text-center border-dark-border relative overflow-hidden">
               {plan === 'Business' && <div className="absolute top-0 inset-x-0 h-1 bg-primary-500"></div>}
               <h3 className="text-lg font-semibold text-white mb-2">{plan}</h3>
            </div>
          ))}
        </div>
        
        <Link to="/pricing" className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300">
          See Full Pricing <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

      {/* FAQ */}
      <section className="bg-dark-lighter py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              "Which networks do you support?",
              "How do payment confirmations work?",
              "Do you provide API callbacks?",
              "Is there a plugin or hosted integration?",
              "Can I export order history?",
              "How fast can I get started?"
            ].map((q, i) => (
              <div key={i} className="glass-panel p-6 flex justify-between items-center cursor-pointer hover:bg-dark-border/30 transition-colors">
                <span className="text-white font-medium">{q}</span>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-4 py-24 text-center relative">
        <div className="absolute inset-0 bg-primary-600/10 blur-3xl opacity-50 rounded-full"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold mb-6">Launch crypto checkout today</h2>
          <p className="text-xl text-gray-400 mb-10">Ready to accept USDT/USDC in minutes? Dive right into our docs or try out the plugins.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all">
              API Docs
            </button>
            <Link to="/plugins" className="px-8 py-3 rounded-lg glass-panel hover:bg-white/5 text-white font-semibold transition-all">
              Plugin Integration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
