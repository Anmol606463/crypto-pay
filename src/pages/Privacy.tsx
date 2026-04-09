import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';

const Privacy = () => {
    const sections = [
        { id: "intro", title: "1. Introduction", icon: FileText },
        { id: "collection", title: "2. Data We Collect", icon: Eye },
        { id: "usage", title: "3. How We Use Data", icon: Shield },
        { id: "sharing", title: "4. Data Sharing", icon: Lock },
        { id: "rights", title: "5. User Rights", icon: Shield },
        { id: "security", title: "6. Security", icon: Lock },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-12">
                    
                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block">
                        <div className="sticky top-32 space-y-2">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 px-4">Navigation</h3>
                            {sections.map((sec) => (
                                <a 
                                    key={sec.id}
                                    href={`#${sec.id}`}
                                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all group"
                                >
                                    <span className="text-sm font-medium">{sec.title}</span>
                                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-panel p-8 md:p-12 border-white/5"
                        >
                            <div className="mb-12">
                                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <span>Effective Date: April 9, 2026</span>
                                    <span className="hidden md:inline">•</span>
                                    <span>Last Updated: April 9, 2026</span>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none space-y-12">
                                
                                <section id="intro">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center border border-primary-500/20">
                                            <FileText className="text-primary-400" size={20} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-0">Introduction</h2>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        This Privacy Policy explains how CryptoPay ("we," "us," or "our") collects, uses, and protects your information when you use our cryptocurrency payment processing platform. We are committed to maintaining the highest standards of data privacy and transparency.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        Legal Entity: CryptoPay Solutions Ltd.<br />
                                        Contact: privacy@cryptopay.network
                                    </p>
                                </section>

                                <section id="collection">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/20">
                                            <Eye className="text-blue-400" size={20} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-0">Data We Collect</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                            <h4 className="text-white font-bold mb-2">Account Data</h4>
                                            <p className="text-sm text-gray-400">Email address, business name, and contact details provided during registration.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                            <h4 className="text-white font-bold mb-2">Transaction Data</h4>
                                            <p className="text-sm text-gray-400">Wallet addresses, transaction hashes, and order amounts processed through our API.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                            <h4 className="text-white font-bold mb-2">Device Data</h4>
                                            <p className="text-sm text-gray-400">IP address, browser type, and operating system for security and fraud prevention.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                            <h4 className="text-white font-bold mb-2">Communication Data</h4>
                                            <p className="text-sm text-gray-400">Logs of support tickets and communication via Telegram or Email.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="usage">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center border border-green-500/20">
                                            <Shield className="text-green-400" size={20} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-0">How We Use Data</h2>
                                    </div>
                                    <ul className="space-y-4 text-gray-400">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2"></span>
                                            <span>To provide and maintain the payment processing service.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2"></span>
                                            <span>To prevent fraudulent transactions and maintain platform security.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2"></span>
                                            <span>To comply with legal obligations and AML/KYC regulations where applicable.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2"></span>
                                            <span>To analyze platform performance and improve the user experience.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section id="sharing">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center border border-purple-500/20">
                                            <Lock className="text-purple-400" size={20} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-0">Data Sharing</h2>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        We do not sell your personal data. We only share information with critical infrastructure providers (e.g., cloud hosting, database services) and only to the extent necessary to perform the service. Data may also be disclosed if required by law or to protect our legal rights.
                                    </p>
                                </section>

                                <section id="rights">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-orange-600/20 flex items-center justify-center border border-orange-500/20">
                                            <Shield className="text-orange-400" size={20} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-0">User Rights</h2>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        Depending on your location, you may have the following rights regarding your personal data:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {["Right to Access", "Right to Rectification", "Right to Deletion", "Right to Objection", "Data Portability", "Withdrawal of Consent"].map((right) => (
                                            <div key={right} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                                {right}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest font-bold">
                                        Response time: We respond to all requests within 30 days.
                                    </p>
                                </section>

                                <section id="security">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center border border-red-500/20">
                                            <Lock className="text-red-400" size={20} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-0">Security</h2>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        We implement industry-standard security measures, including end-to-end encryption for API calls, encrypted database storage, and strict access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                    </p>
                                </section>

                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Privacy;
