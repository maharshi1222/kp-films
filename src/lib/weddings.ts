export type WeddingStyle = 'Traditional' | 'Destination' | 'Intimate';

export type PhotoCategory = 'ceremony' | 'portrait' | 'detail' | 'reception' | 'candid';

export interface Photo {
  id: number;
  alt: string;
  orientation: 'portrait' | 'landscape';
  category: PhotoCategory;
}

export interface WeddingStory {
  slug: string;
  couple: string;
  venue: string;
  location: string;
  date: string;
  style: WeddingStyle;
  description: string;
  cover: Photo;
  photos: Photo[];
}

function px(id: number, w: number): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export function photoUrl(photo: Photo, size: 'thumb' | 'medium' | 'large' | 'full' = 'medium'): string {
  const widths = { thumb: 400, medium: 800, large: 1280, full: 1920 };
  return px(photo.id, widths[size]);
}

export const WEDDING_STYLES: WeddingStyle[] = ['Traditional', 'Destination', 'Intimate'];

export const WEDDINGS: WeddingStory[] = [
  {
    slug: 'sofia-marco',
    couple: 'Sofia & Marco',
    venue: 'Villa Castello',
    location: 'Tuscany, Italy',
    date: 'June 2024',
    style: 'Destination',
    description: 'A golden-hour celebration among olive groves and century-old stone walls. Sofia and Marco wove their families together under the Tuscan sun, with a ceremony that felt both ancient and entirely their own.',
    cover: { id: 27008972, alt: 'Elegant wedding couple embracing with joy, showcasing bridal veil', orientation: 'portrait', category: 'portrait' },
    photos: [
      { id: 27008972, alt: 'Elegant wedding couple embracing with joy, showcasing bridal veil', orientation: 'portrait', category: 'portrait' },
      { id: 26960744, alt: 'Close-up portrait of a bride in veil embraced by the groom', orientation: 'portrait', category: 'candid' },
      { id: 28824204, alt: 'Stylish couple posing outdoors with lush greenery background', orientation: 'portrait', category: 'portrait' },
      { id: 30375728, alt: 'A stylish black and white portrait of a bride and groom in a classic wedding pose', orientation: 'portrait', category: 'portrait' },
      { id: 29237378, alt: 'A romantic black and white portrait of a newlywed couple embracing indoors', orientation: 'portrait', category: 'candid' },
      { id: 11813966, alt: 'Bride and groom sharing an intimate moment in a softly lit room', orientation: 'portrait', category: 'candid' },
      { id: 37380420, alt: 'Charming outdoor wedding photo featuring a smiling bride and groom', orientation: 'portrait', category: 'candid' },
      { id: 34362507, alt: 'Elegant bride and groom embracing by the ocean', orientation: 'portrait', category: 'portrait' },
      { id: 13456843, alt: "Close-up of a couple's hands showing off diamond wedding rings", orientation: 'landscape', category: 'detail' },
      { id: 36339470, alt: 'Close-up of wedding rings on hands atop a bouquet of white roses', orientation: 'landscape', category: 'detail' },
      { id: 13060020, alt: 'Beautiful floral arrangement at an elegant indoor wedding reception', orientation: 'portrait', category: 'detail' },
      { id: 38651128, alt: 'Beautiful floral centerpiece with candles on a wedding table', orientation: 'portrait', category: 'detail' },
    ],
  },
  {
    slug: 'emma-james',
    couple: 'Emma & James',
    venue: 'The Old Rectory',
    location: 'Cotswolds, England',
    date: 'September 2024',
    style: 'Traditional',
    description: 'A classic English garden wedding. Emma and James filled every corner of the rectory grounds with laughter, from the first look beneath the oak tree to the last dance under the stars.',
    cover: { id: 34796128, alt: "Bride and groom's joyful first look in elegant indoor setting", orientation: 'portrait', category: 'candid' },
    photos: [
      { id: 34796128, alt: "Bride and groom's joyful first look in elegant indoor setting", orientation: 'portrait', category: 'candid' },
      { id: 32595306, alt: 'Bride and groom share a tender pre-ceremony moment indoors', orientation: 'portrait', category: 'candid' },
      { id: 11055554, alt: 'Bride and groom share a first look moment in a serene outdoor setting', orientation: 'portrait', category: 'candid' },
      { id: 15942684, alt: 'A newlywed couple sharing a romantic kiss at their wedding', orientation: 'portrait', category: 'portrait' },
      { id: 15283439, alt: 'A bride approaches the groom in a scenic outdoor courtyard', orientation: 'portrait', category: 'candid' },
      { id: 36118394, alt: 'Bride descends ornate staircase as groom awaits', orientation: 'portrait', category: 'candid' },
      { id: 2253871, alt: 'Close-up of a bride and groom embracing with focus on wedding rings and dress details', orientation: 'landscape', category: 'detail' },
      { id: 38273589, alt: 'A beautifully designed white wedding dress on a hanger indoors', orientation: 'portrait', category: 'detail' },
      { id: 11203484, alt: 'A beautiful ivory wedding dress with floral lace details hanging elegantly', orientation: 'portrait', category: 'detail' },
      { id: 35005574, alt: 'A beautiful bridal bouquet of pink roses and baby breath on a decorated table', orientation: 'portrait', category: 'detail' },
      { id: 10408275, alt: 'A joyful indoor wedding reception with guests, music, and dancing', orientation: 'landscape', category: 'reception' },
      { id: 18247630, alt: 'A lively wedding celebration featuring a bride dancing with guests', orientation: 'landscape', category: 'reception' },
    ],
  },
  {
    slug: 'aria-kai',
    couple: 'Aria & Kai',
    venue: 'Big Sur Coastline',
    location: 'California, USA',
    date: 'August 2024',
    style: 'Intimate',
    description: 'Just the two of them, the ocean, and a handful of wildflowers. Aria and Kai hiked to a cliffside overlook at dawn and said their vows with the Pacific sprawling below — no audience but the waves.',
    cover: { id: 32552665, alt: 'A couple shares an intimate moment in a sunlit field', orientation: 'portrait', category: 'portrait' },
    photos: [
      { id: 32552665, alt: 'A couple shares an intimate moment in a sunlit field', orientation: 'portrait', category: 'portrait' },
      { id: 28754943, alt: 'A couple sharing a romantic kiss during sunrise in the countryside', orientation: 'portrait', category: 'portrait' },
      { id: 34406841, alt: 'A couple shares an intimate moment in a wheat field during sunset', orientation: 'portrait', category: 'candid' },
      { id: 32439851, alt: 'A couple shares a romantic moment in a sunlit field', orientation: 'portrait', category: 'portrait' },
      { id: 19448251, alt: 'A man proposes to a woman in a sunny meadow at sunset', orientation: 'portrait', category: 'candid' },
      { id: 28754956, alt: 'A loving couple embracing in a serene outdoor setting during sunset', orientation: 'portrait', category: 'candid' },
      { id: 27366104, alt: 'Close-up of a couple sharing a romantic moment outdoors at sunset', orientation: 'portrait', category: 'candid' },
      { id: 28754945, alt: 'A couple shares a tender moment outdoors at sunset', orientation: 'portrait', category: 'portrait' },
      { id: 8288061, alt: 'Engaged couple embracing in a tranquil outdoor landscape at sunset', orientation: 'portrait', category: 'portrait' },
      { id: 31052798, alt: 'Couple embracing in a golden meadow during sunset', orientation: 'portrait', category: 'candid' },
      { id: 34543843, alt: 'Hands in elegant gesture showcasing wedding rings and jewelry', orientation: 'landscape', category: 'detail' },
      { id: 18535623, alt: 'Close-up shot of married couple holding hands with rings', orientation: 'landscape', category: 'detail' },
    ],
  },
  {
    slug: 'lina-theo',
    couple: 'Lina & Theo',
    venue: 'Cliffside Chapel',
    location: 'Santorini, Greece',
    date: 'July 2024',
    style: 'Destination',
    description: 'Blue domes, white stone, and a sunset that seemed to hold still for them. Lina and Theo gathered forty guests on a caldera-edge terrace for a celebration that spilled from ceremony into dancing past midnight.',
    cover: { id: 1024993, alt: 'A young couple enjoying a romantic beach wedding during a vibrant sunset', orientation: 'landscape', category: 'ceremony' },
    photos: [
      { id: 1024993, alt: 'A young couple enjoying a romantic beach wedding during a vibrant sunset', orientation: 'landscape', category: 'ceremony' },
      { id: 4364780, alt: 'A loving couple embraces on the beach at sunset, celebrating their wedding', orientation: 'landscape', category: 'portrait' },
      { id: 2548557, alt: 'A couple embraces on a tropical beach at sunset', orientation: 'landscape', category: 'candid' },
      { id: 2548567, alt: 'A couple in wedding attire embracing on a golden beach at sunset', orientation: 'landscape', category: 'portrait' },
      { id: 11889780, alt: 'A romantic couple embracing on a scenic beach at sunset, surrounded by rocks', orientation: 'landscape', category: 'candid' },
      { id: 2548566, alt: 'A romantic couple holding hands at sunset on a beach', orientation: 'landscape', category: 'candid' },
      { id: 27268881, alt: 'A couple enjoys a romantic beach wedding at sunset', orientation: 'landscape', category: 'ceremony' },
      { id: 9149293, alt: 'Newlywed couple joyfully running on a sandy beach during sunset', orientation: 'landscape', category: 'candid' },
      { id: 34677249, alt: 'A couple enjoying a playful moment during their beach wedding at sunset', orientation: 'landscape', category: 'candid' },
      { id: 9470475, alt: 'Couple holding hands at a beach wedding during a stunning sunset', orientation: 'landscape', category: 'portrait' },
      { id: 37828093, alt: 'A close-up black and white image of hands exchanging wedding rings', orientation: 'landscape', category: 'detail' },
      { id: 19339232, alt: 'Graceful hands adorned with jewelry, exchanging rings in a black and white wedding ceremony', orientation: 'landscape', category: 'detail' },
    ],
  },
  {
    slug: 'maya-noah',
    couple: 'Maya & Noah',
    venue: 'Grand Forest Estate',
    location: 'Oregon, USA',
    date: 'October 2024',
    style: 'Traditional',
    description: 'Towering Douglas firs, string lights woven through the canopy, and a first dance that nobody wanted to end. Maya and Noah built a cathedral out of trees and filled it with everyone they love.',
    cover: { id: 28123470, alt: 'Stunning bride and groom portrait at outdoor wedding ceremony in a forest setting', orientation: 'landscape', category: 'ceremony' },
    photos: [
      { id: 28123470, alt: 'Stunning bride and groom portrait at outdoor wedding ceremony in a forest setting', orientation: 'landscape', category: 'ceremony' },
      { id: 19641, alt: 'A close-up of a couple embracing on their wedding day in an outdoor setting', orientation: 'landscape', category: 'candid' },
      { id: 18322549, alt: 'Newlywed couple sharing a romantic kiss under enchanting outdoor string lights', orientation: 'landscape', category: 'reception' },
      { id: 5824565, alt: 'Bride and groom share a romantic kiss at their outdoor wedding ceremony', orientation: 'landscape', category: 'ceremony' },
      { id: 37379965, alt: 'Elegant bride and groom embracing at sunset in a lush outdoor setting', orientation: 'landscape', category: 'portrait' },
      { id: 20733909, alt: 'Bride and groom embracing under trees in a sunlit garden', orientation: 'landscape', category: 'candid' },
      { id: 27856800, alt: 'A couple on their wedding day in an elegant outdoor setting', orientation: 'landscape', category: 'portrait' },
      { id: 37407649, alt: 'Bride and groom in elegant attire posing in a serene forest setting', orientation: 'landscape', category: 'portrait' },
      { id: 35349365, alt: 'A bride and groom holding hands under a white arch in an outdoor wedding setting', orientation: 'landscape', category: 'ceremony' },
      { id: 38765416, alt: 'Bride and groom joyfully walking through cheering guests at a vibrant outdoor wedding reception', orientation: 'landscape', category: 'reception' },
      { id: 15964956, alt: 'A couple dances joyfully under twinkling lights at an outdoor night wedding celebration', orientation: 'landscape', category: 'reception' },
      { id: 29569636, alt: 'Group of wedding guests dancing joyfully under string lights in an outdoor evening celebration', orientation: 'landscape', category: 'reception' },
    ],
  },
  {
    slug: 'zoe-liam',
    couple: 'Zoe & Liam',
    venue: 'Botanical Garden Pavilion',
    location: 'Lisbon, Portugal',
    date: 'May 2024',
    style: 'Intimate',
    description: 'A garden in full bloom and thirty of their closest people. Zoe and Liam wrote their own vows, their mothers did the readings, and the champagne flowed from afternoon into evening.',
    cover: { id: 38740450, alt: 'A bride and groom share a romantic embrace under a green archway', orientation: 'portrait', category: 'candid' },
    photos: [
      { id: 38740450, alt: 'A bride and groom share a romantic embrace under a green archway', orientation: 'portrait', category: 'candid' },
      { id: 38740384, alt: 'Intimate moment of a couple exchanging wedding rings in a lush setting', orientation: 'portrait', category: 'ceremony' },
      { id: 38740451, alt: 'Bride and groom on stairs, holding hands, dressed elegantly, outdoor scene', orientation: 'portrait', category: 'candid' },
      { id: 34122779, alt: 'Smiling couple shares a heartfelt dance under a canopy of greenery', orientation: 'portrait', category: 'reception' },
      { id: 32595306, alt: 'Bride and groom share a tender pre-ceremony moment indoors', orientation: 'portrait', category: 'candid' },
      { id: 28824204, alt: 'Stylish couple posing outdoors with lush greenery background', orientation: 'portrait', category: 'portrait' },
      { id: 10074150, alt: 'Close-up of elegant bridal gloves and wedding rings on a lace wedding dress', orientation: 'landscape', category: 'detail' },
      { id: 20352728, alt: 'A delicate lace wedding dress on a hanger in an elegant bridal shop setting', orientation: 'portrait', category: 'detail' },
      { id: 19882184, alt: 'Beautiful lace wedding dress elegantly displayed on a wooden hanger', orientation: 'portrait', category: 'detail' },
      { id: 38893464, alt: 'Beautiful floral arrangement on a rustic wedding table with elegant glassware', orientation: 'portrait', category: 'detail' },
      { id: 16660110, alt: 'Sophisticated wedding table setup featuring delicate floral arrangements', orientation: 'portrait', category: 'detail' },
      { id: 27379788, alt: 'Bride and groom dancing at a glamorous indoor wedding reception', orientation: 'landscape', category: 'reception' },
    ],
  },
];

