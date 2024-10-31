import { Subject, University } from '@/types';

export function calculateGradeAverage(subjects: Subject[]): number {
  const validSubjects = subjects.filter(subject => subject.grade > 0 && subject.units > 0);
  
  if (validSubjects.length === 0) return 0;

  const totalWeightedGrade = validSubjects.reduce((acc, subject) => {
    const gradeWithBonus = subject.grade + (subject.bonus || 0);
    return acc + (gradeWithBonus * subject.units);
  }, 0);

  const totalUnits = validSubjects.reduce((acc, subject) => acc + subject.units, 0);

  return totalUnits === 0 ? 0 : totalWeightedGrade / totalUnits;
}

export function calculateScore(
  gradeAverage: number,
  psychometric: number,
  university: University
): number {
  if (gradeAverage === 0 || psychometric === 0) return 0;
  
  return (
    gradeAverage * university.weights.grade +
    psychometric * university.weights.psychometric
  );
}

export const universities: University[] = [
  {
    id: 'tau',
    name: 'אוניברסיטת תל אביב',
    weights: { grade: 0.5, psychometric: 0.5 },
  },
  {
    id: 'huji',
    name: 'האוניברסיטה העברית',
    weights: { grade: 0.4, psychometric: 0.6 },
  },
  {
    id: 'technion',
    name: 'הטכניון',
    weights: { grade: 0.3, psychometric: 0.7 },
  },
]; 