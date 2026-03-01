import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import { Linkedin } from 'lucide-react';

const team = [
    {
        name: 'Kunal Sachdev',
        photo: '/team/kunal.jpg',
        linkedin: 'https://www.linkedin.com/in/kunal-sachdev-/',
    },
    {
        name: 'Sachit Verma',
        photo: '/team/sachit.jpg',
        linkedin: 'https://www.linkedin.com/in/sachit-verma-295532283/',
    },
    {
        name: 'Anushka Bakshi',
        photo: '/team/anushka.jpg',
        linkedin: 'https://www.linkedin.com/in/anushka-bakshi-79b2a9321/',
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                    >
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -8 }}
                                className="glass-card p-8 text-center cursor-default group"
                            >
                                {/* Profile Photo */}
                                <div className="relative w-28 h-28 mx-auto mb-5">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-110" />
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="relative w-28 h-28 rounded-full object-cover border-2 border-[var(--border-color)] group-hover:border-primary-500/60 transition-all duration-300 shadow-lg"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="font-heading font-bold text-xl mb-4">{member.name}</h3>

                                {/* LinkedIn Button */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass group-hover:border-primary-500/50 hover:bg-primary-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-[var(--bg-secondary)]"
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