export const ALL_PHOTOS: Photo[] = WEDDINGS.flatMap((w) => w.photos);

export const PHOTOGRAPHER_PORTRAITS: Photo[] = [
  { id: 16459045, alt: 'Portrait of a smiling woman holding a DSLR camera in a studio setting', orientation: 'portrait', category: 'portrait' },
  { id: 36580588, alt: 'Black and white portrait of a woman photographer holding a camera', orientation: 'portrait', category: 'portrait' },
  { id: 24374988, alt: 'Portrait of a woman photographer holding a camera in a dark studio background', orientation: 'portrait', category: 'portrait' },
];

export const BTS_PHOTOS: Photo[] = [
  { id: 3990404, alt: 'A candid moment during a wedding photoshoot', orientation: 'landscape', category: 'candid' },
  { id: 32942470, alt: 'An outdoor wedding photoshoot capturing a couple surrounded by photographers', orientation: 'landscape', category: 'candid' },
  { id: 5068382, alt: 'Photographer and model in a serene nature setting during golden hour', orientation: 'landscape', category: 'candid' },
];

export const TESTIMONIALS = [
  {
    quote: "Sofia cried looking at the photos. So did I. So did our mothers. Ana didn't just document our wedding — she somehow captured how the whole day felt, not just how it looked.",
    author: 'Marco Vitale',
    role: 'Wedding · Tuscany, Italy',
    couplePhoto: { id: 30375728, alt: 'A stylish black and white portrait of a bride and groom', orientation: 'portrait', category: 'portrait' } as Photo,
  },
  {
    quote: "We are not camera people. Ana made us forget the cameras existed. What we got back was us — actually us, actually laughing, actually in love. Not a single stiff pose in the entire set.",
    author: 'Emma Whitfield',
    role: 'Wedding · Cotswolds, England',
    couplePhoto: { id: 34796128, alt: "Bride and groom's joyful first look", orientation: 'portrait', category: 'candid' } as Photo,
  },
  {
    quote: "It was just the two of us on a cliff at dawn. Ana hiked up in the dark with us, waited for the light, and then somehow became invisible. The photos feel like private memories, not a photoshoot.",
    author: 'Aria Chen',
    role: 'Elopement · Big Sur, California',
    couplePhoto: { id: 32552665, alt: 'A couple shares an intimate moment in a sunlit field', orientation: 'portrait', category: 'portrait' } as Photo,
  },
  {
    quote: "Forty guests, a caldera-edge terrace, and a photographer who somehow knew exactly when to step in and when to disappear. Every guest has asked for her contact. Every single one.",
    author: 'Lina Papadopoulos',
    role: 'Wedding · Santorini, Greece',
    couplePhoto: { id: 1024993, alt: 'A young couple enjoying a romantic beach wedding during sunset', orientation: 'landscape', category: 'ceremony' } as Photo,
  },
];

export interface ServicePackage {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export const PACKAGES: ServicePackage[] = [
  {
    name: 'The Elopement',
    tagline: 'For the two of you and the world',
    price: 'From €2,400',
    features: [
      '4 hours of coverage',
      'One photographer',
      'Ceremony + portraits',
      '200+ edited images',
      'Online gallery for sharing',
      'Delivery within 3 weeks',
    ],
  },
  {
    name: 'The Full Day',
    tagline: 'From first look to last dance',
    price: 'From €4,800',
    features: [
      '10 hours of coverage',
      'Two photographers',
      'Getting ready through reception',
      '600+ edited images',
      'Online gallery + USB drive',
      'Engagement session included',
      'Delivery within 4 weeks',
    ],
    featured: true,
  },
  {
    name: 'The Heirloom',
    tagline: 'The complete story, beautifully bound',
    price: 'From €7,200',
    features: [
      'Full day + next-day brunch',
      'Two photographers + assistant',
      'Pre-wedding consultation',
      '800+ edited images',
      'Fine-art linen album (30 spreads)',
      'Parent albums (x2)',
      'Engagement session',
      'Priority delivery within 3 weeks',
    ],
  },
];
