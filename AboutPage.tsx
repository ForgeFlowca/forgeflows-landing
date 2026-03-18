import React from 'react';
import { Target, Zap, ShieldCheck, Cpu, BarChart3, Binary, ShieldAlert } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-slate-950">
            {/* Hero */}
            <section className="pt-32 pb-24 px-6 text-center border-b border-white/5 bg-slate-900/40">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Digitizing the B2B<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-50">
                        Manufacturing Lifecycle
                    </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    To bridge the gap between design and production by digitizing the B2B manufacturing lifecycle through AI-powered technical analysis, intelligent supplier matching, and automated governance.
                </p>
            </section>

            {/* The Intelligence Layer */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">The Intelligence Layer</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        ForgeFlows is built on a <span className="text-blue-400 font-semibold">Learn-to-Improve Flywheel</span>: every transaction, correction, and outcome feeds back into the platform's core intelligence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <Cpu className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Technical Extraction</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Predictive extraction of material specs, GD&T tolerances, and surface finishes using vision models and geometric analysis.
                        </p>
                    </div>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors group">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                            <Binary className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Smart Match</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Multi-dimensional ranking based on machine envelopes, material history, and real-time capacity signals.
                        </p>
                    </div>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-colors group">
                        <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                            <BarChart3 className="w-6 h-6 text-violet-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Predictive Ops</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Helping sellers draft accurate quotes in minutes by surfacing similar past jobs and predictive price ranges.
                        </p>
                    </div>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 transition-colors group">
                        <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-500/20 transition-colors">
                            <ShieldAlert className="w-6 h-6 text-fuchsia-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Automated Governance</h3>
                        <p className="text-slate-400 leading-relaxed">
                            AI-assisted flagging of contract risks and objective, data-driven performance scoring.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-950 p-8 rounded-2xl border border-white/5">
                            <Zap className="w-10 h-10 text-amber-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Speed through Structure</h3>
                            <p className="text-slate-400">Structured data moves faster than PDFs and emails. We standardize everything from tolerances to lead times so both sides can move instantly.</p>
                        </div>
                        <div className="bg-slate-950 p-8 rounded-2xl border border-white/5">
                            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Quality without Compromise</h3>
                            <p className="text-slate-400">We don't race to the bottom on price. We connect buyers with shops that actually have the right machines and certifications for the job.</p>
                        </div>
                        <div className="bg-slate-950 p-8 rounded-2xl border border-white/5">
                            <Target className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Radical Transparency</h3>
                            <p className="text-slate-400">No hidden markup, no blind RFQs. Both Generators and Enablers have full visibility into the match scoring, bids, and technical requirements.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

