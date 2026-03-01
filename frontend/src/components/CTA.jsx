import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, buttonHover, buttonTap, viewportOnce } from '../utils/motionVariants';
import { Heart } from 'lucide-react';

export default function CTA() {
    return (
        <section id="cta" className="relative py-24 md:py-32 overflow-hidden" aria-label="Call to Action">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 dark:from-[#0a0a1a] dark:via-primary-900/30 dark:to-[#0a0a1a]" />

            {/* Floating elements */}
            <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-white/5 blur-xl"
            />
            <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-20 right-[15%] w-48 h-48 rounded-full bg-primary-400/10 blur-xl"
            />

            <div className="section-container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center"
                >
                    <motion.div variants={fadeUp} className="flex justify-center mb-6">
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(139, 92, 246, 0.3)',
                                    '0 0 60px rgba(139, 92, 246, 0.5)',
                                    '0 0 20px rgba(139, 92, 246, 0.3)',
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
                        >
                            <Heart size={36} className="text-white" />
                        </motion.div>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto"
                    >
                        Join us in building a world{' '}
                        <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                            without sensory barriers.
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
                    >
                        Every contribution brings us closer to a world where technology serves everyone equally.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.a
                            href="https://github.com/kunalsachdev06/SenseBridge-AI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-heading font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            aria-label="View GitHub Repository"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub Repo
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
