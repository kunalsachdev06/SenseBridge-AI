import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import {
    Flame, Crosshair, Car, Bomb, AlertTriangle, Volume2, Bell, Globe,
} from 'lucide-react';

const threats = [
    { icon: Flame, label: 'Fire', color: 'text-orange-500' },
    { icon: Crosshair, label: 'Weapon', color: 'text-red-500' },
    { icon: Car, label: 'Accident', color: 'text-yellow-500' },
    { icon: Bomb, label: 'Explosion', color: 'text-red-600' },
];

const responses = [
    { icon: AlertTriangle, label: 'Visual Alert', desc: 'Immediate on-screen warning with clear visuals' },
    { icon: Volume2, label: 'Audio Warning', desc: 'Loud audio alert for hearing users' },
    { icon: Bell, label: 'Multi-language Notification', desc: 'Emergency alerts in all 5 supported languages' },
];

export default function CrisisMode() {
    return (
        <section
            id="crisis"
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ background: '#0a0a12' }}
            aria-label="Smart Crisis Detection"
        >
            {/* Radial Red Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-500/10 blur-[120px]" />
                <motion.div
                    animate={{
                        opacity: [0.1, 0.25, 0.1],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-red-600/15 blur-[80px]"
                />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase text-red-400 mb-4">
                        Safety First
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading text-white">
                        Smart <span className="text-red-400">Crisis</span> Detection
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading text-gray-400">
                        SenseBridge is not just assistive — it is <span className="text-red-400 font-semibold">protective</span>.
                    </motion.p>

                    {/* Threat Detection */}
                    <motion.div variants={fadeUp} className="mb-16">
                        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">Detects</p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {threats.map((threat, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm"
                                >
                                    <motion.div
                                        animate={{ rotate: [0, -3, 3, -3, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 + i }}
                                    >
                                        <threat.icon size={24} className={threat.color} />
                                    </motion.div>
                                    <span className="font-heading font-bold text-white">{threat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* System Response */}
                    <motion.div variants={fadeUp}>
                        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">System Triggers</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {responses.map((resp, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="p-6 rounded-2xl border border-red-500/15 bg-red-500/5 backdrop-blur-sm text-center"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                                        <resp.icon size={26} className="text-red-400" />
                                    </div>
                                    <h3 className="font-heading font-bold text-white mb-2">{resp.label}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{resp.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ARIA Live Alert Region */}
                    <div
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        className="sr-only"
                    >
                        Crisis detection system is active and monitoring for threats.
                    </div>

                    {/* Alert bar */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-12 max-w-2xl mx-auto"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(239, 68, 68, 0.1)',
                                    '0 0 40px rgba(239, 68, 68, 0.25)',
                                    '0 0 20px rgba(239, 68, 68, 0.1)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <AlertTriangle size={24} className="text-red-400" />
                            </motion.div>
                            <div>
                                <p className="text-sm font-bold text-red-400">CRISIS MODE ACTIVE</p>
                                <p className="text-xs text-gray-500">All channels monitored • Multi-language alerts ready</p>
                            </div>
                            <div className="ml-auto flex gap-1">
                                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
