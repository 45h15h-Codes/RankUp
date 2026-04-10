export type IndustryId =
  | 'solar'
  | 'ecommerce'
  | 'education'
  | 'healthcare'
  | 'real-estate'
  | 'retail';

export interface IndustryContent {
  title: string;
  desc: string;
  stats: string[];
  challenges: string[];
  solutions: string[];
}

export const industryData: Record<IndustryId, IndustryContent> = {
  solar: {
    title: 'Solar Industry',
    desc: 'Accelerate your solar sales with high-intent lead generation and automated follow-ups.',
    stats: ['+240% Lead Growth', '₹450 Cost Per Lead', '95% Lead Quality'],
    challenges: ['High competition', 'Long sales cycles', 'Lead qualification issues'],
    solutions: ['Targeted Meta & Google Ads', 'Custom Qualification Funnels', 'Automated CRM Nurturing'],
  },
  ecommerce: {
    title: 'E-Commerce',
    desc: 'Scale your online store with data-driven performance marketing and conversion optimization.',
    stats: ['6.5x Average ROAS', '+180% Revenue Growth', '35% Repeat Purchase Rate'],
    challenges: ['Rising ad costs', 'Cart abandonment', 'Customer retention'],
    solutions: ['Dynamic Product Ads', 'Checkout Optimization', 'Email/SMS Remarketing'],
  },
  education: {
    title: 'Education',
    desc: 'Increase student enrollments with targeted lead generation and automated admission pipelines.',
    stats: ['+120% Enrollment Rate', '-40% Acquisition Cost', '85% Lead Engagement'],
    challenges: ['Seasonal demand', 'High lead volume management', 'Information overload'],
    solutions: ['Educational Content Strategy', 'WhatsApp Automation', 'Lead Scoring Systems'],
  },
  healthcare: {
    title: 'Healthcare',
    desc: 'Connect with patients when they need you most through ethical and effective marketing.',
    stats: ['+90% Appointment Rate', '₹300 Cost Per Booking', '98% Patient Satisfaction'],
    challenges: ['Strict regulations', 'Trust building', 'Local search visibility'],
    solutions: ['Local SEO & Google Ads', 'Patient Education Content', 'Automated Appointment Reminders'],
  },
  'real-estate': {
    title: 'Real Estate',
    desc: 'Sell properties faster with high-quality lead generation and virtual tour funnels.',
    stats: ['+150% Site Visits', '₹1500 Cost Per Site Visit', '70% Lead-to-Visit Ratio'],
    challenges: ['High ticket size', 'Trust & credibility', 'Lead follow-up speed'],
    solutions: ['Premium Video Ads', 'Virtual Tour Landing Pages', 'Instant WhatsApp Follow-ups'],
  },
  retail: {
    title: 'Retail',
    desc: 'Drive foot traffic and online sales with integrated omni-channel marketing strategies.',
    stats: ['+60% Store Footfall', '+110% Online Sales', '4.2x Marketing ROI'],
    challenges: ['Online-offline gap', 'Inventory management', 'Brand loyalty'],
    solutions: ['Local Inventory Ads', 'Loyalty Program Automation', 'Geo-targeted Campaigns'],
  },
};

export function isIndustryId(value: string): value is IndustryId {
  return value in industryData;
}
