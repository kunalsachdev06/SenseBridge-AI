import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
    Moon, Sun, Menu, X, Accessibility, Eye, Type, Zap, RotateCcw,
} from 'lucide-react';

export default function Navbar() {
    const {
        darkMode, toggleDarkMode,
        toggleLargeText, toggleHighContrast, toggleReduceMotion, resetSettings,
        largeText, highContrast, reduceMotion,
    } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [a11yOpen, setA11yOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Problem', href: '#problem' },
        { label: 'Solution', href: '#solution' },
        { label: 'Demo', href: '#demo' },
        { label: 'Architecture', href: '#architecture' },
        { label: 'Impact', href: '#impact' },
        { label: 'Team', href: '#team' },
    ];

    const a11yButtons = [
        { label: 'Large Text', icon: Type, active: largeText, toggle: toggleLargeText },
        { label: 'High Contrast', icon: Eye, active: highContrast, toggle: toggleHighContrast },
        { label: 'Reduce Motion', icon: Zap, active: reduceMotion, toggle: toggleReduceMotion },
    ];

    return (
        <>
            <a href="#main-content" className="skip-to-content">
                Skip to main content
            </a>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'glass py-3 shadow-lg'
                    : 'py-5 bg-transparent'
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group" aria-label="SenseBridge AI Home">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
                            <span className="text-white font-heading font-bold text-lg">S</span>
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight">
                            Sense<span className="gradient-text">Bridge</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        {/* Accessibility Panel Toggle */}
                        <button
                            onClick={() => setA11yOpen(!a11yOpen)}
                            className="p-2 rounded-xl hover:bg-primary-500/10 transition-colors"
                            aria-label="Accessibility options"
                            aria-expanded={a11yOpen}
                        >
                            <Accessibility size={20} />
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-xl hover:bg-primary-500/10 transition-colors"
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-primary-500/10 transition-colors"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Accessibility Panel */}
                <AnimatePresence>
                    {a11yOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-3 items-center">
                                {a11yButtons.map((btn) => (
                                    <button
                                        key={btn.label}
                                        onClick={btn.toggle}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${btn.active
                                            ? 'bg-primary-500 text-white'
                                            : 'glass hover:border-primary-500'
                                            }`}
                                        aria-pressed={btn.active}
                                    >
                                        <btn.icon size={16} />
                                        {btn.label}
                                    </button>
                                ))}
                                <button
                                    onClick={resetSettings}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium glass hover:border-red-400 text-[var(--text-secondary)] hover:text-red-400 transition-all ml-auto"
                                    aria-label="Reset all accessibility settings"
                                >
                                    <RotateCcw size={14} />
                                    Reset
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden glass"
                        >
                            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-base font-medium py-2 opacity-70 hover:opacity-100 transition-opacity"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
