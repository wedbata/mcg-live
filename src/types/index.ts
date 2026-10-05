export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  change1h: number;
  change7d: number;
  volume24h: number;
  marketCap: number;
  sparkline7d: number[];
  isSponsor: boolean;
  sponsorTier?: 'Title Partner' | 'Segment Sponsor' | 'Ecosystem Partner';
  sponsorPerk?: string;
  category: 'sponsor' | 'major' | 'icm' | 'meme' | 'defi';
  contractAddress?: string;
  dexUrl?: string;
  coingeckoId?: string;
  description: string;
  ath?: number;
  circulatingSupply?: string;
  tags: string[];
}

export interface EpisodeTimestamp {
  time: string;
  seconds: number;
  label: string;
  alphaScore?: number;
}

export interface HostOrGuest {
  name: string;
  role: string;
  avatar: string;
  handle: string;
  affiliation?: string;
}

export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  date: string;
  duration: string;
  views: string;
  liveStatus: 'live' | 'upcoming' | 'recent' | 'archived';
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  description: string;
  hosts: HostOrGuest[];
  guests: HostOrGuest[];
  topics: string[];
  timestamps: EpisodeTimestamp[];
  featured?: boolean;
  alphaScore: number; // 1 to 100
  sponsorId?: string;
  keyTakeaways: string[];
}

export interface ShortClip {
  id: string;
  title: string;
  views: string;
  duration: string;
  youtubeId: string;
  thumbnail: string;
  speaker: string;
  topic: string;
  likes: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Title Partner' | 'Segment Sponsor' | 'Ecosystem Partner';
  tagline: string;
  description: string;
  logo: string;
  bannerImage: string;
  websiteUrl: string;
  twitterUrl: string;
  tokenTicker?: string;
  tokenSymbol?: string;
  contractAddress?: string;
  perkTitle: string;
  perkDescription: string;
  promoCode?: string;
  segmentName?: string;
  stats?: {
    tpsOrTvl: string;
    users: string;
    backing: string;
  };
}

export interface LiveChatMessage {
  id: string;
  user: string;
  avatar: string;
  message: string;
  timestamp: string;
  isSuperchat?: boolean;
  amount?: string;
  badge?: 'host' | 'mod' | 'vip' | 'sponsor' | 'degen';
}

export interface ScheduleEvent {
  id: string;
  episodeNumber: number;
  title: string;
  day: string;
  date: string;
  time: string;
  utcTime: string;
  topic: string;
  guestName: string;
  guestRole: string;
  guestHandle: string;
  category: string;
  isNext: boolean;
}

export interface NewsletterTier {
  id: string;
  name: string;
  price: string;
  badge: string;
  features: string[];
  popular?: boolean;
}
