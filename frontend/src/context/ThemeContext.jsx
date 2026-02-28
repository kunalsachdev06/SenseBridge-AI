import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('sb-dark-mode');
            if (saved !== null) return JSON.parse(saved);
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    const [largeText, setLargeText] = useState(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('sb-large-text') || 'false');
        }
        return false;
    });

    const [highContrast, setHighContrast] = useState(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('sb-high-contrast') || 'false');
        }
        return false;
    });

    const [reduceMotion, setReduceMotion] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('sb-reduce-motion');
            if (saved !== null) return JSON.parse(saved);
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('sb-dark-mode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const root = document.documentElement;
        if (largeText) {
            root.classList.add('large-text');
        } else {
            root.classList.remove('large-text');
        }
        localStorage.setItem('sb-large-text', JSON.stringify(largeText));
    }, [largeText]);

    useEffect(() => {
        const root = document.documentElement;
        if (highContrast) {
            root.classList.add('high-contrast');
        } else {
            root.classList.remove('high-contrast');
        }
        localStorage.setItem('sb-high-contrast', JSON.stringify(highContrast));
    }, [highContrast]);

    useEffect(() => {
        const root = document.documentElement;
        if (reduceMotion) {
            root.classList.add('reduce-motion');
        } else {
            root.classList.remove('reduce-motion');
        }
        localStorage.setItem('sb-reduce-motion', JSON.stringify(reduceMotion));
    }, [reduceMotion]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    const toggleLargeText = () => setLargeText((prev) => !prev);
    const toggleHighContrast = () => setHighContrast((prev) => !prev);
    const toggleReduceMotion = () => setReduceMotion((prev) => !prev);

    const resetSettings = () => {
        setLargeText(false);
        setHighContrast(false);
        setReduceMotion(false);
    };

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                largeText,
                highContrast,
                reduceMotion,
                toggleDarkMode,
                toggleLargeText,
                toggleHighContrast,
                toggleReduceMotion,
                resetSettings,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

