export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start with conversations, not deliverables. We learn your users, your constraints, and the actual problem you are solving. Then we tell you if we are the right team.',
    deliverables: ['Brief doc', 'Success metrics', 'Scope outline', 'Fixed-price quote'],
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Wireframes, prototypes, and a design system you will actually use. You see it before we build it — and we iterate until it feels right.',
    deliverables: [
      'Information architecture',
      'Clickable prototype',
      'UI kit',
      'Motion spec',
    ],
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Sprint-based, with weekly demos. You always know what is shipping next, what changed, and what is still risky.',
    deliverables: [
      'Production code',
      'Weekly demo',
      'Staging URL',
      'Automated test coverage',
    ],
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'We handle launch, store submission, hosting, and the first 30 days of support. You keep the keys, the codebase, and the documentation.',
    deliverables: [
      'Production deploy',
      'Store listings',
      'Handover doc',
      'Support window',
    ],
  },
];
