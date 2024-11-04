'use client';

import { useState } from 'react';
import Introduction from './Introduction';
import GradeCalculator from './GradeCalculator';
import ScoreCalculator from './ScoreCalculator';
import { universities } from '@/data/universities';
import { University } from '@/types';

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [gradeAverage, setGradeAverage] = useState<number>(0);
  const [calculatorType, setCalculatorType] = useState<'full' | 'score-only'>('full');
  const [selectedUniversity, setSelectedUniversity] = useState<University>(universities[0]);

  const handleStart = (type: 'full' | 'score-only') => {
    setCalculatorType(type);
    setStep(type === 'full' ? 2 : 3);
  };

  const handleNext = (average: number, university: University) => {
    setGradeAverage(average);
    setSelectedUniversity(university);
    setStep(3);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {step === 1 && (
        <div className="space-y-6 text-center">
          <h1 className="text-2xl font-bold">ברוכים הבאים למחשבון הסכם</h1>
          <p className="text-lg mb-8">
            בחר את סוג החישוב הרצוי
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleStart('full')}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
            >
              חישוב מלא (כולל בגרויות)
            </button>
            <button
              onClick={() => handleStart('score-only')}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
            >
              חישוב סכם בלבד
            </button>
          </div>
        </div>
      )}
      {step === 2 && <GradeCalculator onNext={handleNext} />}
      {step === 3 && (
        <ScoreCalculator 
          gradeAverage={gradeAverage} 
          selectedUniversity={selectedUniversity}
          isScoreOnly={calculatorType === 'score-only'}
        />
      )}
    </div>
  );
} 