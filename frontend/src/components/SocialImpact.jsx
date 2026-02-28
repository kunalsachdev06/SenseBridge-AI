import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import {
    School, TrainFront, Shield, Stethoscope, Building2,
} from 'lucide-react';

const areas = [
    { icon: School, title: 'Schools & Universities', desc: 'Making classrooms accessible to every student, regardless of ability.' },
    { icon: TrainFront, title: 'Public Transport', desc: 'Live announcements, captions, and crisis alerts at stations.' },
    { icon: Shield, title: 'Disaster Management', desc: 'Multi-language emergency communication when seconds matter.' },
    { icon: Stethoscope, title: 'Rural Healthcare', desc: 'Bridging doctor-patient language gaps in underserved areas.' },
    { icon: Building2, title: 'Smart City Layer', desc: 'Citywide accessibility infrastructure for inclusive urban living.' },
];

export default function SocialImpact() {
    return (
        <section id="social-impact" className="relative py-24 md:py-32" aria-label="Social Impact">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        Making a Difference
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Social Good & <span className="gradient-text">Scalable Impact</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        From campus prototype to community deployment to national-scale inclusion.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
                        {areas.map((area, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="glass-card p-7 flex items-start gap-4 cursor-default"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 flex items-center justify-center flex-shrink-0">
                                    <area.icon size={22} className="text-primary-500" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-base mb-1">{area.title}</h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{area.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm italic opacity-50 mt-12 max-w-lg mx-auto"
                    >
                        Campus prototype → Community deployment → National scale inclusion.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
