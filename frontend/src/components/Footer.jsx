import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-[var(--border-color)]" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <span className="text-white font-heading font-bold text-sm">S</span>
                        </div>
                        <span className="font-heading font-bold text-lg">
                            Sense<span className="gradient-text">Bridge</span> AI
                        </span>
                    </div>

                    {/* Links */}
                    <nav aria-label="Footer navigation" className="flex gap-6 text-sm opacity-60">
                        <a href="#problem" className="hover:opacity-100 transition-opacity">Problem</a>
                        <a href="#solution" className="hover:opacity-100 transition-opacity">Solution</a>
                        <a href="#demo" className="hover:opacity-100 transition-opacity">Demo</a>
                        <a href="#team" className="hover:opacity-100 transition-opacity">Team</a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-sm opacity-40 flex items-center gap-1">
                        Built with <Heart size={14} className="text-red-400" /> for accessibility
                    </p>
                </div>

                <div className="section-divider mt-8 mb-4" />

                <p className="text-center text-xs opacity-30">
                    &copy; {new Date().getFullYear()} SenseBridge AI. Hackathon Project. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
