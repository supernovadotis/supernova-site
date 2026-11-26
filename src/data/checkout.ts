// Checkout links. Stripe Payment Links and Substack tier URLs are not created yet —
// these are placeholders. Replace the `#` values with the real URLs in one edit here;
// every button on the site reads from this file.
export const checkout = {
  STRIPE_LINK_PROTOCOL: '#', // USD 33 / 44 — digital guide
  STRIPE_LINK_SESSION: '#', // USD 220 — guide + one 3-hour session
  STRIPE_LINK_PROGRAMME: '#', // USD 650 — guide + 5 sessions of 1.5 hours
  SUBSTACK_TIER_READER: '#', // USD 5 / month
  SUBSTACK_TIER_SOYUZ: '#', // USD 25 / month
  SUBSTACK_TIER_FOUNDER: '#', // USD 100 / month
} as const;
