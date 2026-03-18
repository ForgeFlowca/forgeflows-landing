import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import LandingPage from './LandingPage';
import HowItWorksPage from './HowItWorksPage';
import AboutPage from './AboutPage';
import WaitlistPage from './WaitlistPage';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate brief loading for smooth page transition
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-white text-center">
                    <div className="inline-flex mb-4">
                        <img src="/logo.png" alt="ForgeFlows" className="w-12 h-12 animate-pulse" />
                    </div>
                    <p className="text-slate-400">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/waitlist" element={<WaitlistPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
