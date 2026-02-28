import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import { Linkedin, Eye, Mic, Monitor } from 'lucide-react';

const team = [
    {
        name: 'Team Member 1',
        role: 'Vision & Backend',
        desc: 'Leads computer vision pipeline and Flask API architecture.',
        icon: Eye,
        color: 'from-violet-500 to-purple-600',
        linkedin: '#',
    },
    {
        name: 'Team Member 2',
        role: 'Speech & Language',
        desc: 'Drives speech recognition, translation, and NLP modules.',
        icon: Mic,
        color: 'from-blue-500 to-cyan-500',
        linkedin: '#',
    },
    {
        name: 'Team Member 3',
        role: 'Frontend & Integration',
        desc: 'Architects the React interface and end-to-end integrations.',
        icon: Monitor,
        color: 'from-emerald-500 to-teal-500',
        linkedin: '#',
    },
];

export default function Team() {
    return (
        <section id="team" className="relative py-24 md:py-32 bg-[var(--bg-secondary)]" aria-label="Our Team">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        The People
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Meet the <span className="gradient-text">Team</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        Passionate engineers building technology that serves humanity.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -8 }}
                                className="glass-card p-8 text-center cursor-default group"
                            >
                                {/* Avatar */}
                                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-shadow duration-300`}>
                                    <member.icon size={36} className="text-white" strokeWidth={1.5} />
                                </div>

                                <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                                <p className="text-sm font-medium gradient-text mb-3">{member.role}</p>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{member.desc}</p>

                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium glass group-hover:border-primary-500/50 transition-all"
                                    aria-label={`${member.name} LinkedIn profile`}
                                >
                                    <Linkedin size={16} />
                                    LinkedIn
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
