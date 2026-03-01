import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, buttonHover, buttonTap, viewportOnce } from '../utils/motionVariants';
import {
    Image, Mic, FileText, Languages, Upload, Loader2, Sparkles, ChevronDown,
    AlertTriangle, Shield, CheckCircle2,
} from 'lucide-react';

const API_BASE = `${import.meta.env.VITE_API_URL || ''}/api`;

const tabs = [
    { id: 'image', label: 'Image Description', icon: Image },
    { id: 'speech', label: 'Speech to Text', icon: Mic },
    { id: 'simplify', label: 'Simplify Text', icon: FileText },
    { id: 'translate', label: 'Translate', icon: Languages },
];

const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'mr', name: 'Marathi' },
];

const loadingMessages = {
    image: [
        'Analyzing visual content…',
        'Identifying objects and scenes…',
        'Detecting potential hazards…',
        'Generating audio description…',
    ],
    speech: [
        'Running speech recognition…',
        'Processing audio waveform…',
        'Transcribing spoken words…',
        'Detecting language patterns…',
    ],
    simplify: [
        'Analyzing text complexity…',
        'Simplifying language structure…',
        'Reducing reading difficulty…',
        'Making content accessible…',
    ],
    translate: [
        'Detecting source language…',
        'Translating output…',
        'Ensuring cultural accuracy…',
        'Localizing content…',
    ],
};

function RotatingMessage({ messages }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 600);
        return () => clearInterval(timer);
    }, [messages]);

    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="text-sm opacity-60"
            >
                {messages[index]}
            </motion.p>
        </AnimatePresence>
    );
}

