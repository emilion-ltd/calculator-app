interface BonusSubject {
  name: string;
  bonus: number;
  units: number;
}

interface UniversityBonuses {
  id: string;
  name: string;
  bonusLink: string;
  subjects: BonusSubject[];
}

export const universityBonuses: UniversityBonuses[] = [
  {
    id: 'tau',
    name: 'אוניברסיטת תל אביב',
    bonusLink: '', // נא לספק קישור
    subjects: [
      // יתמלא לאחר קבלת המידע המדויק
    ]
  },
  {
    id: 'huji',
    name: 'האוניברסיטה העברית',
    bonusLink: '', // נא לספק קישור
    subjects: []
  },
  // ... וכן הלאה
]; 