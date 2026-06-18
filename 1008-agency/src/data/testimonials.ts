export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '1008 turned a 6-month roadmap into a 10-week launch. The codebase is the cleanest I have ever inherited.',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Northwind Trading',
  },
  {
    quote:
      'They did not just build the product — they built the team to maintain it.',
    name: 'Marcus Aydın',
    role: 'Founder',
    company: 'Verdant Market',
  },
  {
    quote: 'Premium output, no agency drama. That is rare.',
    name: 'Dr. Priya Anand',
    role: 'CEO',
    company: 'Lumen Health',
  },
];

export const clientWordmarks: string[] = [
  'NORTHWIND',
  'VERDANT',
  'LUMEN',
  'ATLAS',
  'KAIROS',
  'OBOLO',
];
