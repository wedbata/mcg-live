import React from 'react';
import type { CryptoAsset } from '../types';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';

interface LiveTickerBarProps {
  assets: CryptoAsset[];
  onSelectAsset?: (asset: CryptoAsset) => void;
}

export const LiveTickerBar: React.FC<LiveTickerBarProps> = ({ assets, onSelectAsset }) => {
  return (
    <div
      aria-label="Live streaming crypto token prices"
      className="w-full bg-[#04060A] border-b border-white/5 py-2 overflow-hidden flex items-center select-none"
    >
      <div className="flex items-center px-4 shrink-0 border-r border-white/10 pr-4 mr-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" aria-hidden="true"></span>
          LIVE FEED
        </span>
      </div>

      {/* Marquee area */}
      <div className="flex space-x-6 animate-marquee motion-reduce:animate-none whitespace-nowrap">
        {assets.concat(assets).map((asset, idx) => {
          const isPositive = asset.change24h >= 0;
          return (
            <button
              type="button"
              key={`${asset.id}-${idx}`}
              onClick={() => onSelectAsset?.(asset)}
              aria-label={`${asset.name} (${asset.symbol}) price: $${asset.price.toLocaleString()}, 24 hour change: ${isPositive ? '+' : ''}${asset.change24h}%`}
              className="inline-flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-0.5 rounded transition-colors text-xs font-mono focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              {asset.isSponsor && (
                <span className="flex items-center text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1 rounded">
                  <Star className="w-2.5 h-2.5 mr-0.5 fill-amber-400" aria-hidden="true" />
                  SPONSOR
                </span>
              )}
              <span translate="no" className="font-bold text-gray-200">{asset.symbol}</span>
              <span className="text-gray-300 tabular-nums">
                ${asset.price > 1000 ? asset.price.toLocaleString() : asset.price.toFixed(2)}
              </span>
              <span
                className={`flex items-center text-[11px] tabular-nums ${
                  isPositive ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="w-3 h-3 mr-0.5" aria-hidden="true" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-0.5" aria-hidden="true" />
                )}
                {isPositive ? '+' : ''}
                {asset.change24h}%
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
