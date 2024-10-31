'use client';

import React, { useState } from 'react';
import { University } from '@/types';
import { calculateScore, universities } from '@/lib/calculations';

type ScoreType = 'final' | 'initial';

interface HistoryEntry {
  score: number;
  year: number;
}

export default function ScoreCalculator() {
  const [scoreType, setScoreType] = useState<ScoreType>('final');
  const [gradeAverage, setGradeAverage] = useState<number>(0);
  const [psychometric, setPsychometric] = useState<number>(0);
  const [selectedUniversity, setSelectedUniversity] = useState<University>(universities[0]);
  const [score, setScore] = useState<number>(0);
  const [history] = useState<HistoryEntry[]>([
    { score: 717.02, year: 2024 },
    { score: 726.58, year: 2023 },
    { score: 730.09, year: 2022 },
    { score: 733.17, year: 2021 },
    { score: 726.85, year: 2020 },
  ]);

  const calculateFinalScore = () => {
    const calculated = calculateScore(gradeAverage, psychometric, selectedUniversity);
    setScore(calculated);
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
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          ראשוני
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            ממוצע בגרות (117 - 40)
          </label>
          <input
            type="number"
            value={gradeAverage}
            onChange={(e) => setGradeAverage(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
            min="40"
            max="117"
            placeholder="הכנס ממוצע בגרות"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            ציון פסיכומטרי (800 - 200)
          </label>
          <input
            type="number"
            value={psychometric}
            onChange={(e) => setPsychometric(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
            min="200"
            max="800"
            placeholder="הכנס ציון פסיכומטרי"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            מוסד לימודים
          </label>
          <select
            value={selectedUniversity.id}
            onChange={(e) => {
              const university = universities.find(u => u.id === e.target.value);
              if (university) setSelectedUniversity(university);
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
        onClick={calculateFinalScore}
        className="w-full bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 flex items-center justify-center gap-2"
      >
        <span>חישוב סכם</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </button>

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h3 className="text-xl font-bold text-blue-900">
          סכם: {score.toFixed(2)}
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
                  סכם סופי
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