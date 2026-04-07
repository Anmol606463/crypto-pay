import { Link } from 'react-router-dom';
import { Check, Info, Box, Zap, Crown, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Simple pricing that scales with your business
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Choose a plan based on your order volume. Start small and move to lower per-order costs as your business grows. No hidden fees.
        </motion.p>
      </section>

      {/* Plan Cards */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Starter', icon: Box, price: '$49', volume: '1,000 orders/mo', cost: '$0.049 / order',
              fit: 'Best for new merchants testing live traffic',
              features: ['Basic dashboard', 'Standard callbacks', 'Community support'],
              popular: false
            },
            {
              name: 'Growth', icon: Zap, price: '$149', volume: '5,000 orders/mo', cost: '$0.030 / order',
              fit: 'For growing stores with steady order flow',
              features: ['Advanced analytics', 'Faster callbacks', 'Email support'],
              popular: false
            },
            {
              name: 'Business', icon: Crown, price: '$399', volume: '20,000 orders/mo', cost: '$0.020 / order',
              fit: 'Best value for active merchants',
              features: ['Multi-wallet support', 'Priority callbacks', '24/7 Priority support'],
              popular: true
            },
            {
              name: 'Enterprise', icon: Building, price: 'Custom', volume: 'Unlimited orders', cost: 'Lowest unit cost',
              fit: 'For large-scale operations & custom growth',
              features: ['Custom infrastructure', 'Dedicated Account Manager', 'SLA guarantees'],
              popular: false
            }
          ].map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`glass-panel relative flex flex-col ${plan.popular ? 'border-primary-500 shadow-[0_0_30px_rgba(139,92,246,0.15)] ring-1 ring-primary-500/50 scale-105 z-10' : 'border-dark-border'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              {plan.name === 'Enterprise' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-lighter border border-gray-600 text-gray-300 px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  Best Unit Cost
                </div>
              )}
              <div className="p-8 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary-400' : 'text-gray-400'}`} />
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400">/mo</span>}
                </div>
                <p className="text-sm font-medium text-primary-400 mb-1">{plan.volume}</p>
                <p className="text-sm text-gray-400 mb-6 pb-6 border-b border-dark-border">
                  {plan.cost}
                </p>
                <div className="text-sm text-gray-300 font-medium mb-6 min-h-[40px]">
                  {plan.fit}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 shrink-0" />
                      <span className="text-sm text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/25' : 'bg-dark-lighter hover:bg-dark-border text-white border border-dark-border'}`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why This Pricing */}
      <section className="bg-dark-lighter py-20 border-y border-dark-border mb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why we price this way</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center px-4">
               <div className="w-12 h-12 bg-dark rounded-full border border-dark-border flex items-center justify-center mx-auto mb-4 text-primary-400">
                  <span className="font-bold text-xl">1</span>
               </div>
               <h3 className="text-lg font-semibold mb-2">No infrastructure setup cost</h3>
               <p className="text-gray-400 text-sm">We handle all nodes, indexing, and server maintenance so you don't pay DevOps salaries.</p>
            </div>
            <div className="text-center px-4">
               <div className="w-12 h-12 bg-dark rounded-full border border-dark-border flex items-center justify-center mx-auto mb-4 text-primary-400">
                  <span className="font-bold text-xl">2</span>
               </div>
               <h3 className="text-lg font-semibold mb-2">Automatic order monitoring included</h3>
               <p className="text-gray-400 text-sm">You simply get webhook deliveries when customers pay. The compute to watch the chain is on us.</p>
            </div>
            <div className="text-center px-4">
               <div className="w-12 h-12 bg-dark rounded-full border border-dark-border flex items-center justify-center mx-auto mb-4 text-primary-400">
                  <span className="font-bold text-xl">3</span>
               </div>
               <h3 className="text-lg font-semibold mb-2">Lower unit cost at higher volume</h3>
               <p className="text-gray-400 text-sm">As your success scales, your profit margins per Crypto transaction actually expand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
        <div className="space-y-4">
          {[
            "What happens after I use all my order quota?",
            "Can I upgrade anytime?",
            "Do unused orders roll over?",
            "Is callback support included?",
            "Are plugins included in all plans?",
            "Do you support custom enterprise plans?"
          ].map((faq, i) => (
            <details key={i} className="glass-panel group p-6 rounded-lg cursor-pointer">
              <summary className="flex justify-between items-center font-medium text-white list-none">
                {faq}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                Additional usage is billed at a flat rate depending on your current tier. Upgrades are prorated entirely so you only pay the exact difference. Unused orders do not roll over to keep billing transparent.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-colors">
            Start with Starter
          </button>
          <button className="w-full sm:w-auto px-8 py-3 glass-panel hover:bg-white/5 text-white rounded-lg font-semibold transition-colors">
            Contact us for Enterprise
          </button>
        </div>
      </section>
    </div>
  );
}
