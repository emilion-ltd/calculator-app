import React from 'react';
import { Subject, University } from '@/types';

interface SubjectTableProps {
  subjects: Subject[];
  onUpdate: (id: string, updates: Partial<Subject>) => void;
  onRemove: (id: string) => void;
  selectedUniversity: University;
}

export default function SubjectTable({
  subjects,
  onUpdate,
  onRemove,
  selectedUniversity,
}: SubjectTableProps) {

  const calculateBonus = (subject: Subject): number => {
    if (!selectedUniversity.bonusRules[subject.name]) return 0;
    const effectiveUnits = subject.units > 5 ? 5 : subject.units;
    const rule = selectedUniversity.bonusRules[subject.name].find(
      r => r.units === effectiveUnits
    );
    return rule ? rule.bonus : 0;
  };

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-1 sm:px-6 py-1 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                מקצוע
              </th>
              <th className="px-1 sm:px-6 py-1 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                סוג
              </th>
              <th className="px-1 sm:px-6 py-1 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                ציון
              </th>
              <th className="px-1 sm:px-6 py-1 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                יח"ל
              </th>
              <th className="px-1 sm:px-6 py-1 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                בונוס
              </th>
              <th className="px-1 sm:px-6 py-1 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                פעולות
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subjects.map((subject) => {
              const bonus = calculateBonus(subject);
              return (
                <tr key={subject.id} className="hover:bg-gray-50">
                  <td className="px-1 sm:px-6 py-1 sm:py-4">
                    <input
                      type="text"
                      value={subject.name}
                      onChange={(e) =>
                        onUpdate(subject.id, { 
                          name: e.target.value,
                          bonus: calculateBonus({...subject, name: e.target.value})
                        })
                      }
                      className="border rounded-md px-1 py-1 w-full text-right text-xs sm:text-sm"
                      placeholder="שם המקצוע"
                      readOnly={subject.isDefault}
                    />
                  </td>
                  <td className="px-1 sm:px-6 py-1 sm:py-4">
                    <select
                      value={subject.examType || 'exam'}
                      onChange={(e) =>
                        onUpdate(subject.id, { examType: e.target.value as 'exam' | 'work' })
                      }
                      className="border rounded-md px-1 py-1 w-full text-right text-xs sm:text-sm"
                    >
                      <option value="exam">בחינה</option>
                      <option value="work">עבודה</option>
                    </select>
                  </td>
                  <td className="px-1 sm:px-6 py-1 sm:py-4">
                    <input
                      type="number"
                      value={subject.grade || ''}
                      onChange={(e) =>
                        onUpdate(subject.id, { 
                          grade: Number(e.target.value),
                          bonus: calculateBonus(subject)
                        })
                      }
                      className="border rounded-md px-1 py-1 w-14 sm:w-20 text-right text-xs sm:text-sm"
                      min="0"
                      max="100"
                      placeholder="ציון"
                    />
                  </td>
                  <td className="px-1 sm:px-6 py-1 sm:py-4">
                    <input
                      type="number"
                      value={subject.units || ''}
                      onChange={(e) => {
                        const newUnits = Math.min(Number(e.target.value), 10);
                        const newSubject = {...subject, units: newUnits};
                        const newBonus = calculateBonus(newSubject);
                        onUpdate(subject.id, { 
                          units: newUnits,
                          bonus: newBonus
                        });
                      }}
                      className="border rounded-md px-1 py-1 w-10 sm:w-16 text-right text-xs sm:text-sm"
                      min="1"
                      max="10"
                      placeholder="יח״ל"
                    />
                  </td>
                  <td className="px-1 sm:px-6 py-1 sm:py-4 text-center text-xs sm:text-sm">
                    {bonus > 0 ? `+${bonus}` : '-'}
                  </td>
                  <td className="px-1 sm:px-6 py-1 sm:py-4">
                    {!subject.isDefault && (
                      <button
                        onClick={() => onRemove(subject.id)}
                        className="text-red-600 hover:text-red-900 text-xs sm:text-sm"
                      >
                        מחק
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
} 