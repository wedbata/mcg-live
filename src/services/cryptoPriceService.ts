import type { CryptoAsset } from '../types';

// Mock data generator for crypto prices
const generateInitialAssets = (): CryptoAsset[] => [
  {
    id: 'mcg-token',
    symbol: '$MCG',
    name: 'MCG Ecosystem',
    price: 1.42,
    change24h: 4.2,
    change1h: 0.1,
    change7d: 12.5,
    volume24h: 4500000,
    marketCap: 42000000,
    sparkline7d: [1.1, 1.15, 1.25, 1.2, 1.35, 1.4, 1.42],
    isSponsor: true,
    sponsorTier: 'Title Partner',
    sponsorPerk: '1.2x Alpha Staking Multiplier',
    category: 'sponsor',
    description: 'The native governance and alpha access token for the MCG media ecosystem.',
    tags: ['Media', 'Governance', 'Alpha'],
  },
  {
    id: 'bitcoin',
    symbol: '$BTC',
    name: 'Bitcoin',
    price: 68420.50,
    change24h: 1.2,
    change1h: -0.1,
    change7d: 5.4,
    volume24h: 32000000000,
    marketCap: 1350000000000,
    sparkline7d: [64000, 65000, 64500, 66000, 67000, 68000, 68420],
    isSponsor: false,
    category: 'major',
    description: 'The Internet Capital Markets digital gold.',
    tags: ['Store of Value'],
  },
  {
    id: 'ethereum',
    symbol: '$ETH',
    name: 'Ethereum',
    price: 2650.10,
    change24h: 0.8,
    change1h: 0.2,
    change7d: 3.2,
    volume24h: 15000000000,
    marketCap: 320000000000,
    sparkline7d: [2500, 2550, 2520, 2600, 2620, 2640, 2650],
    isSponsor: false,
    category: 'major',
    description: 'The foundational L1 for decentralized applications.',
    tags: ['L1', 'DeFi'],
  },
  {
    id: 'solana',
    symbol: '$SOL',
    name: 'Solana',
    price: 175.20,
    change24h: -2.1,
    change1h: 0.5,
    change7d: -1.2,
    volume24h: 4000000000,
    marketCap: 82000000000,
    sparkline7d: [180, 185, 170, 172, 174, 176, 175],
    isSponsor: true,
    sponsorTier: 'Ecosystem Partner',
    sponsorPerk: 'Exclusive Solana Alpha Briefings',
    category: 'icm',
    description: 'High-performance L1 supporting Internet Capital Markets velocity.',
    tags: ['L1', 'High-Speed'],
  }
];

export const subscribeToPrices = (
  onUpdate: (assets: CryptoAsset[]) => void,
  intervalMs = 3000
) => {
  let assets = generateInitialAssets();

  const timer = setInterval(() => {
    // Simulate price movement
    assets = assets.map(asset => {
      const volatility = 0.005; // 0.5% max move per tick
      const multiplier = 1 + (Math.random() - 0.5) * volatility * 2;
      return {
        ...asset,
        price: parseFloat((asset.price * multiplier).toFixed(2)),
        change24h: parseFloat((asset.change24h + (Math.random() - 0.5) * 0.1).toFixed(2)),
      };
    });
    onUpdate(assets);
  }, intervalMs);

  return () => clearInterval(timer);
};
