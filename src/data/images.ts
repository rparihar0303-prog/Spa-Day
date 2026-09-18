// Curated premium spa imagery — all from Pexels (license-free)

export const heroImage =
  'https://images.pexels.com/photos/6560308/pexels-photo-6560308.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const aboutImageMain =
  'https://images.pexels.com/photos/7598366/pexels-photo-7598366.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const aboutImageDetail =
  'https://images.pexels.com/photos/19167421/pexels-photo-19167421.jpeg?auto=compress&cs=tinysrgb&w=800';

export interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export const treatments: Treatment[] = [
  {
    name: 'Swedish Massage',
    description:
      'A gentle, full-body massage using long, flowing strokes to ease tension and restore a sense of calm.',
    duration: '60 min',
    price: '[Add Price]',
    image:
      'https://images.pexels.com/photos/6187418/pexels-photo-6187418.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Deep Tissue Massage',
    description:
      'Focused pressure on deeper layers of muscle to release chronic tension and stiffness.',
    duration: '75 min',
    price: '[Add Price]',
    image:
      'https://images.pexels.com/photos/6187652/pexels-photo-6187652.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Aromatherapy Massage',
    description:
      'A soothing massage paired with essential oils chosen to calm the mind and lift the senses.',
    duration: '60 min',
    price: '[Add Price]',
    image:
      'https://images.pexels.com/photos/6560252/pexels-photo-6560252.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Head & Shoulder Therapy',
    description:
      'A targeted treatment releasing built-up stress in the neck, shoulders, and scalp.',
    duration: '45 min',
    price: '[Add Price]',
    image:
      'https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Body Polish',
    description:
      'A full-body exfoliation that leaves the skin soft, smooth, and gently renewed.',
    duration: '50 min',
    price: '[Add Price]',
    image:
      'https://images.pexels.com/photos/6560273/pexels-photo-6560273.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Couple Spa',
    description:
      'A shared wellness experience designed for two, in a private and tranquil setting.',
    duration: '90 min',
    price: '[Add Price]',
    image:
      'https://images.pexels.com/photos/7365434/pexels-photo-7365434.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export interface GalleryImage {
  url: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    url: 'https://images.pexels.com/photos/7789646/pexels-photo-7789646.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Elegant spa treatment room with soft ambient lighting',
    span: 'tall',
  },
  {
    url: 'https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Spa scene with flickering candles and soft towels',
    span: 'normal',
  },
  {
    url: 'https://images.pexels.com/photos/7598366/pexels-photo-7598366.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary spa room with a massage bed and organic decor',
    span: 'normal',
  },
  {
    url: 'https://images.pexels.com/photos/35884499/pexels-photo-35884499.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Spa massage table with a rolled towel and candle',
    span: 'tall',
  },
  {
    url: 'https://images.pexels.com/photos/6560252/pexels-photo-6560252.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Aromatherapy items arranged on a wooden table',
    span: 'normal',
  },
  {
    url: 'https://images.pexels.com/photos/17640379/pexels-photo-17640379.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Minimalist spa interior with curved furniture and natural light',
    span: 'normal',
  },
  {
    url: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Spa atmosphere with candles, towels, and a single flower',
    span: 'tall',
  },
  {
    url: 'https://images.pexels.com/photos/6899538/pexels-photo-6899538.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Spa reception area with soft lighting and natural elements',
    span: 'normal',
  },
];

export const contactImage =
  'https://images.pexels.com/photos/16571736/pexels-photo-16571736.jpeg?auto=compress&cs=tinysrgb&w=1200';
