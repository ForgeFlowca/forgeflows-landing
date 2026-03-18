import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Zap, ChevronRight, Github, Twitter, Linkedin } from 'lucide-react';

const PublicLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logo.png" alt="ForgeFlows Logo" className="w-8 h-8 object-contain" />
                        <span className="font-bold text-2xl tracking-tight italic text-white flex items-center mt-1">
                            <span className="text-blue-500">Forge</span>Flows
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/how-it-works" className={`text-sm font-medium transition-colors ${location.pathname === '/how-it-works' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>How It Works</Link>
                        <Link to="/about" className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>About Us</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/waitlist" className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Waitlist
                        </Link>
                        <Link to="/waitlist" className="bg-white text-slate-950 hover:bg-slate-200 text-sm font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 group">
                            Join Waitlist <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <Link to="/" className="flex items-center gap-2 mb-4">
                                <img src="/logo.png" alt="ForgeFlows Logo" className="w-6 h-6 object-contain" />
                                <span className="font-bold text-xl tracking-tight italic text-white flex items-center mt-1">
                                    <span className="text-blue-500">Forge</span>Flows
                                </span>
                            </Link>
                            <p className="text-slate-400 text-sm max-w-sm mb-6">
                                The operating system for distributed manufacturing. Connecting buyers with elite machine shops through structured data and AI.
                            </p>
                            <div className="flex gap-4">
                                {/* <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"><Twitter className="w-4 h-4" /></a> */}
                                {/* <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"><Linkedin className="w-4 h-4" /></a> */}
                                {/* <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"><Github className="w-4 h-4" /></a> */}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white mb-4">Platform</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
                                <li><Link to="/waitlist" className="text-slate-400 hover:text-white transition-colors">For Buyers</Link></li>
                                <li><Link to="/waitlist" className="text-slate-400 hover:text-white transition-colors">For Suppliers</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white mb-4">Company</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                                {/* <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li> */}
                                {/* <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>© {new Date().getFullYear()} ForgeFlows Inc. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PublicLayout;
