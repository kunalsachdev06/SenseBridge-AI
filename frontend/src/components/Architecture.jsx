import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import {
    Monitor, Server, Brain, ArrowRight, User, Cpu, Eye, Mic, Globe, Volume2,
} from 'lucide-react';

const flowSteps = [
    { icon: User, label: 'User', sub: 'Input', color: 'from-blue-500 to-cyan-500' },
    { icon: Monitor, label: 'Frontend', sub: 'React + Vite', color: 'from-primary-500 to-purple-500' },
    { icon: Server, label: 'Flask API', sub: 'Backend', color: 'from-emerald-500 to-teal-500' },
    { icon: Brain, label: 'AI Models', sub: 'Processing', color: 'from-amber-500 to-orange-500' },
    { icon: Volume2, label: 'Response', sub: 'Text + Voice', color: 'from-rose-500 to-red-500' },
];

const techStack = [
    { icon: Eye, name: 'BLIP Vision', desc: 'Image captioning and scene understanding' },
    { icon: Mic, name: 'Whisper', desc: 'Speech recognition and transcription' },
    { icon: Globe, name: 'Translation API', desc: 'Multi-language translation engine' },
    { icon: Volume2, name: 'Text-to-Speech', desc: 'Natural voice synthesis output' },
    { icon: Cpu, name: 'Flask + Python', desc: 'Backend processing and API routing' },
    { icon: Monitor, name: 'React + Vite', desc: 'Modern frontend with animations' },
];

export default function Architecture() {
    return (
        <section id="architecture" className="relative py-24 md:py-32" aria-label="System Architecture">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        Technical Deep Dive
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        System <span className="gradient-text">Architecture</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        A clean, modular pipeline designed for scalability, reliability, and real-world deployment.
                    </motion.p>

                    {/* Flow Diagram */}
                    <motion.div variants={fadeUp} className="mb-20">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0">
                            {flowSteps.map((step, i) => (
                                <div key={i} className="flex items-center">
                                    <motion.div
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.08, y: -4 }}
                                        className="glass-card p-5 md:p-6 text-center min-w-[120px] cursor-default"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                                            <step.icon size={22} className="text-white" />
                                        </div>
                                        <p className="font-heading font-bold text-sm">{step.label}</p>
                                        <p className="text-xs opacity-50 mt-1">{step.sub}</p>
                                    </motion.div>
                                    {i < flowSteps.length - 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 0.4, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="hidden md:block mx-2"
                                        >
                                            <ArrowRight size={20} className="text-primary-400" />
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack Grid */}
                    <motion.div variants={fadeUp}>
                        <p className="text-center text-sm font-medium opacity-50 uppercase tracking-wider mb-8">
                            Powered By
                        </p>
                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
                        >
                            {techStack.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex items-start gap-4 p-5 rounded-xl glass cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                                        <tech.icon size={20} className="text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-sm">{tech.name}</p>
                                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{tech.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
