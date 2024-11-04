'use client';

import React, { useState } from 'react';
import { University } from '@/types';
import { calculateScore } from '@/lib/calculations';
import { universities } from '@/data/universities';

type ScoreType = 'final' | 'initial';

interface HistoryEntry {
  score: number;
  year: number;
}

interface ScoreCalculatorProps {
  gradeAverage: number;
  selectedUniversity: University;
  isScoreOnly?: boolean;
}

export default function ScoreCalculator({ gradeAverage, selectedUniversity, isScoreOnly = false }: ScoreCalculatorProps) {
  const [scoreType, setScoreType] = useState<ScoreType>('final');
  const [psychometric, setPsychometric] = useState<number>(0);
  const [localSelectedUniversity, setLocalSelectedUniversity] = useState<University>(selectedUniversity);
  const [score, setScore] = useState<number>(0);
  const [localGradeAverage, setLocalGradeAverage] = useState<number>(gradeAverage);

  const getHistoryByUniversity = (universityId: string): HistoryEntry[] => {
    switch (universityId) {
      case 'tau':
        return [
          { score: 742.81, year: 2024 },
          { score: 744.3, year: 2023 },
          { score: 746.07, year: 2022 },
          { score: 746.41, year: 2021 },
          { score: 740.93, year: 2020 },
          { score: 739.62, year: 2019 },
          { score: 740.15, year: 2018 },
          { score: 738.86, year: 2017 },
          { score: 733.89, year: 2016 },
        ];
      case 'huji':
        return [
          { score: 742.81, year: 2024 },
          { score: 744.3, year: 2023 },
          { score: 746.07, year: 2022 },
          { score: 746.41, year: 2021 },
          { score: 740.93, year: 2020 },
          { score: 739.62, year: 2019 },
          { score: 740.15, year: 2018 },
          { score: 738.86, year: 2017 },
          { score: 733.89, year: 2016 },
        ];
      case 'technion':
        return [
          { score: 742.81, year: 2024 },
          { score: 744.3, year: 2023 },
          { score: 746.07, year: 2022 },
          { score: 746.41, year: 2021 },
          { score: 740.93, year: 2020 },
          { score: 739.62, year: 2019 },
          { score: 740.15, year: 2018 },
          { score: 738.86, year: 2017 },
          { score: 733.89, year: 2016 },
        ];
      case 'bgu':
        return [
          { score: 742.81, year: 2024 },
          { score: 744.3, year: 2023 },
          { score: 746.07, year: 2022 },
          { score: 746.41, year: 2021 },
          { score: 740.93, year: 2020 },
          { score: 739.62, year: 2019 },
          { score: 740.15, year: 2018 },
          { score: 738.86, year: 2017 },
          { score: 733.89, year: 2016 },
        ];
      case 'biu':
        return [
          { score: 742.81, year: 2024 },
          { score: 744.3, year: 2023 },
          { score: 746.07, year: 2022 },
          { score: 746.41, year: 2021 },
          { score: 740.93, year: 2020 },
          { score: 739.62, year: 2019 },
          { score: 740.15, year: 2018 },
          { score: 738.86, year: 2017 },
          { score: 733.89, year: 2016 },
        ];
      default:
        return [];
    }
  };

  const history = getHistoryByUniversity(localSelectedUniversity.id);

  const calculateFinalScore = (average: number) => {
    const calculated = calculateScore(average, psychometric, localSelectedUniversity);
    setScore(calculated);
  };

  const getScoreRanges = (university: University) => {
    switch (university.id) {
      case 'tau':
        return {
          gradeRange: scoreType === 'final' ? '(40 - 117)' : '(40 - 117)',
          psychometricRange: scoreType === 'final' ? '(700 - 800)' : '(700 - 800)'
        };
      case 'huji':
        return {
          gradeRange: scoreType === 'final' ? '(60 - 127)' : '(16 - 30)',
          psychometricRange: scoreType === 'final' ? '(700 - 800)' : '(150 - 250)'
        };
      case 'technion':
        return {
          gradeRange: scoreType === 'final' ? '(0 - 119)' : '(150 - 250)',
          psychometricRange: scoreType === 'final' ? '(200 - 800)' : '(150 - 250)'
        };
      case 'bgu':
        return {
          gradeRange: scoreType === 'final' ? '(0 - 120)' : '(150 - 250)',
          psychometricRange: scoreType === 'final' ? '(680 - 800)' : '(150 - 250)'
        };
      case 'biu':
        return {
          gradeRange: scoreType === 'final' ? '(101 - 126)' : '(150 - 250)',
          psychometricRange: scoreType === 'final' ? '(680 - 800)' : '(150 - 250)'
        };
      default:
        return {
          gradeRange: '(40 - 117)',
          psychometricRange: '(200 - 800)'
        };
    }
  };

  const ranges = getScoreRanges(localSelectedUniversity);

  const getMinimumScore = (universityId: string): number => {
    const history = getHistoryByUniversity(universityId);
    // מחזיר את הסכם של 2024 (הערך הראשון במערך)
    return history.length > 0 ? history[0].score : 0;
  };

  const getScoreStatus = (currentScore: number, minimumScore: number): string => {
    return currentScore >= minimumScore ? 
      "עובר סף מינימלי" : 
      "לא עובר סף מינימלי";
  };

  return (
    <div className="space-y-6">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setScoreType('final')}
          className={`px-6 py-2 rounded-full ${
            scoreType === 'final'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          סופי
        </button>
        <button
          onClick={() => setScoreType('initial')}
          className={`px-6 py-2 rounded-full ${
            scoreType === 'initial'
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          ראשוני
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            {scoreType === 'final' ? 'ממוצע בגרות' : 'סכם קומבינטורי'} {ranges.gradeRange}
          </label>
          <input
            type="number"
            value={isScoreOnly ? localGradeAverage : gradeAverage}
            onChange={(e) => isScoreOnly && setLocalGradeAverage(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
            placeholder={`הכנס ${scoreType === 'final' ? 'ממוצע בגרות' : 'סכם קומבינטורי'}`}
            readOnly={!isScoreOnly}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            {scoreType === 'final' ? 'ציון פסיכומטרי' : 'מרק'} {ranges.psychometricRange}
          </label>
          <input
            type="number"
            value={psychometric}
            onChange={(e) => setPsychometric(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
            placeholder={`הכנס ${scoreType === 'final' ? 'ציון פסיכומטרי' : 'מרק'}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            מוסד לימודים
          </label>
          <select
            value={localSelectedUniversity.id}
            onChange={(e) => {
              const university = universities.find(u => u.id === e.target.value);
              if (university) {
                setLocalSelectedUniversity(university);
                console.log('Selected university:', university);
              }
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
          >
            {universities.map((university) => (
              <option key={university.id} value={university.id}>
                {university.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={() => calculateFinalScore(isScoreOnly ? localGradeAverage : gradeAverage)}
        className={`w-full ${
          scoreType === 'final' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
        } text-white px-4 py-3 rounded-md flex items-center justify-center gap-2`}
      >
        <span>בדוק עמידה בתנאים</span>
      </button>

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h3 className="text-xl font-bold text-blue-900 flex justify-between items-center">
          <span>סכם: {score.toFixed(2)}</span>
          <span className={`text-lg ${score >= getMinimumScore(localSelectedUniversity.id) ? 'text-green-600' : 'text-red-600'}`}>
            {getScoreStatus(score, getMinimumScore(localSelectedUniversity.id))}
          </span>
        </h3>
      </div>

      {/* History Table */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">טבלת סכמי עבר:</h4>
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  שנה
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  סכם {scoreType === 'final' ? 'סופי' : 'ראשוני'}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {history.map((entry) => (
                <tr key={entry.year}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.score.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 