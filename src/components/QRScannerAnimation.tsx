import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle, Smartphone, QrCode, ShieldCheck, Zap } from 'lucide-react';

const QRScannerAnimation = () => {
    const [step, setStep] = useState(0); // 0: scanning, 1: confirming, 2: success

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative mx-auto max-w-5xl h-[500px] flex items-center justify-center rounded-2xl border border-dark-border bg-dark-lighter/30 shadow-2xl shadow-primary-500/5 overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-transparent opacity-50"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24 z-10 px-8">
                
                {/* QR Side */}
                <div className="relative">
                    <motion.div 
                        animate={{ 
                            scale: step === 2 ? 0.9 : 1,
                            opacity: step === 2 ? 0.5 : 1 
                        }}
                        className="p-6 bg-white rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] relative"
                    >
                        <QrCode size={180} className="text-dark" strokeWidth={1.5} />
                        
                        {/* Scanning Line */}
                        <AnimatePresence>
                            {step === 0 && (
                                <motion.div 
                                    initial={{ top: '10%' }}
                                    animate={{ top: '85%' }}
                                    exit={{ opacity: 0 }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity, 
                                        repeatType: "reverse",
                                        ease: "easeInOut" 
                                    }}
                                    className="absolute left-6 right-6 h-1 bg-primary-500 shadow-[0_0_15px_rgba(139,92,246,0.8)] z-20"
                                />
                            )}
                        </AnimatePresence>
                        
                        {/* Success Overlay on QR */}
                        <AnimatePresence>
                            {step === 2 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-2xl"
                                >
                                    <CheckCircle size={80} className="text-green-500" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    <div className="mt-6 text-center">
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                            Order Hash: 0x82f...a922
                        </span>
                    </div>
                </div>

                {/* Status / Phone Side */}
                <div className="w-full max-w-[300px]">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div 
                                key="scanning"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="glass-panel p-6 border-primary-500/20"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary-600/20 rounded-lg">
                                        <Smartphone className="text-primary-400" size={20} />
                                    </div>
                                    <span className="text-white font-semibold">User Scanning...</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-dark-border rounded w-full overflow-hidden">
                                        <motion.div 
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="h-full w-1/3 bg-primary-500"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400">Waiting for on-chain signature detection</p>
                                </div>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div 
                                key="confirming"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="glass-panel p-6 border-yellow-500/20"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-yellow-500/20 rounded-lg animate-pulse">
                                        <ShieldCheck className="text-yellow-400" size={20} />
                                    </div>
                                    <span className="text-white font-semibold">Confirming...</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-400">Block Confirmations</span>
                                        <span className="text-yellow-400">8 / 12</span>
                                    </div>
                                    <div className="h-2 bg-dark-border rounded w-full overflow-hidden">
                                        <div className="h-full bg-yellow-500 w-[66%]" />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="glass-panel p-6 border-green-500/30 bg-green-500/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-500/20 rounded-lg">
                                        <Zap className="text-green-400" size={20} />
                                    </div>
                                    <span className="text-white font-semibold">Payment Confirmed</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs font-mono">
                                        <span className="text-gray-500 uppercase">Received</span>
                                        <span className="text-green-400 font-bold">1,250.00 USDT</span>
                                    </div>
                                    <div className="pt-3 border-t border-dark-border">
                                        <p className="text-[10px] text-gray-500 italic">Callback triggered to endpoint</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Decorative Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>
        </div>
    );
};

export default QRScannerAnimation;
