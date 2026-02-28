import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import { EyeOff, EarOff, BookX, AlertTriangle } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return (
        <span ref={ref} className="gradient-text font-heading font-bold text-4xl md:text-5xl">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

const problems = [
    {
        icon: EyeOff,
        stat: 285,
        suffix: 'M+',
        label: 'Visually Impaired',
        description: 'Millions of visually impaired individuals struggle to access visual information in their daily lives.',
    },
    {
        icon: EarOff,
        stat: 466,
        suffix: 'M+',
        label: 'Hearing Impaired',
        description: 'Hearing-impaired users face constant communication barriers in an audio-first world.',
    },
    {
        icon: BookX,
        stat: 780,
        suffix: 'M+',
        label: 'Dyslexic Learners',
        description: 'Dyslexic learners experience difficulty processing complex text, limiting their potential.',
    },
    {
        icon: AlertTriangle,
        stat: 100,
        suffix: 'M+',
        label: 'Crisis Inaccessible',
        description: 'Critical crisis information is often inaccessible during emergencies when people need it most.',
    },
];

export default function Problem() {
    return (
        <section id="problem" className="relative py-24 md:py-32" aria-label="The Problem">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        Understanding the Gap
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        The Problem
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        In a world that speaks, shows, and writes — millions are left behind.
                        The sensory divide is real, and it demands a solution.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {problems.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                className="glass-card p-8 md:p-10 flex flex-col items-start gap-4"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                                    <item.icon size={28} className="text-primary-500" strokeWidth={1.5} />
                                </div>
                                <AnimatedCounter target={item.stat} suffix={item.suffix} />
                                <h3 className="font-heading font-bold text-xl">{item.label}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
