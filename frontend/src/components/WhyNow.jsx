import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../utils/motionVariants';

export default function WhyNow() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden" aria-label="Why Now">
            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-accent-500/5 to-transparent" />

            <div className="section-container relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-sm font-medium tracking-widest uppercase gradient-text mb-6"
                    >
                        The Urgency
                    </motion.p>
                    <motion.h2
                        variants={fadeUp}
                        className="font-heading font-800 text-3xl sm:text-4xl md:text-5xl leading-tight mb-8"
                    >
                        Why <span className="gradient-text">Now?</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[var(--text-secondary)]"
                    >
                        <span className="font-heading font-bold text-[var(--text-primary)]">1.3 billion people</span>{' '}
                        globally live with disabilities.
                        <br className="hidden sm:block" />
                        AI gives us the opportunity to{' '}
                        <span className="gradient-text font-semibold">remove barriers at scale</span>.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="mt-10 h-px max-w-[120px] mx-auto bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
