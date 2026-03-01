import { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhyNow from './components/WhyNow';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import LiveDemo from './components/LiveDemo';
import CrisisMode from './components/CrisisMode';
import Architecture from './components/Architecture';
import MultiLanguage from './components/MultiLanguage';
import UseCases from './components/UseCases';
import ImpactMetrics from './components/ImpactMetrics';
import SocialImpact from './components/SocialImpact';
import Innovation from './components/Innovation';
import FutureScope from './components/FutureScope';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
    // Reset scroll position on page load/reload
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
            <ScrollProgress />
            <Navbar />

            <main id="main-content">
                <Hero />

                <div className="section-divider" />
                <Problem />

                <WhyNow />

                <Solution />

                <HowItWorks />

                <LiveDemo />

                <CrisisMode />

                <div className="section-divider" />
                <Architecture />

                <MultiLanguage />

                <div className="section-divider" />
                <UseCases />

                <ImpactMetrics />

                <SocialImpact />

                <Innovation />

                <div className="section-divider" />
                <FutureScope />

                <Team />

                <CTA />
            </main>

            <Footer />
        </div>
    );
}
