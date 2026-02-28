import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import {
    GraduationCap, Train, Siren, HeartPulse,
} from 'lucide-react';

const useCases = [
    {
        icon: GraduationCap,
        title: 'Blind Student in a Classroom',
        story: 'Priya, a visually impaired student, uses SenseBridge to get audio descriptions of her teacher\'s slides in real-time. She follows lessons independently for the first time.',
        tag: 'Education',
        color: 'from-violet-500 to-purple-500',
    },
    {
        icon: Train,
        title: 'Hearing-Impaired Traveler',
        story: 'Rajesh, who is deaf, receives live text captions of platform announcements at a busy railway station. He never misses a train again.',
        tag: 'Transportation',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Siren,
        title: 'Crisis Alert at Railway Station',
        story: 'When a fire breaks out at Pune station, SenseBridge instantly pushes multilingual emergency alerts — including audio for the blind and text for the deaf.',
        tag: 'Emergency Response',
        color: 'from-red-500 to-orange-500',
    },
    {
        icon: HeartPulse,
        title: 'Rural Healthcare Communication',
        story: 'A doctor in a Marathi-speaking village uses SenseBridge to translate medical instructions into simplified regional language, ensuring patients understand their treatment.',
        tag: 'Healthcare',
        color: 'from-emerald-500 to-teal-500',
    },
];

export default function UseCases() {
    return (
        <section id="use-cases" className="relative py-24 md:py-32" aria-label="Real-World Use Cases">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        Real Stories, Real Impact
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Real-World <span className="gradient-text">Use Cases</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        Behind every feature is a human story. Here&apos;s how SenseBridge AI changes lives.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {useCases.map((uc, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -6 }}
                                className="glass-card p-8 flex flex-col gap-5 cursor-default"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${uc.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                        <uc.icon size={26} className="text-white" />
                                    </div>
                                    <div>
                                        <span className={`text-xs font-medium uppercase tracking-wider bg-gradient-to-r ${uc.color} bg-clip-text text-transparent`}>
                                            {uc.tag}
                                        </span>
                                        <h3 className="font-heading font-bold text-lg">{uc.title}</h3>
                                    </div>
                                </div>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic">
                                    &ldquo;{uc.story}&rdquo;
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
