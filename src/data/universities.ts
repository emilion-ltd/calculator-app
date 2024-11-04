import { University } from '@/types';

export const universities: University[] = [
  {
    id: 'tau',
    name: 'אוניברסיטת תל אביב',
    weights: {
      grade: 0.6,
      psychometric: 0.4,
    },
    bonusLink: 'https://go.tau.ac.il/he/ba/how-to-calculate',
    logo: '/images/universities/tau-logo.png',
    bonusRules: {
      'תנ"ך': [{ units: 5, bonus: 25 }],
      'ספרות': [{ units: 5, bonus: 25 }],
      'עברית': [{ units: 5, bonus: 20 }],
      'אנגלית': [
        { units: 5, bonus: 25 },
        { units: 4, bonus: 15 },
        { units: 3, bonus: 0 }
      ],
      'היסטוריה': [{ units: 5, bonus: 25 }],
      'אזרחות': [{ units: 5, bonus: 20 }],
      'מתמטיקה': [
        { units: 5, bonus: 35 },
        { units: 4, bonus: 12.5 }
      ],
      'פיזיקה': [{ units: 5, bonus: 25 }],
      'כימיה': [{ units: 5, bonus: 25 }],
      'ביולוגיה': [{ units: 5, bonus: 25 }],
      'מדעי המחשב': [{ units: 5, bonus: 25 }]
    }
  },
  {
    id: 'huji',
    name: 'האוניברסיטה העברית',
    weights: {
      grade: 0.6,
      psychometric: 0.4,
    },
    bonusLink: 'https://info.huji.ac.il/reception-components/bagrut-bonus',
    logo: '/images/universities/huji-logo.png',
    bonusRules: {
      'תנ"ך': [{ units: 5, bonus: 20 }],
      'ספרות': [{ units: 5, bonus: 20 }],
      'עברית': [{ units: 5, bonus: 20 }],
      'אנגלית': [
        { units: 5, bonus: 25 },
        { units: 4, bonus: 12.5 }
      ],
      'היסטוריה': [{ units: 5, bonus: 20 }],
      'אזרחות': [{ units: 5, bonus: 20 }],
      'מתמטיקה': [
        { units: 5, bonus: 30 },
        { units: 4, bonus: 12.5 }
      ],
      'פיזיקה': [{ units: 5, bonus: 20 }],
      'כימיה': [{ units: 5, bonus: 20 }],
      'ביולוגיה': [{ units: 5, bonus: 20 }],
      'מדעי המחשב': [{ units: 5, bonus: 20 }],
      'ערבית': [{ units: 5, bonus: 20 }],
      'צרפתית': [{ units: 5, bonus: 20 }]
    }
  },
  {
    id: 'technion',
    name: 'טכניון',
    weights: {
      grade: 0.6,
      psychometric: 0.4,
    },
    bonusLink: 'https://admissions.technion.ac.il/calculation-of-the-median-grade/',
    logo: '/images/universities/technion-logo.png',
    bonusRules: {
      'תנ"ך': [{ units: 5, bonus: 20 }],
      'ספרות': [{ units: 5, bonus: 20 }],
      'עברית': [{ units: 5, bonus: 20 }],
      'אנגלית': [
        { units: 5, bonus: 25 },
        { units: 4, bonus: 12.5 }
      ],
      'היסטוריה': [{ units: 5, bonus: 20 }],
      'אזרחות': [{ units: 5, bonus: 20 }],
      'מתמטיקה': [
        { units: 5, bonus: 35 },
        { units: 4, bonus: 12.5 }
      ],
      'פיזיקה': [{ units: 5, bonus: 25 }],
      'כימיה': [{ units: 5, bonus: 25 }],
      'ביולוגיה': [{ units: 5, bonus: 20 }],
      'מדעי המחשב': [{ units: 5, bonus: 25 }],
      'אלקטרוניקה': [{ units: 5, bonus: 20 }],
      'מכונות': [{ units: 5, bonus: 20 }]
    }
  },
  {
    id: 'bgu',
    name: 'בן גוריון',
    weights: {
      grade: 0.6,
      psychometric: 0.4,
    },
    bonusLink: 'https://www.bgu.ac.il/media/ygejok34/%D7%9E%D7%91%D7%95%D7%90_%D7%99%D7%93%D7%99%D7%A2%D7%95%D7%9F_%D7%AA%D7%95%D7%90%D7%A8-%D7%A8%D7%90%D7%A9%D7%95%D7%9F_%D7%AA%D7%A9%D7%A4%D7%94.pdf',
    logo: '/images/universities/bgu-logo.png',
    bonusRules: {
      'תנ"ך': [{ units: 5, bonus: 20 }],
      'ספרות': [{ units: 5, bonus: 20 }],
      'עברית': [{ units: 5, bonus: 20 }],
      'אנגלית': [
        { units: 5, bonus: 25 },
        { units: 4, bonus: 12.5 }
      ],
      'היסטוריה': [{ units: 5, bonus: 20 }],
      'אזרחות': [{ units: 5, bonus: 20 }],
      'מתמטיקה': [
        { units: 5, bonus: 30 },
        { units: 4, bonus: 12.5 }
      ],
      'פיזיקה': [{ units: 5, bonus: 20 }],
      'כימיה': [{ units: 5, bonus: 20 }],
      'ביולוגיה': [{ units: 5, bonus: 20 }],
      'מדעי המחשב': [{ units: 5, bonus: 20 }],
      'אלקטרוניקה': [{ units: 5, bonus: 20 }]
    }
  },
  {
    id: 'biu',
    name: 'בר אילן',
    weights: {
      grade: 0.6,
      psychometric: 0.4,
    },
    bonusLink: 'https://www.biu.ac.il/registration-and-admission/information/general-admission-req/matriculation-calculation',
    logo: '/images/universities/biu-logo.png',
    bonusRules: {
      'תנ"ך': [{ units: 5, bonus: 25 }],
      'ספרות': [{ units: 5, bonus: 20 }],
      'עברית': [{ units: 5, bonus: 20 }],
      'אנגלית': [
        { units: 5, bonus: 25 },
        { units: 4, bonus: 12.5 }
      ],
      'היסטוריה': [{ units: 5, bonus: 20 }],
      'אזרחות': [{ units: 5, bonus: 20 }],
      'מתמטיקה': [
        { units: 5, bonus: 30 },
        { units: 4, bonus: 12.5 }
      ],
      'פיזיקה': [{ units: 5, bonus: 20 }],
      'כימיה': [{ units: 5, bonus: 20 }],
      'ביולוגיה': [{ units: 5, bonus: 20 }],
      'מדעי המחשב': [{ units: 5, bonus: 20 }],
      'תלמוד': [{ units: 5, bonus: 25 }]
    }
  }
];

export type { University }; 