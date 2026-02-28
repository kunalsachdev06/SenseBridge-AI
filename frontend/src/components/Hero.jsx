import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Play, BookOpen } from 'lucide-react';
import { fadeUp, staggerContainer, buttonHover, buttonTap } from '../utils/motionVariants';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-label="Hero section"
        >
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]">
                {/* Gradient mesh */}
                <div className="absolute inset-0 opacity-30 dark:opacity-20"
                    style={{
                        background: `
              radial-gradient(ellipse at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(167, 139, 250, 0.2) 0%, transparent 50%)
            `
                    }}
                />

                {/* Floating Blobs */}
                <motion.div
                    style={{ y: y1, willChange: 'transform' }}
                    className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-primary-500/20 blur-[80px] animate-float"
                />
                <motion.div
                    style={{ y: y2, willChange: 'transform' }}
                    className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-accent-500/15 blur-[100px] animate-float-delayed"
                />
                <motion.div
                    className="absolute top-[50%] left-[60%] w-64 h-64 rounded-full bg-primary-400/10 blur-[60px] animate-pulse-glow"
                />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center max-w-4xl mx-auto px-6"
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Hackathon Project 2025
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-900 leading-[1.05] mb-6"
                    >
                        <span className="gradient-text">SenseBridge</span>
                        <br />
                        <span className="opacity-90">AI</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUp}
                        className="text-xl sm:text-2xl md:text-3xl font-heading font-500 opacity-80 mb-4"
                    >
                        A Universal Accessibility Layer
                        <br className="hidden sm:block" />
                        {' '}for an Inclusive World
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base sm:text-lg italic opacity-60 mb-4 max-w-xl"
                    >
                        Accessibility is not a feature. It is a right.
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="text-sm sm:text-base opacity-50 mb-10 max-w-2xl leading-relaxed"
                    >
                        AI that converts real-world information into personalized sensory formats
                        — bridging gaps for visually, hearing, and learning-impaired individuals.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="#demo"
                            className="btn-primary"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            aria-label="View interactive demo"
                        >
                            <Play size={18} />
                            View Demo
                        </motion.a>
                        <motion.a
                            href="#solution"
                            className="btn-secondary"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            aria-label="Learn more about SenseBridge AI"
                        >
                            <BookOpen size={18} />
                            Learn More
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-medium opacity-40 tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={20} className="opacity-40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
