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
  
  let finalScore = 0;
  
  if (university.weights.grade === 0.6 && university.weights.psychometric === 0.4) {
    const normalizedGrade = ((gradeAverage - 40) * 600 / 77) + 200;
    
    finalScore = (normalizedGrade * university.weights.grade) + 
                (psychometric * university.weights.psychometric);
  }
  
  return finalScore;
} 