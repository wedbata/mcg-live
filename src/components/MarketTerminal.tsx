import React, { useState } from 'react';
import type { CryptoAsset } from '../types';
import { TrendingUp, TrendingDown, Star, ExternalLink, Activity } from 'lucide-react';

interface MarketTerminalProps {
  assets: CryptoAsset[];
}

export const MarketTerminal: React.FC<MarketTerminalProps> = ({ assets }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sponsor' | 'major' | 'icm'>('all');

  const filteredAssets = assets.filter(asset => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'sponsor') return asset.isSponsor;
    return asset.category === activeCategory;
  });

  return (
    <section id="market-terminal" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Real-time Feeds
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight text-balance">
            Market Terminal & Sponsor Token Watch
          </h2>
        </div>

        {/* Filter Pills */}
        <div role="tablist" aria-label="Token Categories" className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {(['all', 'sponsor', 'major', 'icm'] as const).map(cat => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls="market-table"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black font-semibold shadow-lg shadow-emerald-500/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'all' ? 'All Tokens' : cat === 'sponsor' ? '⭐ Sponsor Tokens' : cat === 'major' ? '👑 Majors' : '⚡ ICM Leaders'}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Table */}
      <div className="rounded-2xl border border-white/10 bg-[#0A0E1A] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table id="market-table" className="w-full text-left text-sm text-gray-300">
            <caption className="sr-only">Live Crypto and Sponsor Token Market Terminal</caption>
            <thead className="bg-[#0C1120] text-xs font-mono text-gray-400 uppercase border-b border-white/10">
              <tr>
                <th scope="col" className="py-3 px-4">Asset</th>
                <th scope="col" className="py-3 px-4">Price</th>
                <th scope="col" className="py-3 px-4">24h Change</th>
                <th scope="col" className="py-3 px-4 hidden sm:table-cell">24h Volume</th>
                <th scope="col" className="py-3 px-4 hidden md:table-cell">Market Cap</th>
                <th scope="col" className="py-3 px-4">Sponsor Perk / Utility</th>
                <th scope="col" className="py-3 px-4 text-right">Trade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              {filteredAssets.map(asset => {
                const isPositive = asset.change24h >= 0;
                return (
                  <tr key={asset.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span translate="no" className="font-bold text-white">{asset.symbol}</span>
                          {asset.isSponsor && (
                            <span className="px-1.5 py-0.5 text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded flex items-center gap-0.5">
                              <Star className="w-2.5 h-2.5 fill-amber-400" aria-hidden="true" />
                              SPONSOR
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{asset.name}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-bold text-white tabular-nums">
                      ${asset.price > 1000 ? asset.price.toLocaleString() : asset.price.toFixed(2)}
                    </td>

                    <td className="py-4 px-4 tabular-nums">
                      <span
                        className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded ${
                          isPositive
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-red-400 bg-red-500/10'
                        }`}
                      >
                        {isPositive ? (
                          <TrendingUp className="w-3 h-3 mr-1" aria-hidden="true" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" aria-hidden="true" />
                        )}
                        {isPositive ? '+' : ''}
                        {asset.change24h}%
                      </span>
                    </td>

                    <td className="py-4 px-4 text-xs text-gray-400 hidden sm:table-cell tabular-nums">
                      ${(asset.volume24h / 1000000).toFixed(1)}M
                    </td>

                    <td className="py-4 px-4 text-xs text-gray-400 hidden md:table-cell tabular-nums">
                      ${(asset.marketCap / 1000000000).toFixed(2)}B
                    </td>

                    <td className="py-4 px-4 text-xs text-cyan-400">
                      {asset.sponsorPerk || '—'}
                    </td>

                    <td className="py-4 px-4 text-right">
                      <a
                        href={asset.dexUrl || "https://hyperliquid.xyz"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Trade ${asset.symbol} on DEX (opens in new tab)`}
                        className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-emerald-400 bg-white/5 hover:bg-emerald-500/10 px-2.5 py-1 rounded transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                      >
                        <span>Dex</span> <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
