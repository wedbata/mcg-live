import React, { useState } from 'react';
import { Play, Radio, Search, Volume2, VolumeX, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenSponsorModal?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenSponsorModal,
  soundEnabled = true,
  onToggleSound,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#06080F]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo & Live Badge */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="MCG.live Home"
              className="flex items-center gap-2 group rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080F] focus-visible:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1px]">
                <div className="w-full h-full bg-[#07090E] rounded-xl flex items-center justify-center">
                  <span
                    translate="no"
                    className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-lg"
                  >
                    MCG
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  translate="no"
                  className="font-display font-bold text-white text-lg tracking-tight leading-none group-hover:text-emerald-400 transition-colors"
                >
                  MCG.LIVE
                </span>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest leading-tight">
                  CAPITAL MARKETS
                </span>
              </div>
            </a>

            {/* Pulsing Live indicator */}
            <div
              className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono"
              aria-label="14,892 live viewers"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="tabular-nums">14,892 VIEWERS</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a
              href="#broadcast"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 rounded focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <Radio className="w-4 h-4 text-red-400" aria-hidden="true" />
              <span>Live Show</span>
            </a>
            <a
              href="#market-terminal"
              className="hover:text-emerald-400 transition-colors rounded focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              Market Terminal
            </a>
            <a
              href="#episodes"
              className="hover:text-emerald-400 transition-colors rounded focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              Episodes & Vault
            </a>
            <a
              href="#sponsors"
              className="hover:text-emerald-400 transition-colors rounded focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              Sponsors
            </a>
            <a
              href="#newsletter"
              className="hover:text-emerald-400 transition-colors text-cyan-400 font-mono text-xs px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              Alpha Dispatch (Soon)
            </a>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenSearch && (
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                aria-label="Search episodes and alpha"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>
            )}

            {onToggleSound && (
              <button
                type="button"
                onClick={onToggleSound}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                aria-label={soundEnabled ? "Mute broadcast audio" : "Unmute broadcast audio"}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                ) : (
                  <VolumeX className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={onOpenSponsorModal}
              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              Partner Deck
            </button>

            <a
              href="#broadcast"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors shadow-lg shadow-emerald-500/20 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <Play className="w-3.5 h-3.5 fill-black" aria-hidden="true" />
              <span>Watch Live</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#0A0E1A] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#broadcast"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            🔴 Live Show
          </a>
          <a
            href="#market-terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            📊 Market Terminal
          </a>
          <a
            href="#episodes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            📺 Episodes & Vault
          </a>
          <a
            href="#sponsors"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            💎 Sponsors & Partners
          </a>
          <a
            href="#newsletter"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-cyan-400 hover:bg-cyan-500/10 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
          >
            ⚡ Alpha Dispatch (Coming Soon)
          </a>
        </div>
      )}
    </header>
  );
};
