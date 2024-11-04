export interface Subject {
  id: string;
  name: string;
  grade: number;
  units: number;
  isDefault: boolean;
  examType?: 'exam' | 'work';
  bonus?: number;
}

export interface University {
  id: string;
  name: string;
  bonusLink: string;
  logo: string;
  bonusRules: {
    [key: string]: {
      units: number;
      bonus: number;
    }[];
  };
  weights: {
    grade: number;
    psychometric: number;
  };
}

export type CalculatorType = 'grade' | 'score'; 