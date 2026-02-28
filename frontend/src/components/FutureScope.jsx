import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import {
    Camera, Glasses, Building2, Handshake, BrainCircuit,
} from 'lucide-react';

const futures = [
    { icon: Camera, title: 'Real-Time Camera Narration', desc: 'Live video feed analysis for continuous environment narration.', status: 'Research' },
    { icon: Glasses, title: 'Wearable Integration', desc: 'Smart glasses with built-in SenseBridge AI for on-the-go assistance.', status: 'Concept' },
    { icon: Building2, title: 'Smart City Integration', desc: 'City-wide deployment for public spaces, transit, and emergency systems.', status: 'Planned' },
    { icon: Handshake, title: 'NGO Partnerships', desc: 'Collaborating with accessibility organizations for wider reach.', status: 'In Progress' },
    { icon: BrainCircuit, title: 'AI Personalization', desc: 'Learning user preferences to deliver increasingly tailored experiences.', status: 'Research' },
];

export default function FutureScope() {
    return (
        <section id="future" className="relative py-24 md:py-32 overflow-hidden" aria-label="Future Expansion">
            {/* Futuristic background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
                <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
                />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        What&apos;s Next
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Future <span className="gradient-text">Expansion</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        Our roadmap to making accessibility truly universal — everywhere, for everyone.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
                        {futures.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="glass-card p-7 relative overflow-hidden cursor-default group"
                            >
                                {/* Holographic shimmer on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 flex items-center justify-center">
                                            <item.icon size={22} className="text-primary-500" />
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">
                                            {item.status}
                                        </span>
                                    </div>
                                    <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
