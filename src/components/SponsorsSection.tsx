import React from 'react';
import { Star, Gift, ExternalLink } from 'lucide-react';
import type { Sponsor } from '../types';

const MOCK_SPONSORS: Sponsor[] = [
  {
    id: 'hyperliquid',
    name: 'Hyperliquid',
    tier: 'Title Partner',
    tagline: 'The Premier High-Performance L1 for On-Chain Derivatives',
    description: 'Zero-gas native order book DEX delivering sub-second finality and deep liquidity for global internet capital markets.',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
    bannerImage: '',
    websiteUrl: 'https://hyperliquid.xyz',
    twitterUrl: 'https://x.com/hyperliquidX',
    tokenTicker: '$HYPER',
    perkTitle: '0% Taker Fee Tier',
    perkDescription: 'Exclusive 15% discount on trading fees for MCG listeners using code MCGVIP.',
    promoCode: 'MCGVIP',
    segmentName: 'The Hyperliquid Liquidity Minute',
  },
  {
    id: 'berachain',
    name: 'Berachain',
    tier: 'Segment Sponsor',
    tagline: 'Proof of Liquidity EVM Compatible Layer 1',
    description: 'Aligning network security and liquidity into a single composable consensus flywheel.',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&auto=format&fit=crop&q=80',
    bannerImage: '',
    websiteUrl: 'https://berachain.com',
    twitterUrl: 'https://x.com/berachain',
    tokenTicker: '$BERA',
    perkTitle: 'Exclusive Testnet Guild Roles',
    perkDescription: 'Priority access to upcoming ecosystem drops and testnet campaigns.',
    segmentName: 'Proof of Liquidity Desk',
  }
];

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
          <span>OFFICIAL ECOSYSTEM PARTNERS</span>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight text-balance">
          Powering the MCG.Live Broadcast
        </h2>
        <p className="mt-2 text-sm text-gray-400 text-pretty">
          We collaborate with the world’s most innovative protocols shaping modern Internet Capital Markets.
        </p>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {MOCK_SPONSORS.map(sponsor => (
          <article
            key={sponsor.id}
            className="p-6 rounded-2xl border border-white/10 bg-[#0A0E1A] hover:border-amber-500/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  {sponsor.tier}
                </span>
                {sponsor.tokenTicker && (
                  <span className="text-xs font-mono text-gray-400">
                    Token: <strong translate="no" className="text-white">{sponsor.tokenTicker}</strong>
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight">{sponsor.name}</h3>
                {sponsor.websiteUrl && (
                  <a
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${sponsor.name} website (opens in new tab)`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded px-1.5 py-0.5"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-400 font-mono mb-3">{sponsor.tagline}</p>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                {sponsor.description}
              </p>
            </div>

            {/* Perk Box */}
            <div className="p-3.5 rounded-xl bg-[#0C1120] border border-white/5 flex items-start gap-3">
              <Gift className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-xs font-bold text-emerald-400 mb-0.5">
                  MCG Listener Perk: {sponsor.perkTitle}
                </div>
                <div className="text-[11px] text-gray-400">
                  {sponsor.perkDescription}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
