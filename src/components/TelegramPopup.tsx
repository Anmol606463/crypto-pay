import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare } from 'lucide-react';

const TelegramPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const username = "bhati_anmol";

    useEffect(() => {
        // Initial delay before first popup
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        // Reshow after 5 seconds of being closed
        setTimeout(() => {
            setIsVisible(true);
        }, 5000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
                    className="fixed bottom-6 right-6 z-[9999] max-w-[320px] w-full"
                >
                    <div className="glass-panel p-6 shadow-2xl border-primary-500/30 relative overflow-hidden group">
                        {/* Animated background glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-600/20 blur-3xl rounded-full group-hover:bg-primary-600/40 transition-all duration-500"></div>
                        
                        <button 
                            onClick={closePopup}
                            className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors p-1"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center border border-primary-500/30 flex-shrink-0">
                                <MessageSquare className="text-primary-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg leading-tight mb-1">
                                    Need Quick Help?
                                </h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Chat with me directly on Telegram for faster response times.
                                </p>
                            </div>
                        </div>

                        <a 
                            href={`https://t.me/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsVisible(false)}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/30"
                        >
                            <Send size={18} />
                            Message @bhati_anmol
                        </a>
                        
                        <div className="mt-3 text-center">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                                Available Now
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TelegramPopup;
