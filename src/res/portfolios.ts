import img from './img';

export type PortfolioItem = {
  title: string;
  categories: string[];
  logo: any;
  description: string;
  iosLink?: string;
  androidLink?: string;
  screens: any[];
  stackUsed: string[];
};

const portfolios: PortfolioItem[] = [
  {
    title: 'Junk A Car',
    categories: ['Business', 'Communication'],
    logo: img.logo_junkacar,
    description:
      'A mobile application for both junk shop business owners and customers.',
    screens: [
      img.junkacar_1,
      img.junkacar_2,
      img.junkacar_3,
      img.junkacar_4,
      img.junkacar_5,
      img.junkacar_6,
    ],
    stackUsed: ['React Native', 'Android', 'iOS', 'NodeJS', 'MongoDB'],
  },
  {
    title: 'Honeypot Humor',
    categories: ['Entertainment'],
    logo: img.logo_honeypot,
    description:
      'Over 10 categories of jokes and memes that will keep you entertained.',
    iosLink: 'https://steprimo.com/iphone/us/app/1518443811/Honey-Pot-Humor/',
    screens: [
      img.honeypot_1,
      img.honeypot_2,
      img.honeypot_3,
      img.honeypot_4,
      img.honeypot_5,
    ],
    stackUsed: ['React', 'React Native', 'Android', 'iOS', 'NodeJS', 'MySQL'],
  },
  {
    title: 'VisitMalta+',
    categories: ['VisitMalta', 'Travel & Local'],
    logo: img.logo_visitmalta,
    description:
      'VisitMalta + is the official app for Malta, Gozo & Comino. Malta is a great place to visit for sun, sea, culture, attractions and all year round events. This app will help you plan your holiday and maximise your time on the islands. Download the app to obtain practical information about places of interest, restaurants, transport and much more. Use the app to discover the Maltese Islands in fun and innovative ways. VisitMalta+ is the ultimate app you need when planning to visit the Maltese Islands and throughout your stay.',
    androidLink:
      'https://play.google.com/store/apps/details?id=com.visitmalta.tourist',
    iosLink: 'https://apps.apple.com/us/app/visitmalta/id1471501091',
    screens: [
      img.visitmalta_1,
      img.visitmalta_2,
      img.visitmalta_3,
      img.visitmalta_4,
      img.visitmalta_5,
    ],
    stackUsed: ['React Native', 'Android', 'iOS', 'Java'],
  },
  {
    title: 'GEM',
    categories: ['Retail', 'Social Media'],
    logo: img.logo_gem,
    description:
      'Retail App GEM focuses on 24/7 Learning experience of Remy Cointreau brands, measurement of sell out performances and productivity by location, accuracy in store check, events, pricing, activations while creating a community platform for sharing of best practises and success stories across the globe.',
    iosLink: 'https://apps.apple.com/au/app/gem/id1521465814',
    screens: [img.gem_1, img.gem_2, img.gem_3, img.gem_4, img.gem_5],
    stackUsed: [
      'React Native',
      'Android',
      'iOS',
      'NodeJS',
      'PostgreSQL',
      'Salesforce',
    ],
  },
];

export default portfolios;
