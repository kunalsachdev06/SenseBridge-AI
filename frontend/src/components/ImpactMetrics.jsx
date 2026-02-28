import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import { Users, Globe, Layers, Cpu } from 'lucide-react';

function Counter({ target, suffix = '', decimals = 0, duration = 2500 }) {
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
                setCount(parseFloat(start.toFixed(decimals)));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration, decimals]);

    return (
        <span ref={ref} className="gradient-text font-heading font-900 text-5xl md:text-6xl lg:text-7xl">
            {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
        </span>
    );
}

const metrics = [
    { icon: Users, value: 1.3, suffix: 'B+', decimals: 1, label: 'People Impacted Globally', desc: 'Potential users who could benefit from accessibility technology' },
    { icon: Globe, value: 5, suffix: '', decimals: 0, label: 'Languages Supported', desc: 'English, Hindi, Tamil, Telugu, Marathi' },
    { icon: Layers, value: 4, suffix: '', decimals: 0, label: 'Accessibility Modes', desc: 'Vision, hearing, reading, and crisis assistance' },
    { icon: Cpu, value: 1, suffix: '', decimals: 0, label: 'Unified Engine', desc: 'All modes powered by a single intelligent platform' },
];

export default function ImpactMetrics() {
    return (
        <section id="impact" className="relative py-24 md:py-32 bg-[var(--bg-secondary)]" aria-label="Impact Metrics">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        By The Numbers
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Impact at <span className="gradient-text">Scale</span>
                    </motion.h2>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    >
                        {metrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -6 }}
                                className="glass-card p-8 text-center cursor-default"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-6">
                                    <metric.icon size={26} className="text-primary-500" />
                                </div>
                                <Counter target={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                                <p className="font-heading font-bold text-base mt-3">{metric.label}</p>
                                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">{metric.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