export default function LiveDemo() {
    const [activeTab, setActiveTab] = useState('image');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [selectedLang, setSelectedLang] = useState('hi');
    const [dragOver, setDragOver] = useState(false);

    const simulateAPI = async (endpoint, body = {}) => {
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch(`${API_BASE}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            setResult(data);
        } catch {
            // Mock data when backend is not running
            await new Promise((r) => setTimeout(r, 1500 + Math.random() * 500));
            const mocks = {
                '/upload-image': {
                    success: true,
                    type: 'crisis',
                    data: {
                        description: 'A person walking through a busy street market with colorful stalls selling fruits and vegetables. The scene is vibrant with natural sunlight.',
                        confidence: 0.94,
                        objects_detected: ['person', 'market stall', 'fruits', 'vegetables', 'sunlight'],
                        crisis_check: { is_crisis: true, threat: 'Fire detected near stall #3', severity: 'HIGH' },
                    },
                    timestamp: new Date().toISOString(),
                    version: '1.0',
                },
                '/speech-to-text': {
                    success: true,
                    type: 'normal',
                    data: {
                        transcript: 'Hello, welcome to SenseBridge AI. This system helps bridge accessibility gaps for everyone.',
                        confidence: 0.97,
                        language_detected: 'English',
                        duration_seconds: 4.2,
                    },
                    timestamp: new Date().toISOString(),
                    version: '1.0',
                },
                '/simplify-text': {
                    success: true,
                    type: 'normal',
                    data: {
                        original: textInput || 'The implementation of sophisticated algorithms...',
                        simplified: textInput
                            ? 'This text has been made easier to read and understand. Key ideas are presented in simple words.'
                            : 'Using smart computer programs to solve hard problems in a simple way.',
                        reading_level: 'Grade 5',
                        complexity_reduction: '62%',
                    },
                    timestamp: new Date().toISOString(),
                    version: '1.0',
                },
                '/translate': {
                    success: true,
                    type: 'normal',
                    data: {
                        original: textInput || 'Accessibility is a fundamental human right.',
                        translated: selectedLang === 'hi' ? 'सुलभता एक मौलिक मानव अधिकार है।'
                            : selectedLang === 'ta' ? 'அணுகல்தன்மை ஒரு அடிப்படை மனித உரிமை.'
                                : selectedLang === 'te' ? 'ప్రాప్యత ఒక ప్రాథమిక మానవ హక్కు.'
                                    : selectedLang === 'mr' ? 'सुलभता हा मूलभूत मानवी अधिकार आहे.'
                                        : 'Accessibility is a fundamental human right.',
                        source_language: 'English',
                        target_language: languageOptions.find((l) => l.code === selectedLang)?.name,
                    },
                    timestamp: new Date().toISOString(),
                    version: '1.0',
                },
            };
            setResult(mocks[endpoint]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        const endpoints = {
            image: '/upload-image',
            speech: '/speech-to-text',
            simplify: '/simplify-text',
            translate: '/translate',
        };
        simulateAPI(endpoints[activeTab], {
            text: textInput,
            language: selectedLang,
        });
    };

    const isCrisis = result?.type === 'crisis';

    return (
        <section id="demo" className="relative py-24 md:py-32 bg-[var(--bg-secondary)]" aria-label="Live Demo">
            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUp} className="text-center text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                        See It In Action
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Try <span className="gradient-text">SenseBridge AI</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="section-subheading">
                        Experience the accessibility engine live. Upload, process, and see AI-powered results in real-time.
                    </motion.p>

                    <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 mb-8 justify-center">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => { setActiveTab(tab.id); setResult(null); }}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                                        : 'glass hover:border-primary-500/50'
                                        }`}
                                    aria-pressed={activeTab === tab.id}
                                >
                                    <tab.icon size={16} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="glass-card p-8 mb-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {activeTab === 'image' && (
                                        <div
                                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                            onDragLeave={() => setDragOver(false)}
                                            onDrop={(e) => { e.preventDefault(); setDragOver(false); handleSubmit(); }}
                                            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${dragOver
                                                ? 'border-primary-500 bg-primary-500/10'
                                                : 'border-[var(--border-color)] hover:border-primary-500/50'
                                                }`}
                                            onClick={handleSubmit}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                            aria-label="Upload image area. Click or drag and drop to analyze an image."
                                        >
                                            <Upload size={40} className="mx-auto mb-4 opacity-40" />
                                            <p className="font-medium mb-1">Click or drag & drop an image</p>
                                            <p className="text-sm opacity-50">Supports JPG, PNG, WebP</p>
                                        </div>
                                    )}

                                    {activeTab === 'speech' && (
                                        <div className="text-center py-8">
                                            <motion.button
                                                onClick={handleSubmit}
                                                whileHover={buttonHover}
                                                whileTap={buttonTap}
                                                className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 shadow-glow"
                                                aria-label="Record speech"
                                            >
                                                <Mic size={36} className="text-white" />
                                            </motion.button>
                                            <p className="font-medium">Click to record speech</p>
                                            <p className="text-sm opacity-50 mt-1">Simulated speech recognition</p>
                                        </div>
                                    )}

                                    {(activeTab === 'simplify' || activeTab === 'translate') && (
                                        <div className="space-y-4">
                                            <textarea
                                                value={textInput}
                                                onChange={(e) => setTextInput(e.target.value)}
                                                placeholder={
                                                    activeTab === 'simplify'
                                                        ? 'Enter complex text to simplify...'
                                                        : 'Enter text to translate...'
                                                }
                                                className="w-full h-32 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-body"
                                                aria-label={activeTab === 'simplify' ? 'Text to simplify' : 'Text to translate'}
                                            />
                                            {activeTab === 'translate' && (
                                                <div className="relative inline-block">
                                                    <select
                                                        value={selectedLang}
                                                        onChange={(e) => setSelectedLang(e.target.value)}
                                                        className="appearance-none px-4 py-2 pr-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-primary-500/50 font-body text-sm"
                                                        aria-label="Target language"
                                                    >
                                                        {languageOptions.map((lang) => (
                                                            <option key={lang.code} value={lang.code}>{lang.name}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Submit Button */}
                            {(activeTab !== 'image') && (
                                <motion.button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    whileHover={!loading ? buttonHover : {}}
                                    whileTap={!loading ? buttonTap : {}}
                                    className="btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Process with AI"
                                >
                                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                                    {loading ? 'Processing...' : 'Process with AI'}
                                </motion.button>
                            )}
                        </div>

                        {/* Loading State with Rotating Messages */}
                        <AnimatePresence>
                            {loading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="glass-card p-8 text-center"
                                >
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <Loader2 size={24} className="animate-spin gradient-text" />
                                        <span className="font-heading font-bold text-lg">AI Processing</span>
                                    </div>
                                    <RotatingMessage messages={loadingMessages[activeTab]} />
                                    <div className="mt-5 h-1 max-w-xs mx-auto rounded-full bg-[var(--border-color)] overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 2, ease: 'easeInOut' }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Result — Conditional Styling */}
                        <AnimatePresence>
                            {result && !loading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isCrisis ? { opacity: 1, y: 0, x: [0, -3, 3, -3, 3, 0] } : { opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={isCrisis ? { x: { duration: 0.4, delay: 0.2 } } : {}}
                                    className={`rounded-[20px] p-8 border backdrop-blur-xl ${isCrisis
                                        ? 'bg-red-500/5 border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.15)]'
                                        : 'glass-card'
                                        }`}
                                >
                                    {/* Result header */}
                                    <div className="flex items-center gap-2 mb-6">
                                        {isCrisis ? (
                                            <>
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    <AlertTriangle size={18} className="text-red-400" />
                                                </motion.div>
                                                <span className="text-sm font-bold text-red-400">⚠ CRISIS DETECTED</span>
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle2 size={16} className="text-green-400" />
                                                <span className="text-sm font-medium text-green-400">Result Ready</span>
                                            </>
                                        )}
                                        <span className="text-xs opacity-40 ml-auto">v{result.version}</span>
                                    </div>

                                    {/* Result data */}
                                    <div className="space-y-3">
                                        {result.data && Object.entries(result.data).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className={`flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded-xl ${isCrisis
                                                    ? 'bg-red-500/5 border border-red-500/10'
                                                    : 'bg-[var(--bg-primary)]/50'
                                                    }`}
                                            >
                                                <span className={`text-xs font-medium uppercase tracking-wider min-w-[140px] ${isCrisis ? 'text-red-400' : 'text-primary-400'
                                                    }`}>
                                                    {key.replace(/_/g, ' ')}
                                                </span>
                                                <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                                    {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
