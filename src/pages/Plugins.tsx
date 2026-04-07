import { motion } from 'framer-motion';
import { Download, ExternalLink, Code2, PanelTop, Globe, ShoppingCart } from 'lucide-react';

export default function Plugins() {
  return (
    <div className="pt-24 pb-20">
      <div className="glow-bg top-0 right-1/4"></div>
      
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
        >
          <Code2 className="w-4 h-4" /> Plugins & Integrations
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
        >
          Connect faster with plugins and integrations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          Use ready-made tools to start accepting crypto payments without building everything from scratch.
        </motion.p>
      </section>

      {/* Integration Options Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="grid md:grid-cols-4 gap-4">
            {[
               { icon: Code2, title: "Direct API", desc: "For ultimate flexibility." },
               { icon: PanelTop, title: "Hosted checkout", desc: "No UI coding required." },
               { icon: Globe, title: "Webhook callback", desc: "Listen for real-time events." },
               { icon: ShoppingCart, title: "Merchant dashboard", desc: "Manage everything visually." }
            ].map((method, i) => (
               <div key={i} className="bg-dark border border-dark-border rounded-xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center text-primary-400 shrink-0">
                     <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                     <h4 className="text-sm font-bold text-white">{method.title}</h4>
                     <span className="text-xs text-gray-500">{method.desc}</span>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Plugin List Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category: CMS / eCommerce */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-dark-border pb-4">CMS / eCommerce</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "WooCommerce", version: "v1.2.4", diff: "Easy", platform: "Wordpress",
                desc: "Official WooCommerce payment gateway. Accepts USDT and USDC easily on checkout.",
                brandColor: "bg-[#7F54B3]/20 text-[#7F54B3]" 
              },
              { 
                name: "Shopify (Upcoming)", version: "Beta", diff: "Easy", platform: "Shopify",
                desc: "Private Shopify app integration. Generate custom checkout URLs to securely collect orders.",
                brandColor: "bg-[#95BF47]/20 text-[#95BF47]"
              },
              { 
                name: "WHMCS Billing", version: "v2.0.1", diff: "Medium", platform: "WHMCS",
                desc: "Ideal for hosting providers. Process automated crypto renewals and invoices natively.",
                brandColor: "bg-blue-500/20 text-blue-400"
              }
            ].map((plugin, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -5 }}
                 className="glass-panel p-6 flex flex-col h-full"
               >
                 <div className="flex justify-between items-start mb-4">
                   <div className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wide border border-transparent ${plugin.brandColor}`}>
                     {plugin.platform}
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-xs text-gray-500 font-medium">Difficulty:</span>
                     <span className={`text-xs px-2 py-0.5 rounded ${plugin.diff === 'Easy' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-500'}`}>
                       {plugin.diff}
                     </span>
                   </div>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-2">{plugin.name}</h3>
                 <p className="text-sm text-gray-400 mb-6 flex-grow">{plugin.desc}</p>
                 
                 <div className="flex justify-between items-center mt-auto pt-4 border-t border-dark-border">
                   <a href="#" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                     <ExternalLink className="w-4 h-4" /> Docs
                   </a>
                   <button className="flex items-center gap-2 bg-dark-lighter hover:bg-dark-border border border-dark-border px-4 py-2 rounded-lg text-sm text-white transition-colors">
                     <Download className="w-4 h-4" /> {plugin.version === 'Beta' ? 'Sign up' : 'Download'}
                   </button>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>

        {/* Category: Custom & Code */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-dark-border pb-4">Custom Integration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel flex items-center p-6 gap-6 hover:border-primary-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-dark border border-dark-border flex items-center justify-center shrink-0 shadow-inner">
                <Code2 className="w-8 h-8 text-primary-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white mb-1">API-first Integration</h3>
                <p className="text-sm text-gray-400 mb-4">Complete endpoints for order creation, checking status, and creating merchant callbacks.</p>
                <a href="#" className="text-primary-400 text-sm font-medium hover:text-primary-300 flex items-center gap-1">
                  View API Docs <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            
            <div className="glass-panel flex items-center p-6 gap-6 hover:border-primary-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-dark border border-dark-border flex items-center justify-center shrink-0 shadow-inner">
                <Globe className="w-8 h-8 text-primary-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white mb-1">Webhook Payloads</h3>
                <p className="text-sm text-gray-400 mb-4">Listen for `order.confirmed` payloads. We guarantee delivery with exponential retries.</p>
                <a href="#" className="text-primary-400 text-sm font-medium hover:text-primary-300 flex items-center gap-1">
                  Read Webhook Guide <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggest Plugin */}
      <section className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <div className="bg-gradient-to-r from-dark-lighter to-dark p-8 rounded-2xl border border-dark-border">
           <h3 className="text-xl font-bold text-white mb-2">Need something else?</h3>
           <p className="text-gray-400 mb-6">Our ecosystem is growing. Let us know what platform you want us to support next.</p>
           <button className="px-6 py-2 bg-dark-border hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
             Submit Feature Request
           </button>
        </div>
      </section>

    </div>
  );
}
