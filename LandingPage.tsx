import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Brain, Star, ShieldCheck, MessageSquare, ArrowRight, Activity, Users, FileText } from 'lucide-react';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                        ForgeFlows is in development — <a href="/waitlist" className="text-blue-400 hover:text-blue-300">join the waitlist</a>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
                        Manufacturing, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-50">
                            Intelligently Connected
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                        The operating system for distributed manufacturing. Buyers stop guessing about shop capabilities. Suppliers stop wasting time on jobs they can't do.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/waitlist')}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-200 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group"
                        >
                            Join Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('/how-it-works')}
                            className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white hover:bg-slate-700 rounded-full font-semibold transition-all border border-slate-700"
                        >
                            See How It Works
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="border-y border-white/5 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">2,500+</div>
                            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Verified Shops</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">$150M+</div>
                            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Project Value</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">12,000+</div>
                            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Drawings Analyzed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Avg Quality Score</div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Features Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Precision tools for precision manufacturing.</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Everything you need to source, negotiate, and award manufacturing projects with confidence.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                                <Brain className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Project Structuring</h3>
                            <p className="text-slate-400">Upload your technical drawing. AI extracts materials, tolerances, and finishes. You refine and structure the project. Our algorithm scores your RFQ and finds suppliers with proven capability to deliver.</p>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-colors">
                            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 border border-violet-500/20">
                                <Activity className="w-6 h-6 text-violet-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Smart Match Algorithm</h3>
                            <p className="text-slate-400">We algorithmically match projects to shops based on capabilities, machine specifications, and required certs. Only details are left to clear up.</p>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                                <FileText className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Structured Bid Builder</h3>
                            <p className="text-slate-400">Suppliers submit normalized bids with technical proposals, lead times, and price tiers. Compare bids apples-to-apples instantly.</p>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 border border-amber-500/20">
                                <MessageSquare className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">In-Platform Messaging</h3>
                            <p className="text-slate-400">Keep communication contextual. Message suppliers directly on work packages to clarify specs and negotiate partial scope.</p>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 border border-red-500/20">
                                <ShieldCheck className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Automated Contract Generation</h3>
                            <p className="text-slate-400">Contracts auto-generate directly from your RFQ. Use in-platform messaging to negotiate terms with suppliers. Every change is tracked and automatically reflected in the contract. No manual updates, no confusion.</p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                                <Star className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Performance Scoring</h3>
                            <p className="text-slate-400">After delivery, rate your supplier on quality, speed, and professionalism. Suppliers rate you on clear specifications and fair dealing. Real feedback builds real reputation. Everyone sees the scores, so trust is earned, not claimed.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Dual CTA */}
            <section className="py-24 bg-slate-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Choose your path</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">ForgeFlows connects the two sides of the manufacturing market into one seamless platform.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-slate-950 p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />
                            <div className="relative z-10">
                                <Users className="w-10 h-10 text-blue-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">I need parts made.</h3>
                                <p className="text-slate-400 mb-8">Find verified suppliers, compare competitive bids, and manage your production schedule.</p>
                                <Link to="/waitlist" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300">
                                    Join as a Buyer <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl group-hover:bg-violet-600/20 transition-colors" />
                            <div className="relative z-10">
                                <ShieldCheck className="w-10 h-10 text-violet-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">I manufacture parts.</h3>
                                <p className="text-slate-400 mb-8">Access pre-structured DFM-ready projects that perfectly match your machine capabilities.</p>
                                <Link to="/waitlist" className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300">
                                    Join as a Supplier <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to streamline your supply chain?</h2>
                    <p className="text-xl text-blue-100/80 mb-10">Join the smartest manufacturing network today.</p>
                    <button onClick={() => navigate('/waitlist')} className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-slate-100 transition-colors text-lg">
                        Join the Waitlist
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
