'use client';

import React, { useState } from 'react';
import { Subject, University } from '@/types';
import SubjectTable from './SubjectTable';
import { calculateGradeAverage } from '@/lib/calculations';
import { universities } from '@/data/universities';
import { DefaultUniversityIcon } from '../UniversityIcon';
import Image from 'next/image';

const defaultSubjects: Subject[] = [
  { id: '1', name: 'תנ"ך', grade: 0, units: 2, isDefault: true },
  { id: '2', name: 'ספרות', grade: 0, units: 2, isDefault: true },
  { id: '3', name: 'עברית', grade: 0, units: 2, isDefault: true },
  { id: '4', name: 'אנגלית', grade: 0, units: 5, isDefault: true },
  { id: '5', name: 'היסטוריה', grade: 0, units: 2, isDefault: true },
  { id: '6', name: 'אזרחות', grade: 0, units: 2, isDefault: true },
  { id: '7', name: 'מתמטיקה', grade: 0, units: 5, isDefault: true },
];

export default function GradeCalculator({ onNext }: { onNext: (average: number, university: University) => void }) {
  const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);

  const average = calculateGradeAverage(subjects);
  const totalUnits = subjects.reduce((acc, subject) => acc + subject.units, 0);
  const filledUnits = subjects.reduce((acc, subject) => subject.grade > 0 ? acc + subject.units : acc, 0);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { 
        id: String(subjects.length + 1), 
        name: '', 
        grade: 0, 
        units: 0, 
        isDefault: false 
      },
    ]);
  };

  const updateSubject = (id: string, updates: Partial<Subject>) => {
    setSubjects(
      subjects.map((subject: Subject) =>
        subject.id === id ? { ...subject, ...updates } : subject
      )
    );
  };

  const removeSubject = (id: string) => {
    const subject = subjects.find(s => s.id === id);
    if (subject && !subject.isDefault) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <select
          className="w-full p-2 border border-gray-300 rounded-md text-right"
          value={selectedUniversity.id}
          onChange={(e) => {
            const uni = universities.find(u => u.id === e.target.value);
            if (uni) setSelectedUniversity(uni);
          }}
        >
          {universities.map((uni) => (
            <option key={uni.id} value={uni.id}>
              {uni.name}
            </option>
          ))}
        </select>

        <div className="mt-2 flex items-center justify-between">
          <div className="h-12 w-24 relative flex items-center justify-center">
            {selectedUniversity.logo ? (
              <Image
                src={selectedUniversity.logo}
                alt={`לוגו ${selectedUniversity.name}`}
                layout="fill"
                objectFit="contain"
              />
            ) : (
              <DefaultUniversityIcon />
            )}
          </div>
          <a
            href={selectedUniversity.bonusLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            מידע על בונוסים
          </a>
        </div>
      </div>

      <SubjectTable
        subjects={subjects}
        onUpdate={updateSubject}
        onRemove={removeSubject}
        selectedUniversity={selectedUniversity}
      />
      
      <button
        onClick={addSubject}
        className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2"
      >
        הוסף מקצוע
      </button>

      <div className="mt-6 p-4 bg-blue-50 rounded-md text-right">
        <h3 className="text-xl font-bold text-blue-900">
          סה&quot;כ יח&quot;ל לחישוב: {filledUnits}/{totalUnits} | ממוצע בגרות מיטבי: {average.toFixed(2)}
        </h3>
      </div>

      <button
        onClick={() => onNext(average, selectedUniversity)}
        className="w-full bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600"
      >
        המשך
      </button>
    </div>
  );
} 