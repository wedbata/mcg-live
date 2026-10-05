import React, { useState } from 'react';
import { Play, Eye, Clock, Search, Sparkles } from 'lucide-react';
import type { Episode } from '../types';

const MOCK_EPISODES: Episode[] = [
  {
    id: '1',
    episodeNumber: 142,
    title: 'The $100B Attention Economy & Sponsor Token Liquidity Deep Dive',
    date: 'Oct 02, 2026',
    duration: '1h 14m',
    views: '45.2K',
    liveStatus: 'recent',
    youtubeId: 'dQw4w9WgXcQ',
    youtubeUrl: 'https://youtube.com',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80',
    description: 'Deep dive into decentralized capital formation, sponsor token utility, and on-chain liquidity routing.',
    hosts: [],
    guests: [],
    topics: ['Internet Capital Markets', 'Sponsor Alpha', 'Macro'],
    timestamps: [],
    alphaScore: 98,
    keyTakeaways: []
  },
  {
    id: '2',
    episodeNumber: 141,
    title: 'Parallel EVM Wars: Monad vs Berachain Proof of Liquidity',
    date: 'Sep 29, 2026',
    duration: '58m',
    views: '62.8K',
    liveStatus: 'archived',
    youtubeId: 'dQw4w9WgXcQ',
    youtubeUrl: 'https://youtube.com',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    description: 'Analyzing high-performance L1 throughput and new staking dynamics across modern crypto primitives.',
    hosts: [],
    guests: [],
    topics: ['L1 Wars', 'Monad', 'Berachain'],
    timestamps: [],
    alphaScore: 94,
    keyTakeaways: []
  },
  {
    id: '3',
    episodeNumber: 140,
    title: 'Hyperliquid vs Centralized Exchanges: The Future of On-Chain Perps',
    date: 'Sep 26, 2026',
    duration: '1h 05m',
    views: '38.9K',
    liveStatus: 'archived',
    youtubeId: 'dQw4w9WgXcQ',
    youtubeUrl: 'https://youtube.com',
    thumbnail: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&auto=format&fit=crop&q=80',
    description: 'Exploring custom L1 execution environments optimized specifically for financial derivatives.',
    hosts: [],
    guests: [],
    topics: ['Perps', 'DeFi', 'Hyperliquid'],
    timestamps: [],
    alphaScore: 91,
    keyTakeaways: []
  }
];

export const YouTubeVault: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic] = useState<string>('all');

  const filteredEpisodes = MOCK_EPISODES.filter(ep => {
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || ep.topics.includes(selectedTopic);
    return matchesSearch && matchesTopic;
  });

  return (
    <section id="episodes" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Episode Archive
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight text-balance">
            YouTube Shows & Video Vault
          </h2>
        </div>

        {/* Search & Topic Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <label htmlFor="vault-search-input" className="sr-only">
              Search episodes and alpha
            </label>
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              id="vault-search-input"
              name="search"
              type="search"
              autoComplete="off"
              spellCheck={false}
              placeholder="Search episodes…"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="bg-[#0A0E1A] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-400"
            />
          </div>
        </div>
      </div>

      {/* Grid of Episode Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEpisodes.map(ep => (
          <article
            key={ep.id}
            className="group rounded-2xl border border-white/10 bg-[#0A0E1A] overflow-hidden hover:border-emerald-500/40 transition-colors flex flex-col"
          >
            {/* Thumbnail */}
            <a
              href={ep.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch episode ${ep.episodeNumber}: ${ep.title} on YouTube`}
              className="relative aspect-video w-full overflow-hidden bg-black block focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <img
                src={ep.thumbnail}
                alt=""
                width={600}
                height={338}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/90 text-black flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                  <Play className="w-5 h-5 fill-black ml-0.5" aria-hidden="true" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 tabular-nums">
                EP #{ep.episodeNumber}
              </div>

              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-gray-300 flex items-center gap-1 tabular-nums">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>{ep.duration}</span>
              </div>
            </a>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs tabular-nums">
                  <span className="text-gray-500">{ep.date}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <Eye className="w-3 h-3" aria-hidden="true" />
                    <span>{ep.views}</span>
                  </span>
                </div>
                <h3 className="font-bold text-white text-base leading-snug group-hover:text-emerald-400 transition-colors mb-2">
                  <a
                    href={ep.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded"
                  >
                    {ep.title}
                  </a>
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                  {ep.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {ep.topics.map(topic => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-gray-400"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
