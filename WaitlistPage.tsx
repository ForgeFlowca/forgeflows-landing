import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from './services/supabase';

const WaitlistPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<'GENERATOR' | 'ENABLER'>('GENERATOR');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Insert into waitlist table
            const { error: insertError } = await supabase
                .from('waitlist')
                .insert([
                    {
                        email: email.toLowerCase(),
                        role: role,
                        created_at: new Date().toISOString(),
                    }
                ]);

            if (insertError) {
                if (insertError.code === '23505') {
                    setError('This email is already on the waitlist!');
                } else {
                    setError(insertError.message);
                }
                setLoading(false);
                return;
            }

            setSuccess(true);
            setEmail('');
            setLoading(false);

            // Reset success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-950 flex-1 flex flex-col justify-center py-12 px-6">
            <div className="max-w-xl mx-auto w-full">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex justify-center mb-6">
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                            <img src="/logo.png" alt="ForgeFlows Logo" className="w-12 h-12 object-contain" />
                        </div>
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-2">Join the Waitlist</h1>
                    <p className="text-slate-400 text-lg">Be first to access the ForgeFlows manufacturing network.</p>
                </div>

                {success ? (
                    <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">You're on the list!</h2>
                        <p className="text-slate-400 mb-8">We'll reach out as soon as your account is ready. In the meantime, check out how ForgeFlows works.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/how-it-works" className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors text-center">
                                See How It Works
                            </Link>
                            <Link to="/" className="flex-1 px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors text-center border border-slate-700">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
                        {/* Role selector */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-slate-300 mb-4">I'm interested in...</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setRole('GENERATOR')}
                                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                                        role === 'GENERATOR'
                                            ? 'border-blue-500 bg-blue-500/10'
                                            : 'border-white/5 bg-slate-950 hover:border-white/20'
                                    }`}
                                >
                                    <div className={`font-semibold ${role === 'GENERATOR' ? 'text-white' : 'text-slate-400'}`}>
                                        Sourcing Parts
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">Buyer</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole('ENABLER')}
                                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                                        role === 'ENABLER'
                                            ? 'border-violet-500 bg-violet-500/10'
                                            : 'border-white/5 bg-slate-950 hover:border-white/20'
                                    }`}
                                >
                                    <div className={`font-semibold ${role === 'ENABLER' ? 'text-white' : 'text-slate-400'}`}>
                                        Manufacturing
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">Supplier</div>
                                </button>
                            </div>
                        </div>

                        {/* Error message */}
                        {error && (
                            <div className="mb-6 flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                {error}
                            </div>
                        )}

                        {/* Email input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl font-bold text-white transition-colors flex items-center justify-center gap-2 ${
                                role === 'GENERATOR'
                                    ? 'bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700'
                                    : 'bg-violet-600 hover:bg-violet-500 disabled:bg-violet-700'
                            } disabled:opacity-70`}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Joining...
                                </>
                            ) : (
                                'Join Waitlist'
                            )}
                        </button>

                        <p className="text-center text-slate-500 text-xs mt-6">
                            We respect your privacy. We'll only contact you about your ForgeFlows account.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default WaitlistPage;
