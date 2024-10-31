'use client';

import { useState } from 'react';
import GradeCalculator from './GradeCalculator';
import ScoreCalculator from './ScoreCalculator';
import { CalculatorType } from 'calculator-app/src/types';

export default function Calculator() {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>('grade');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-center space-x-4 mb-6 rtl:space-x-reverse">
        <button
          className={`px-4 py-2 rounded-md ${
            calculatorType === 'grade'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setCalculatorType('grade')}
        >
          מחשבון בגרות
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            calculatorType === 'score'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setCalculatorType('score')}
        >
          מחשבון סכם
        </button>
      </div>

      {calculatorType === 'grade' ? <GradeCalculator /> : <ScoreCalculator />}
    </div>
  );
} 