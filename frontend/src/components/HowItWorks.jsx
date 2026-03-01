import { useRef, useState, useEffect, useCallback } from 'react';
import {
    Upload, Brain, ShieldCheck, Languages, Volume2,
} from 'lucide-react';

const steps = [
    {
        icon: Upload,
        title: 'Upload Input',
        desc: 'User uploads an image, speech recording, or text through the web interface. The system accepts multiple input formats for maximum accessibility.',
        tech: 'Web Interface + Flask API',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Brain,
        title: 'AI Processing',
        desc: 'Advanced AI models analyze the input — computer vision understands images, speech recognition transcribes audio, and NLP processes text.',
        tech: 'BLIP-2 Vision + Whisper ASR',
        gradient: 'from-violet-500 to-purple-500',
    },
    {
        icon: ShieldCheck,
        title: 'Crisis Detection',
        desc: 'A dedicated safety classification engine scans all content for fire, weapons, accidents, and explosions — triggering immediate alerts when threats are detected.',
        tech: 'Safety Classification Engine',
        gradient: 'from-red-500 to-rose-500',
    },
    {
        icon: Languages,
        title: 'Translation',
        desc: 'Output is translated into the user\'s chosen language from 10 supported Indian languages, ensuring information reaches everyone regardless of their mother tongue.',
        tech: 'Multi-Language Translation API',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        icon: Volume2,
        title: 'Accessible Delivery',
        desc: 'Final output is delivered as both text and natural voice — ensuring universal access for blind, deaf, and learning-impaired users simultaneously.',
        tech: 'Text-to-Speech Engine',
        gradient: 'from-emerald-500 to-teal-500',
    },
];

const N = steps.length;

export default function HowItWorks() {
    const sectionRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const handleScroll = useCallback(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // How far the section top has scrolled past the viewport top
        const scrolled = -rect.top;
        // Total scrollable distance = section height - one viewport
        const totalScrollable = sectionHeight - viewportHeight;
        if (totalScrollable <= 0) return;

        const rawProgress = scrolled / totalScrollable;
        const clampedProgress = Math.max(0, Math.min(1, rawProgress));

        // Map progress [0, 1] → step index [0, N-1]
        const stepIndex = Math.min(Math.floor(clampedProgress * N), N - 1);
        setActiveStep(stepIndex);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            className="relative"
            style={{ height: '400vh' }}
            aria-label="How it works"
        >
            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                <div className="relative z-10 w-full max-w-2xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-2">
                            Under the Hood
                        </p>
                        <h2 className="font-heading font-800 text-3xl sm:text-4xl md:text-5xl mb-2">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-sm max-w-md mx-auto">
                            From input to inclusive output — a seamless AI pipeline.
                        </p>
                    </div>

                    {/* Progress dots */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        {steps.map((_, i) => (
                            <div
                                key={i}
                                className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
                                style={{
                                    width: i === activeStep ? 24 : 10,
                                    height: 10,
                                    opacity: i === activeStep ? 1 : 0.3,
                                }}
                            />
                        ))}
                    </div>

                    {/* Card area — all cards stacked, only active one is visible */}
                    <div className="relative" style={{ minHeight: '260px' }}>
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="absolute inset-x-0 top-0 transition-all duration-500 ease-out"
                                style={{
                                    opacity: i === activeStep ? 1 : 0,
                                    transform: i === activeStep
                                        ? 'translateY(0) scale(1)'
                                        : i < activeStep
                                            ? 'translateY(-20px) scale(0.98)'
                                            : 'translateY(20px) scale(0.98)',
                                    pointerEvents: i === activeStep ? 'auto' : 'none',
                                }}
                            >
                                <StepContent step={step} index={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepContent({ step, index }) {
    return (
        <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <step.icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                    <span className="text-xs font-semibold uppercase tracking-widest gradient-text">
                        Step {index + 1} of {N}
                    </span>
                    <h3 className="font-heading font-800 text-xl md:text-2xl mt-0.5">
                        {step.title}
                    </h3>
                </div>
            </div>

            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-4">
                {step.desc}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500/5 border border-primary-500/10 text-xs font-medium text-primary-400">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                {step.tech}
            </div>
        </div>
    );
}
