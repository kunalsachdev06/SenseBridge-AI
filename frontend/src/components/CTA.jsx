import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, buttonHover, buttonTap, viewportOnce } from '../utils/motionVariants';
import { Heart, Handshake, ArrowRight } from 'lucide-react';

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
                            href="#"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-heading font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            aria-label="Support the initiative"
                        >
                            <Heart size={18} />
                            Support the Initiative
                            <ArrowRight size={16} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-heading font-bold rounded-2xl hover:bg-white/10 transition-all"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            aria-label="Explore collaboration opportunities"
                        >
                            <Handshake size={18} />
                            Explore Collaboration
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
