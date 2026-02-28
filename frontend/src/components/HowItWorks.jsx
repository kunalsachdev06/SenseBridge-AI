import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Upload, Brain, ShieldCheck, Languages, Volume2,
} from 'lucide-react';

const steps = [
    {
        icon: Upload,
        title: 'Upload Input',
        desc: 'User uploads an image, speech recording, or text through the web interface. The system accepts multiple input formats for maximum accessibility.',
        tech: 'Web Interface + Flask API',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Brain,
        title: 'AI Processing',
        desc: 'Advanced AI models analyze the input — computer vision understands images, speech recognition transcribes audio, and NLP processes text.',
        tech: 'BLIP-2 Vision + Whisper ASR',
        color: 'from-violet-500 to-purple-500',
    },
    {
        icon: ShieldCheck,
        title: 'Crisis Detection',
        desc: 'A dedicated safety classification engine scans all content for fire, weapons, accidents, and explosions — triggering immediate alerts when threats are detected.',
        tech: 'Safety Classification Engine',
        color: 'from-red-500 to-rose-500',
    },
    {
        icon: Languages,
        title: 'Translation',
        desc: 'Output is translated into the user\'s chosen language from 10 supported Indian languages, ensuring information reaches everyone regardless of their mother tongue.',
        tech: 'Multi-Language Translation API',
        color: 'from-amber-500 to-orange-500',
    },
    {
        icon: Volume2,
        title: 'Accessible Delivery',
        desc: 'Final output is delivered as both text and natural voice — ensuring universal access for blind, deaf, and learning-impaired users simultaneously.',
        tech: 'Text-to-Speech Engine',
        color: 'from-emerald-500 to-teal-500',
    },
];

export default function HowItWorks() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            className="relative"
            style={{ minHeight: `${steps.length * 60 + 40}vh` }}
            aria-label="How it works"
        >
            {/* Sticky container — uses position:sticky, NOT fixed */}
            <div className="sticky top-0 min-h-screen flex items-center py-20">
                <div className="section-container w-full">
                    {/* Header — always visible in sticky view */}
                    <div className="text-center mb-12">
                        <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                            Under the Hood
                        </p>
                        <h2 className="font-heading font-800 text-4xl sm:text-5xl md:text-6xl mb-4">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-base max-w-xl mx-auto">
                            From input to inclusive output — a seamless AI pipeline.
                        </p>
                    </div>

                    {/* Progress + Steps */}
                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical progress track */}
                        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[var(--border-color)]">
                            <motion.div
                                style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                                className="w-full h-full bg-gradient-to-b from-primary-500 to-accent-500"
                            />
                        </div>

                        {/* Step cards */}
                        <div className="space-y-6">
                            {steps.map((step, i) => (
                                <StepCard key={i} step={step} index={i} scrollProgress={scrollYProgress} totalSteps={steps.length} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, scrollProgress, totalSteps }) {
    // Each step activates at its portion of scroll progress
    const stepProgress = useTransform(
        scrollProgress,
        [index / totalSteps, (index + 0.5) / totalSteps],
        [0, 1]
    );
    const opacity = useTransform(stepProgress, [0, 1], [0.3, 1]);
    const scale = useTransform(stepProgress, [0, 1], [0.97, 1]);

    return (
        <motion.div
            style={{ opacity, scale }}
            className="relative pl-16 md:pl-20"
        >
            {/* Step node on progress line */}
            <motion.div
                style={{ opacity }}
                className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 border-[var(--bg-primary)] shadow-glow z-10"
            />

            {/* Card */}
            <div className="glass-card p-6 md:p-8">
                <div className="flex items-start gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <step.icon size={24} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                        <span className="text-xs font-medium uppercase tracking-wider gradient-text">
                            Step {index + 1}
                        </span>
                        <h3 className="font-heading font-800 text-xl md:text-2xl">
                            {step.title}
                        </h3>
                    </div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                    {step.desc}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-primary-500/5 text-xs font-medium text-primary-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {step.tech}
                </div>
            </div>
        </motion.div>
    );
}
