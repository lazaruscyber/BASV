export interface PackageFeature {
  text: string;
}

export interface Package {
  tier: string;
  price: string;
  priceNote: string;
  features: PackageFeature[];
  popular: boolean;
}

export const packages: Package[] = [
  {
    tier: 'Launch',
    price: '$2,400',
    priceNote: 'one-time, fixed scope',
    features: [
      { text: 'Single landing page or 1-screen app' },
      { text: '2 revision rounds' },
      { text: 'Responsive (desktop, tablet, mobile)' },
      { text: 'Basic analytics & SEO setup' },
      { text: 'Deployed to managed hosting' },
      { text: '30 days post-launch support' },
    ],
    popular: false,
  },
  {
    tier: 'Growth',
    price: '$7,800',
    priceNote: 'one-time, fixed scope',
    features: [
      { text: 'Multi-page site or full web app MVP' },
      { text: 'Custom UI/UX design system' },
      { text: 'CMS or backend integration' },
      { text: 'Up to 6-week timeline' },
      { text: 'Auth, payments, or 3rd-party integrations' },
      { text: 'Performance & accessibility audit' },
      { text: '90 days post-launch support' },
    ],
    popular: true,
  },
  {
    tier: 'Scale',
    price: 'Custom',
    priceNote: 'monthly or quarterly retainer',
    features: [
      { text: 'Dedicated team (design + engineering)' },
      { text: 'Sprint-based delivery' },
      { text: 'Native iOS / Android / desktop apps' },
      { text: 'Infrastructure & DevOps' },
      { text: 'AI integrations & data pipelines' },
      { text: 'Quarterly roadmap reviews' },
      { text: 'SLA-backed support' },
    ],
    popular: false,
  },
];
