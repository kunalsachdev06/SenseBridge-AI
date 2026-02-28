import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import {
    Fingerprint, ShieldCheck, Heart, Lightbulb, Sparkles, Zap,
} from 'lucide-react';

const differentiators = [
    { icon: Fingerprint, title: 'Unified Multimodal Engine', desc: 'One platform handles vision, hearing, reading, and crisis — no fragmentation.' },
    { icon: ShieldCheck, title: 'Predictive Crisis Integration', desc: 'Real-time threat detection woven directly into the accessibility pipeline.' },
    { icon: Heart, title: 'Personalized Modes', desc: 'Each user experiences content tailored to their specific sensory needs.' },
    { icon: Lightbulb, title: 'Inclusion-By-Default', desc: 'Accessibility isn\'t an afterthought — it\'s the foundation of every design decision.' },
];

const highlights = [
    { icon: Sparkles, text: 'Designed with Inclusion-By-Default Philosophy' },
    { icon: Zap, text: 'Built as a Scalable Smart-City Accessibility Layer' },
    { icon: Heart, text: 'Ethical AI with Human-Centric Design' },
];

export default function Innovation() {
    return (
        <section id="innovation" className="relative py-24 md:py-32 bg-[var(--bg-secondary)]" aria-label="Innovation">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        Standing Out
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        What Makes Us <span className="gradient-text">Different?</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        Not just another accessibility tool. A paradigm shift in how we think about inclusive technology.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
                    >
                        {differentiators.map((d, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -4 }}
                                className="glass-card gradient-border p-8 cursor-default"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5">
                                    <d.icon size={24} className="text-primary-500" />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-2">{d.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{d.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Judge-impressing highlights */}
                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                        {highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ scale: 1.03 }}
                                className="flex items-center gap-3 px-6 py-3 rounded-full glass text-sm font-medium cursor-default"
                            >
                                <h.icon size={16} className="text-primary-400" />
                                {h.text}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
