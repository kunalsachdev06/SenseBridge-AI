import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants';
import { Globe, Check, ChevronDown } from 'lucide-react';

const visibleLanguages = [
    { char: 'A', name: 'English', script: 'Latin' },
    { char: 'अ', name: 'Hindi', script: 'Devanagari' },
    { char: 'அ', name: 'Tamil', script: 'Tamil' },
    { char: 'অ', name: 'Bengali', script: 'Bengali' },
    { char: 'ਅ', name: 'Punjabi', script: 'Gurmukhi' },
];

const dropdownLanguages = [
    { char: 'अ', name: 'Marathi', script: 'Devanagari' },
    { char: 'ಅ', name: 'Kannada', script: 'Kannada' },
    { char: 'અ', name: 'Gujarati', script: 'Gujarati' },
    { char: 'অ', name: 'Assamese', script: 'Bengali' },
    { char: 'అ', name: 'Telugu', script: 'Telugu' },
];

function LanguageBadge({ lang, selected, onSelect }) {
    const isSelected = selected === lang.name;

    return (
        <motion.button
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(lang.name)}
            className={`relative flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 cursor-pointer min-w-[110px] ${isSelected
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-glow'
                    : 'glass-card hover:shadow-glow'
                }`}
            title={`${lang.name} (${lang.script})`}
            aria-pressed={isSelected}
            aria-label={`Select ${lang.name}`}
        >
            {/* Check icon for selected */}
            {isSelected && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                >
                    <Check size={12} className="text-white" />
                </motion.div>
            )}

            {/* Script character */}
            <span
                className={`text-4xl font-bold leading-none ${isSelected ? 'text-white' : 'gradient-text'
                    }`}
                style={{ fontFamily: "'Noto Sans', 'Noto Sans Devanagari', 'Noto Sans Tamil', 'Noto Sans Bengali', 'Noto Sans Gurmukhi', 'Noto Sans Kannada', 'Noto Sans Gujarati', 'Noto Sans Telugu', sans-serif" }}
            >
                {lang.char}
            </span>

            {/* Language name */}
            <span className={`text-sm font-medium ${isSelected ? 'text-white/90' : 'text-[var(--text-secondary)]'}`}>
                {lang.name}
            </span>
        </motion.button>
    );
}

export default function MultiLanguage() {
    const [selected, setSelected] = useState('English');
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="languages" className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden" aria-label="Multi-Language Support">
            {/* Animated Globe Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="w-[500px] h-[500px] rounded-full border border-primary-500/5 absolute"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    className="w-[400px] h-[400px] rounded-full border border-accent-500/5 absolute"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="w-[300px] h-[300px] rounded-full border border-primary-500/5 absolute"
                />
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/10 to-accent-500/10 blur-xl" />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.div variants={fadeUp} className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                            <Globe size={32} className="text-primary-500" />
                        </div>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Inclusive by <span className="gradient-text">Language</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        Bridges accessibility gaps across multilingual communities with support for 10 Indian languages.
                    </motion.p>

                    {/* Visible Languages */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-3xl mx-auto mb-8"
                    >
                        {visibleLanguages.map((lang, i) => (
                            <motion.div key={lang.name} variants={staggerItem}>
                                <LanguageBadge lang={lang} selected={selected} onSelect={setSelected} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Expand dropdown */}
                    <motion.div variants={fadeUp} className="text-center">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium hover:border-primary-500/50 transition-all"
                            aria-expanded={expanded}
                            aria-controls="more-languages"
                        >
                            {expanded ? 'Show Less' : `+ ${dropdownLanguages.length} More Languages`}
                            <motion.span
                                animate={{ rotate: expanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={16} />
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    id="more-languages"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-6 max-w-3xl mx-auto">
                                        {dropdownLanguages.map((lang) => (
                                            <LanguageBadge key={lang.name} lang={lang} selected={selected} onSelect={setSelected} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Selected language indicator */}
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm text-[var(--text-secondary)] mt-8"
                    >
                        Selected: <span className="font-medium gradient-text">{selected}</span>
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
