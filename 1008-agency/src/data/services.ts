import { LucideIcon, Monitor, Code2, Smartphone } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Website Design & Development',
    description: 'Marketing sites, portfolios, and brand experiences engineered to convert.',
    longDescription:
      'We design and engineer marketing sites, brand experiences, and editorial platforms that move as fast as your team does. From first wireframe to final deploy, we obsess over typography, motion, and the details that make a site feel premium.',
    deliverables: [
      'Information architecture',
      'UI/UX design',
      'Responsive implementation',
      'CMS integration',
      'Analytics setup',
      'On-page SEO foundations',
      '30-day post-launch support',
    ],
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
  },
  {
    title: 'Web Application Development',
    description: 'Custom dashboards, SaaS platforms, and internal tools built around your workflow.',
    longDescription:
      'We build the dashboards, SaaS platforms, and internal tools your team will actually use every day. Our process is product-grade: discovery, prototype, build, test, ship. You get a maintainable codebase, real documentation, and a team that can run with it.',
    deliverables: [
      'Discovery sprint',
      'Interactive prototype',
      'Full-stack build',
      'Automated tests',
      'Deployment pipeline',
      'Observability',
      '90-day post-launch support',
    ],
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
  },
  {
    title: 'Cross-Platform App Development',
    description: 'iOS, Android, macOS, Windows, and Linux from a single codebase.',
    longDescription:
      'Native-quality iOS, Android, macOS, Windows, and Linux apps from a single codebase. We handle store submission, signing, and updates — so you ship once and reach everyone.',
    deliverables: [
      'Architecture design',
      'Platform-specific UI',
      'Store assets and metadata',
      'Submission to all platforms',
      'OTA update strategy',
      'Analytics integration',
      '60-day post-launch support',
    ],
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
  },
];
