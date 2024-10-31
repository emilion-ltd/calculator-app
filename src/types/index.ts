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
  logo?: string;
  bonusLink?: string;
  weights: {
    grade: number;
    psychometric: number;
  };
  bonusRules: {
    [key: string]: {
      units: number;
      bonus: number;
    }[];
  };
}

export type CalculatorType = 'grade' | 'score'; 