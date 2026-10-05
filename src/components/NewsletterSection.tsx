import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00F59B', '#00D8F6', '#F59E0B']
      });
    } catch {
      // Confetti fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-20">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0C1120] to-[#0A0E1A] p-8 md:p-12 shadow-2xl">

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Bell className="w-3.5 h-3.5" aria-hidden="true" />
            <span>NEWSLETTER — COMING SOON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3 text-balance">
            The MCG Alpha Dispatch
          </h2>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed text-pretty">
            The 5-minute daily breakdown of Internet Capital Markets, sponsor token mechanics, and institutional liquidity flows delivered straight to your inbox before market open.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for VIP waitlist
                </label>
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  spellCheck={false}
                  placeholder="Enter your email address…"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-[#06080F] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                aria-label="Join early VIP newsletter waitlist"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-black font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <span>Join Waitlist</span>
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </form>
          ) : (
            <div
              role="status"
              aria-live="polite"
              className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center gap-2 text-xs font-mono"
            >
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              <span>You’re on the VIP waitlist! We’ll notify you the instant Issue #001 drops.</span>
            </div>
          )}

          <div className="mt-6 flex items-center justify-center gap-4 text-[11px] font-mono text-gray-500 tabular-nums">
            <span>✓ 48,290+ on waitlist</span>
            <span aria-hidden="true">•</span>
            <span>✓ No spam ever</span>
            <span aria-hidden="true">•</span>
            <span>✓ Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
