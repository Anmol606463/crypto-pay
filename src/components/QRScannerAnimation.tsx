import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle2, QrCode, Globe, Lock, MoreVertical, X, ChevronRight } from 'lucide-react';
import { USDTLogo, USDCLogo } from './CryptoLogos';

const QRScannerAnimation = () => {
    const [step, setStep] = useState(0); 
    const [token, setToken] = useState('USDC');
    const [isPaused, setIsPaused] = useState(false);

    // 0: QR Showing
    // 1: Scanning (Laser line)
    // 2: Payment Confirmation UI (Performing -> Confirmed)
    // 3: Done (Reset)

    useEffect(() => {
        if (isPaused) return;

        const intervals = [2000, 2000, 3000, 2000];
        
        const timer = setTimeout(() => {
            if (step === 3) {
                setStep(0);
                setToken(prev => prev === 'USDT' ? 'USDC' : 'USDT');
            } else {
                setStep(step + 1);
            }
        }, intervals[step]);

        return () => clearTimeout(timer);
    }, [step, isPaused]);

    return (
        <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full max-w-[500px] h-[550px] mx-auto flex items-center justify-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-transparent blur-3xl rounded-full"></div>
            
            <motion.div 
                layout
                className="relative z-10 w-[360px] glass-panel bg-dark-lighter/40 backdrop-blur-xl border-white/10 shadow-3xl rounded-[32px] overflow-hidden"
            >
                {/* Merchant Header */}
                <div className="p-6 pb-4 flex justify-between items-center border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-600/20 flex items-center justify-center">
                            <Globe size={14} className="text-primary-400" />
                        </div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Checkout v2.0</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-green-500 font-mono">
                        <Lock size={10} /> Encrypted
                    </div>
                </div>

                <div className="p-8">
                    <AnimatePresence mode="wait">
                        {step <= 1 ? (
                            <motion.div 
                                key="qr-view"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="flex flex-col items-center"
                            >
                                <div className="text-center mb-8">
                                    <div className="text-4xl font-black text-white mb-1">$100.00</div>
                                    <div className="text-gray-500 text-xs font-medium uppercase tracking-widest">Pay with {token}</div>
                                </div>

                                <div className="relative p-6 bg-white rounded-3xl shadow-2xl mb-8">
                                    <QrCode size={160} className="text-dark" strokeWidth={1.5} />
                                    {step === 1 && (
                                        <motion.div 
                                            initial={{ top: '10%' }}
                                            animate={{ top: '85%' }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                                            className="absolute left-6 right-6 h-1 bg-primary-500 shadow-[0_0_15px_rgba(139,92,246,1)] z-20"
                                        />
                                    )}
                                </div>
                                
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping"></div>
                                    Waiting for scan...
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="confirmation-view"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white rounded-[28px] p-6 text-dark shadow-2xl w-full"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-[#1a1a1a]">Payment</h3>
                                    <div className="flex gap-2 items-center text-gray-400">
                                        <MoreVertical size={18} />
                                        <X size={20} />
                                    </div>
                                </div>

                                {/* Token Row */}
                                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 mb-8 bg-gray-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            {token === 'USDC' ? <USDCLogo className="w-10 h-10" /> : <USDTLogo className="w-10 h-10" />}
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#e91e63] rounded flex items-center justify-center text-[8px] text-white font-bold border border-white">OP</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{token} 100</div>
                                            <div className="text-xs text-gray-400">$USD 100</div>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-300" />
                                </div>

                                {/* Checklist */}
                                <div className="space-y-6 mb-10 pl-2">
                                    <motion.div 
                                        initial={{ opacity: 0.3 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center gap-4 relative"
                                    >
                                        <div className="z-10 bg-white">
                                            <CheckCircle2 size={18} className="text-gray-400" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-400">Payment performed</span>
                                        {/* Vertical line connector */}
                                        <div className="absolute left-[8px] top-6 w-[1px] h-6 bg-gray-100"></div>
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: step >= 2 ? 1 : 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="z-10 bg-white">
                                            <CheckCircle2 size={18} className="text-[#1a1a1a] fill-[#1a1a1a] text-white" />
                                        </div>
                                        <span className="text-sm font-bold text-[#1a1a1a]">Payment confirmed</span>
                                    </motion.div>
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-[#FF2079] hover:bg-[#e61d6e] text-white font-bold rounded-2xl transition-colors shadow-lg active:opacity-90"
                                >
                                    Done
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
            
            {/* Success Particles */}
            {step === 3 && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, x: '50%', y: '50%', opacity: 1 }}
                            animate={{ 
                                scale: [0, 1, 0],
                                x: `${50 + (Math.random() - 0.5) * 80}%`,
                                y: `${50 + (Math.random() - 0.5) * 80}%`,
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 1.5 }}
                            className="absolute w-2 h-2 rounded-full bg-[#df437d]/30"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default QRScannerAnimation;
