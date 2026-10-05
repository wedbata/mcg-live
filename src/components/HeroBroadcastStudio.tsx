import React, { useState } from 'react';
import { Flame, Send, Users, Sparkles, MessageSquare } from 'lucide-react';
import type { LiveChatMessage } from '../types';

const INITIAL_MESSAGES: LiveChatMessage[] = [
  {
    id: '1',
    user: '0xSatoshiDegen',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    message: 'LFG! The Internet Capital Markets thesis is playing out in real-time 🚀',
    timestamp: '12:04',
    badge: 'degen',
  },
  {
    id: '2',
    user: 'MCG Moderator',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
    message: 'Welcome everyone! Today we cover $MCG staking, high-velocity liquidity, and macro pivots.',
    timestamp: '12:05',
    badge: 'mod',
  },
  {
    id: '3',
    user: 'WhaleWatcher_99',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    message: 'Did you see that Berachain liquidity migration? Huge alpha.',
    timestamp: '12:06',
    badge: 'vip',
    isSuperchat: true,
    amount: '$50.00',
  }
];

export const HeroBroadcastStudio: React.FC = () => {
  const [messages, setMessages] = useState<LiveChatMessage[]>(INITIAL_MESSAGES);
  const [chatInput, setChatInput] = useState('');
  const [activeTab, setActiveTab] = useState<'stream' | 'agenda' | 'alpha'>('stream');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMessage: LiveChatMessage = {
      id: Date.now().toString(),
      user: 'You (Degen)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      message: chatInput,
      timestamp: new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()),
      badge: 'vip'
    };

    setMessages(prev => [...prev, newMessage]);
    setChatInput('');
  };

  return (
    <section id="broadcast" className="relative pt-6 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Studio Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* Video Player Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0E1A] shadow-2xl">

            {/* Video Container (Responsive Aspect Ratio) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
                title="MCG Live Show Broadcast"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Overlay On-Air Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-red-600/90 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-wider">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
                <span>LIVE BROADCAST</span>
              </div>

              {/* Viewers Counter Overlay */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-gray-200 text-xs font-mono border border-white/10">
                <Users className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span className="tabular-nums">14,892 Watching</span>
              </div>
            </div>

            {/* Broadcast Details Bar */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 bg-[#0C1120]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    EPISODE #142
                  </span>
                  <span className="text-xs text-gray-400">Internet Capital Markets Daily</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-balance">
                  The $100B Attention Economy & Sponsor Token Liquidity Deep Dive
                </h1>
              </div>

              {/* Live Sentiment Pill */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-2 sm:px-4 shrink-0">
                <Flame className="w-5 h-5 text-amber-400" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-mono uppercase">Sentiment</div>
                  <div className="text-xs font-bold text-emerald-400 tabular-nums">92% ULTRA BULLISH</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Sub-Navigation Pills under player */}
          <div role="tablist" aria-label="Episode details tabs" className="flex items-center gap-2">
            <button
              id="tab-stream"
              role="tab"
              type="button"
              aria-selected={activeTab === 'stream'}
              aria-controls="panel-stream"
              onClick={() => setActiveTab('stream')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                activeTab === 'stream'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                  : 'text-gray-400 hover:text-white bg-white/5'
              }`}
            >
              Key Highlights
            </button>
            <button
              id="tab-agenda"
              role="tab"
              type="button"
              aria-selected={activeTab === 'agenda'}
              aria-controls="panel-agenda"
              onClick={() => setActiveTab('agenda')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                activeTab === 'agenda'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                  : 'text-gray-400 hover:text-white bg-white/5'
              }`}
            >
              Timestamps
            </button>
            <button
              id="tab-alpha"
              role="tab"
              type="button"
              aria-selected={activeTab === 'alpha'}
              aria-controls="panel-alpha"
              onClick={() => setActiveTab('alpha')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                activeTab === 'alpha'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                  : 'text-gray-400 hover:text-white bg-white/5'
              }`}
            >
              Alpha Notes
            </button>
          </div>

          {/* Content Pane */}
          <div className="p-4 rounded-xl border border-white/10 bg-[#0A0E1A] text-sm text-gray-300">
            {activeTab === 'stream' && (
              <div id="panel-stream" role="tabpanel" aria-labelledby="tab-stream" tabIndex={0} className="focus-visible:outline-none">
                <p>
                  Alex and Elena break down the massive rotation into Internet Capital Markets, highlighting sponsor tokens (<span translate="no">$MCG</span>, <span translate="no">$HYPER</span>, <span translate="no">$BERA</span>) and global macro liquidity shifts.
                </p>
              </div>
            )}
            {activeTab === 'agenda' && (
              <div id="panel-agenda" role="tabpanel" aria-labelledby="tab-agenda" tabIndex={0} className="focus-visible:outline-none">
                <ul className="space-y-1 font-mono text-xs tabular-nums">
                  <li><span className="text-emerald-400">00:00</span> — Stream Warmup & Sound Check</li>
                  <li><span className="text-emerald-400">05:20</span> — Fed Pivot & Macro Capital Flows</li>
                  <li><span className="text-emerald-400">18:40</span> — Sponsor Spotlight: Ecosystem Tokens</li>
                </ul>
              </div>
            )}
            {activeTab === 'alpha' && (
              <div id="panel-alpha" role="tabpanel" aria-labelledby="tab-alpha" tabIndex={0} className="focus-visible:outline-none flex items-start gap-2 text-xs">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Key takeaway: Attention assets lead market cycles. Stay liquid and monitor sponsor utilities.</span>
              </div>
            )}
          </div>
        </div>

        {/* Live Chat Column */}
        <div className="flex flex-col h-[520px] rounded-2xl border border-white/10 bg-[#0A0E1A] overflow-hidden">
          {/* Chat Header */}
          <div className="p-3 border-b border-white/10 bg-[#0C1120] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span className="text-xs font-bold text-white tracking-wide">LIVE STREAM CHAT</span>
            </div>
            <span className="text-[10px] font-mono text-gray-400">SLOW MODE: OFF</span>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 font-sans text-xs" aria-label="Chat messages history">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`p-2 rounded-lg ${
                  msg.isSuperchat
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40'
                    : 'bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={msg.avatar}
                      alt={msg.user}
                      width={16}
                      height={16}
                      loading="lazy"
                      className="w-4 h-4 rounded-full object-cover shrink-0"
                    />
                    <span className="font-bold text-gray-200">{msg.user}</span>
                    {msg.badge === 'mod' && (
                      <span className="px-1 py-0.5 text-[9px] bg-emerald-500/20 text-emerald-400 rounded">MOD</span>
                    )}
                    {msg.badge === 'vip' && (
                      <span className="px-1 py-0.5 text-[9px] bg-cyan-500/20 text-cyan-400 rounded">VIP</span>
                    )}
                  </div>
                  {msg.isSuperchat && (
                    <span className="text-[10px] font-bold text-amber-400 font-mono tabular-nums">{msg.amount}</span>
                  )}
                  <span className="text-[10px] text-gray-500 tabular-nums">{msg.timestamp}</span>
                </div>
                <p className="text-gray-300 leading-relaxed break-words">{msg.message}</p>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-[#0C1120] flex gap-2">
            <label htmlFor="chat-message-input" className="sr-only">
              Type a message in the live stream chat
            </label>
            <input
              id="chat-message-input"
              name="chatMessage"
              type="text"
              autoComplete="off"
              spellCheck={false}
              placeholder="Send message to live studio…"
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-400"
            />
            <button
              type="submit"
              aria-label="Send message to live stream chat"
              className="p-2 bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
