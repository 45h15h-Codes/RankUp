export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface CaseStudyContent {
  title: string;
  category: string;
  stats: CaseStudyStat[];
  image: string;
  desc: string;
}

export const caseStudies: CaseStudyContent[] = [
  {
    title: 'Scaling a Solar Tech Brand',
    category: 'Lead Generation',
    stats: [
      {label: 'growth', value: '+240%'},
      {label: 'leads', value: '1,200/mo'},
      {label: 'cost', value: '-45%'},
    ],
    image: 'https://picsum.photos/seed/solar-case/800/500',
    desc: 'How we helped a regional solar installer become a national player through targeted Meta ads and CRM automation.',
  },
  {
    title: 'E-commerce Revenue Explosion',
    category: 'E-Commerce',
    stats: [
      {label: 'growth', value: '+180%'},
      {label: 'roas', value: '6.5x'},
      {label: 'sales', value: '₹12M/mo'},
    ],
    image: 'https://picsum.photos/seed/ecommerce-case/800/500',
    desc: 'Optimizing the entire funnel for a premium skincare brand, from creative strategy to checkout optimization.',
  },
  {
    title: 'Healthcare Lead Quality Boost',
    category: 'Healthcare',
    stats: [
      {label: 'growth', value: '+90%'},
      {label: 'quality', value: '+150%'},
      {label: 'cost', value: '-30%'},
    ],
    image: 'https://picsum.photos/seed/health-case/800/500',
    desc: 'Implementing a multi-step qualification funnel for a multi-specialty hospital chain to reduce junk leads.',
  },
];
