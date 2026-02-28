import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, cardHover, viewportOnce } from '../utils/motionVariants';
import {
    Image, Mic, FileText, Globe, ShieldAlert, Layers,
} from 'lucide-react';

const features = [
    {
        icon: Image,
        title: 'Image → Audio Description',
        desc: 'AI-powered scene narration for blind users — transforming visual content into rich audio descriptions.',
        color: 'from-violet-500 to-purple-600',
    },
    {
        icon: Mic,
        title: 'Speech → Text Captions',
        desc: 'Real-time speech-to-text captioning for deaf users — breaking down communication barriers.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: FileText,
        title: 'Text → Simplified Language',
        desc: 'Complex text simplified for dyslexic learners — making information universally readable.',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        icon: Globe,
        title: 'Multi-language Output',
        desc: 'Supports English, Hindi, Tamil, Telugu, and Marathi — accessibility without language barriers.',
        color: 'from-amber-500 to-orange-500',
    },
    {
        icon: ShieldAlert,
        title: 'Crisis Detection Mode',
        desc: 'Automatic safety alerts for fire, weapons, accidents — protection when it matters most.',
        color: 'from-red-500 to-rose-600',
    },
    {
        icon: Layers,
        title: 'Unified Engine',
        desc: 'One platform, all accessibility modes. No fragmentation — just inclusive intelligence.',
        color: 'from-primary-500 to-accent-500',
    },
];

export default function Solution() {
    return (
        <section id="solution" className="relative py-24 md:py-32 bg-[var(--bg-secondary)]" aria-label="Our Solution">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        How We Solve It
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Our Solution — One Unified
                        <br className="hidden sm:block" />
                        <span className="gradient-text"> Accessibility Engine</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        Instead of building separate tools, we built one unified accessibility engine
                        that adapts to every sensory need.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={cardHover}
                                className="glass-card gradient-border p-8 flex flex-col gap-5 cursor-default"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                                    <feature.icon size={26} className="text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-heading font-bold text-lg leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
