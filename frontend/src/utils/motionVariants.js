/**
 * SenseBridge AI — Motion Variants System
 * Centralized Framer Motion animation configurations
 */

// Check for reduced motion preference
const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const duration = prefersReducedMotion ? 0 : undefined;

// ============================
// Fade Up (primary reveal)
// ============================
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration ?? 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// ============================
// Fade In
// ============================
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: duration ?? 0.6 },
    },
};

// ============================
// Scale Up
// ============================
export const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: duration ?? 0.5, ease: 'easeOut' },
    },
};

// ============================
// Slide from Left
// ============================
export const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: duration ?? 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// ============================
// Slide from Right
// ============================
export const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: duration ?? 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// ============================
// Stagger Container
// ============================
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.12,
            delayChildren: prefersReducedMotion ? 0 : 0.1,
        },
    },
};

export const staggerContainerFast = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.08,
            delayChildren: prefersReducedMotion ? 0 : 0.05,
        },
    },
};

// ============================
// Stagger Item
// ============================
export const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration ?? 0.5, ease: 'easeOut' },
    },
};

// ============================
// Card Hover
// ============================
export const cardHover = {
    scale: 1.03,
    transition: { duration: 0.3, ease: 'easeOut' },
};

export const cardTap = {
    scale: 0.98,
};

// ============================
// Button Hover
// ============================
export const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
};

export const buttonTap = {
    scale: 0.95,
};

// ============================
// Glow Pulse
// ============================
export const glowPulse = {
    animate: {
        boxShadow: [
            '0 0 20px rgba(139, 92, 246, 0.2)',
            '0 0 40px rgba(139, 92, 246, 0.4)',
            '0 0 20px rgba(139, 92, 246, 0.2)',
        ],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
};

// ============================
// Float
// ============================
export const float = {
    animate: {
        y: [-10, 10, -10],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    },
};

// ============================
// Viewport settings
// ============================
export const viewportOnce = { once: true, amount: 0.2 };
export const viewportRepeat = { once: false, amount: 0.2 };
