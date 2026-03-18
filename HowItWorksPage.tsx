import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, GitMerge, Search, LayoutList, MessageSquare, Award, ArrowRight, ClipboardClock, Star } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
    const navigate = useNavigate();

    const steps = [
        {
            icon: Upload,
            title: '1. Project Definition',
            description: 'Define your project requirements and extract features, tolerances, and other part geometries automatically from your 3D model or CAD technical drawing using our intelligent analysis engine.',
            color: 'blue'
        },
        {
            icon: GitMerge,
            title: '2. Structure Work Packages',
            description: 'Break down complex projects into biddable scopes. Organize parts into typed Work Packages: Manufacturing, Assembly, Finishing, Inspection, Packaging, Shipping, Design Optimization, or Storage.',
            color: 'indigo'
        },
        {
            icon: Search,
            title: '3. Smart Marketplace Match',
            description: 'Publish your project to be instantly analyzed against our global network. Our Smart Match algorithm ranks Enablers based on machine envelopes, material history, real-time capacity, and certifications.',
            color: 'violet'
        },
        {
            icon: LayoutList,
            title: '4. Standardized Bidding',
            description: 'Compare normalized bids side-by-side. Evaluate detailed technical proposals, quantity-based price tiers, and capacity declarations without digging through fragmented email chains.',
            color: 'fuchsia'
        },
        {
            icon: MessageSquare,
            title: '5. Technical Negotiation',
            description: 'Message suppliers directly on specific Work Packages to clarify DFM issues, request material adjustments, or negotiate partial scope awards all within the platform context.',
            color: 'rose'
        },
        {
            icon: Award,
            title: '6. Award & Contract',
            description: 'Accept the winning bids with a single click. ForgeFlows auto-generates master agreements and supplier sub-contracts with milestone-based payment schedules and verification oracles.',
            color: 'emerald'
        },
        {
            icon: ClipboardClock,
            title: '7. Production Planning',
            description: 'Manage production via interactive Gantt charts with dependency tracking. Suppliers post real-time status updates, giving you instant visibility into progress, quality, and logistics milestones.',
            color: 'blue'
        },
        {
            icon: Star,
            title: '8. Performance Analytics',
            description: 'Review performance across Quality, Lead Time, and Communication. Every transaction feeds back into our data-driven scoring system to ensure high-performance standards are maintained.',
            color: 'amber'
        }
    ];

    return (
        <div className="bg-slate-950">
            {/* Header */}
            <div className="pt-32 pb-20 text-center px-6 border-b border-white/5 bg-slate-900/50">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How ForgeFlows Works</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    From technical CAD analysis to an awarded manufacturing contract in eight intelligent, automated steps.
                </p>
            </div>

            {/* Steps Timeline */}
            <div className="max-w-5xl mx-auto px-6 py-24 relative">
                <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-px bg-white/10 -translate-x-1/2" />

                <div className="space-y-24">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                                {/* Center Node for desktop */}
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border-4 border-slate-900 rounded-full items-center justify-center z-10">
                                    <div className={`w-3 h-3 rounded-full bg-${step.color}-500`} />
                                </div>

                                <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <div className={`bg-slate-900 border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-${step.color}-500/30 transition-colors w-full md:max-w-md`}>
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-${step.color}-500/10 rounded-full blur-3xl`} />
                                        <div className={`w-14 h-14 bg-${step.color}-500/10 rounded-2xl flex items-center justify-center mb-6 border border-${step.color}-500/20`}>
                                            <Icon className={`w-7 h-7 text-${step.color}-400`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
                                    </div>
                                </div>

                                <div className="hidden md:block w-1/2" />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <div className="py-24 border-t border-white/5 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Ready to transform your procurement?</h2>
                <button
                    onClick={() => navigate('/waitlist')}
                    className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-full font-bold transition-all inline-flex items-center gap-2 group text-lg"
                >
                    Join the Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default HowItWorksPage;

