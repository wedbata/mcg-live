import React from 'react';
import { Video, Share2, Disc as Discord } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#04060A] text-gray-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span translate="no" className="font-display font-extrabold text-white text-lg tracking-tight">
              MCG.LIVE
            </span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed text-pretty">
            The premier live show dedicated to the study and alpha of Internet Capital Markets.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-mono text-white text-xs uppercase mb-3">Broadcast</h4>
          <ul className="space-y-2">
            <li>
              <a href="#broadcast" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded">
                Live Stage
              </a>
            </li>
            <li>
              <a href="#market-terminal" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded">
                Price Terminal
              </a>
            </li>
            <li>
              <a href="#episodes" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded">
                Video Archive
              </a>
            </li>
          </ul>
        </div>

        {/* Ecosystem */}
        <div>
          <h4 className="font-mono text-white text-xs uppercase mb-3">Ecosystem</h4>
          <ul className="space-y-2">
            <li>
              <a href="#sponsors" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded">
                Sponsors & Perks
              </a>
            </li>
            <li>
              <a href="#newsletter" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded">
                Alpha Dispatch
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-mono text-white text-xs uppercase mb-3">Connect</h4>
          <div className="flex items-center gap-3 text-gray-400">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit MCG.live YouTube channel (opens in new tab)"
              className="p-1.5 rounded-lg hover:text-red-400 hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <Video className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit MCG.live on X (opens in new tab)"
              className="p-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <Share2 className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Join MCG.live Discord community (opens in new tab)"
              className="p-1.5 rounded-lg hover:text-indigo-400 hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <Discord className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-600 gap-2 font-mono">
        <span>© 2026 MCG.live. All rights reserved. Not financial advice.</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
          <span>System Status: All Feeds Operational</span>
        </div>
      </div>
    </footer>
  );
};
