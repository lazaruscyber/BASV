import { LucideIcon, Sparkles, Store, Cloud, Globe, Database } from 'lucide-react';

export interface Product {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const products: Product[] = [
  {
    title: 'AI Integrations',
    description: 'LLMs, vision, and intelligent automation, embedded into your product.',
    icon: Sparkles,
  },
  {
    title: 'App Store Publishing',
    description: 'Play Store, App Store, .exe, macOS, and Linux — handled end-to-end.',
    icon: Store,
  },
  {
    title: 'Web Hosting',
    description: 'Managed hosting with SSL, CDN, and 99.9% uptime.',
    icon: Cloud,
  },
  {
    title: 'Domain Management',
    description: 'We purchase, configure, and renew your domains.',
    icon: Globe,
  },
  {
    title: 'Database Plans',
    description: 'Managed PostgreSQL, MongoDB, and Firebase, sized for your workload.',
    icon: Database,
  },
];
