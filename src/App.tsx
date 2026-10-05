import { useState, useEffect } from 'react';
import { subscribeToPrices } from './services/cryptoPriceService';
import type { CryptoAsset } from './types';
import { Navbar } from './components/Navbar';
import { LiveTickerBar } from './components/LiveTickerBar';
import { HeroBroadcastStudio } from './components/HeroBroadcastStudio';
import { MarketTerminal } from './components/MarketTerminal';
import { YouTubeVault } from './components/YouTubeVault';
import { SponsorsSection } from './components/SponsorsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

export function App() {
  const [assets, setAssets] = useState<CryptoAsset[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToPrices((updatedAssets) => {
      setAssets(updatedAssets);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#06080F] text-white flex flex-col font-sans">
      {/* 1. Live Marquee Ticker */}
      <LiveTickerBar assets={assets} />

      {/* 2. Top Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Main Content Areas */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 3. Hero Broadcast Studio ("LIVE INSTANCE") */}
        <HeroBroadcastStudio />

        {/* 4. Real-time Market Terminal for Sponsor Tokens + Majors */}
        <MarketTerminal assets={assets} />

        {/* 5. YouTube Video Vault & Episodes */}
        <YouTubeVault />

        {/* 6. Sponsors & Partner Ecosystem */}
        <SponsorsSection />

        {/* 7. Newsletter Signup (Coming Soon) */}
        <NewsletterSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
