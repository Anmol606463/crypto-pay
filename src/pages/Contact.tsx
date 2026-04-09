import React from 'react';
import { Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const telegramUsername = "bhati_anmol"; // Replace with your actual username

    const handleCopy = () => {
        navigator.clipboard.writeText(telegramUsername);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
            {/* Background Glow */}
            <div className="glow-bg -top-40 -left-40 opacity-50"></div>
            <div className="glow-bg -bottom-40 -right-40 opacity-30"></div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-panel max-w-md w-full p-8 md:p-12 text-center relative z-10 shadow-2xl"
            >
                <div className="mb-8 relative inline-block">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 p-1 mx-auto">
                        <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                            <span className="text-3xl font-bold text-primary-400">CP</span>
                        </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-dark rounded-full"></div>
                </div>

                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Connect Directly
                </h1>
                <p className="text-gray-400 mb-10">
                    To maintain privacy and efficiency, let's continue our conversation on Telegram.
                </p>

                <div className="space-y-4">
                    <motion.a 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`https://t.me/${telegramUsername.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/20"
                    >
                        <Send size={20} />
                        Open Telegram
                    </motion.a>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCopy}
                        className="flex items-center justify-center gap-3 w-full py-4 bg-dark-lighter hover:bg-dark-border text-gray-300 font-medium rounded-xl border border-dark-border transition-all duration-300"
                    >
                        {copied ? (
                            <>
                                <Check size={20} className="text-green-500" />
                                Username Copied!
                            </>
                        ) : (
                            <>
                                <Copy size={20} className="text-gray-400" />
                                Copy @Username
                            </>
                        )}
                    </motion.button>
                </div>

                <div className="mt-12 pt-8 border-t border-dark-border flex flex-col items-center gap-2">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                        Secure Direct Channel
                    </p>
                    <div className="flex gap-2 text-gray-600">
                        <Check size={14} />
                        <span className="text-[10px]">End-to-End Encrypted</span>
                    </div>
                </div>
            </motion.div>

            {/* Subtle decorative elements */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-10 w-24 h-24 border border-primary-500/10 rounded-full"
            ></motion.div>
            <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-10 w-32 h-32 border border-primary-500/10 rounded-full"
            ></motion.div>
        </div>
    );
};

export default Contact;
