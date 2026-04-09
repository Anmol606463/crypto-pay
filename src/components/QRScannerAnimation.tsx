import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle, Smartphone, QrCode, Globe, Lock } from 'lucide-react';

const QRScannerAnimation = () => {
    const [step, setStep] = useState(0); 
    const [token, setToken] = useState('USDT');
    const [isPaused, setIsPaused] = useState(false);

    // Step logic matching the storyboard
    // 0: Initial card (0-1s)
    // 1: QR reveal (1-2.5s)
    // 2: Phone slide-in (2.5-4s)
    // 3: Scanning/Confirming (4-5s)
    // 4: Success/Hash (5-6.2s)
    // 5: Celebration/Checkmark (6.2-8s)

    useEffect(() => {
        if (isPaused) return;

        const intervals = [1000, 1500, 1500, 1000, 1200, 1800];
        
        const timer = setTimeout(() => {
            if (step === 5) {
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
            className="relative w-full max-w-[500px] h-[500px] mx-auto flex items-center justify-center overflow-hidden cursor-help"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent rounded-3xl border border-white/5"></div>
            
            {/* 1. Merchant Payment Card */}
            <motion.div 
                animate={{ 
                    scale: step >= 0 ? 1 : 0.8,
                    opacity: step >= 0 ? 1 : 0,
                    y: step === 5 ? -10 : 0
                }}
                className="relative z-10 w-[320px] glass-panel p-6 shadow-2xl border-white/10"
            >
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-600/20 flex items-center justify-center">
                            <Globe size={14} className="text-primary-400" />
                        </div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Checkout</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-green-500 font-mono">
                        <Lock size={10} /> Secure
                    </div>
                </div>

                <div className="text-center mb-8">
                    <motion.div 
                        initial={{ scale: 1 }}
                        animate={{ scale: step === 5 ? [1, 1.05, 1] : 1 }}
                        className="text-4xl font-black text-white mb-1"
                    >
                        $128.00
                    </motion.div>
                    <div className="flex items-center justify-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${token === 'USDT' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {token}
                        </span>
                        <span className="text-gray-500 text-[10px]">via Multi-Chain</span>
                    </div>
                </div>

                {/* 2. QR Code Area */}
                <div className="relative flex justify-center mb-6">
                    <AnimatePresence>
                        {step >= 1 && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="bg-white p-4 rounded-xl shadow-xl relative"
                            >
                                <QrCode size={120} className="text-dark" strokeWidth={1.5} />
                                {step === 3 && (
                                    <motion.div 
                                        initial={{ top: '10%' }}
                                        animate={{ top: '85%' }}
                                        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                                        className="absolute left-4 right-4 h-0.5 bg-primary-500 shadow-[0_0_10px_rgba(139,92,246,1)] z-20"
                                    />
                                )}
                                {step >= 4 && (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-xl"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', damping: 10 }}
                                        >
                                            <CheckCircle size={60} className="text-green-500" />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 3. Status Tracker */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter">
                        <span className={step >= 0 ? 'text-primary-400' : 'text-gray-600'}>Waiting</span>
                        <span className={step >= 3 ? 'text-primary-400' : 'text-gray-600'}>Confirming</span>
                        <span className={step >= 4 ? 'text-green-400' : 'text-gray-600'}>Success</span>
                    </div>
                    <div className="h-1 w-full bg-dark-lighter rounded-full overflow-hidden flex gap-1">
                        <div className={`h-full flex-1 transition-all duration-500 ${step >= 0 ? 'bg-primary-500' : 'bg-gray-800'}`}></div>
                        <div className={`h-full flex-1 transition-all duration-500 ${step >= 3 ? 'bg-primary-500' : 'bg-gray-800'}`}></div>
                        <div className={`h-full flex-1 transition-all duration-500 ${step >= 4 ? 'bg-green-500' : 'bg-gray-800'}`}></div>
                    </div>
                </div>

                {/* 4. Success Toast / Hash */}
                <AnimatePresence>
                    {step >= 4 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center gap-1"
                        >
                            <div className="text-[10px] text-green-400 font-bold">128 {token} Received</div>
                            <div className="text-[8px] text-gray-500 font-mono">HASH: 0x8f3a...91cd</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* 5. Phone Mockup */}
            <AnimatePresence>
                {step >= 2 && step <= 4 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 100, rotateX: 30 }}
                        animate={{ opacity: 1, y: 20, rotateX: 0, rotateZ: -5, x: 80 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                        className="absolute bottom-20 z-20 w-[140px] h-[260px] bg-dark rounded-[24px] border-[6px] border-dark-lighter shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Status bar */}
                        <div className="h-6 w-full px-4 flex items-center justify-between text-[6px] text-gray-500">
                            <span>9:41</span>
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                            </div>
                        </div>
                        {/* App UI */}
                        <div className="flex-grow p-3 flex flex-col gap-2">
                            <div className="w-8 h-1 bg-gray-700/50 rounded-full mx-auto mb-2"></div>
                            <div className="w-full h-24 bg-primary-600/10 rounded-lg border border-primary-500/20 flex flex-col items-center justify-center relative overflow-hidden">
                                {step === 3 && (
                                    <div className="absolute inset-0 flex items-center justify-center p-2 opacity-30">
                                        <QrCode size={40} className="text-primary-400" />
                                    </div>
                                )}
                                <Smartphone size={16} className="text-primary-400 mb-1" />
                                <span className="text-[6px] text-primary-300 font-bold uppercase tracking-widest">Scanning</span>
                            </div>
                            <div className="space-y-1 mt-auto">
                                <div className="h-1.5 w-full bg-gray-800 rounded"></div>
                                <div className="h-1.5 w-2/3 bg-gray-800 rounded"></div>
                                <div className="h-5 w-full bg-primary-600 rounded-md mt-2"></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 6. Particles / Success Burst */}
            {step === 5 && (
                <div className="absolute inset-0 pointer-events-none z-30">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ 
                                scale: 0, 
                                x: '50%', 
                                y: '50%',
                                opacity: 1 
                            }}
                            animate={{ 
                                scale: [0, 1, 0],
                                x: `${50 + (Math.random() - 0.5) * 60}%`,
                                y: `${50 + (Math.random() - 0.5) * 60}%`,
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            className="absolute w-2 h-2 rounded-full bg-primary-500/40"
                        />
                    ))}
                </div>
            )}

            {/* Hint for hover */}
            <div className="absolute bottom-4 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium opacity-30">
                Hover to focus flow
            </div>
        </div>
    );
};

export default QRScannerAnimation;
