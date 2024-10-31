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
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              מקצוע
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              סוג בחינה
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              ציון
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              יחידות
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              בונוס
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              פעולות
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {subjects.map((subject) => {
            const bonus = calculateBonus(subject);
            return (
              <tr key={subject.id}>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={subject.name}
                    onChange={(e) =>
                      onUpdate(subject.id, { 
                        name: e.target.value,
                        bonus: calculateBonus({...subject, name: e.target.value})
                      })
                    }
                    className="border rounded-md px-2 py-1 w-full text-right"
                    placeholder="שם המקצוע"
                    readOnly={subject.isDefault}
                  />
                </td>
                <td className="px-6 py-4">
                  <select
                    value={subject.examType || 'exam'}
                    onChange={(e) =>
                      onUpdate(subject.id, { examType: e.target.value as 'exam' | 'work' })
                    }
                    className="border rounded-md px-2 py-1 w-full text-right"
                  >
                    <option value="exam">בחינה</option>
                    <option value="work">עבודה</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    value={subject.grade || ''}
                    onChange={(e) =>
                      onUpdate(subject.id, { 
                        grade: Number(e.target.value),
                        bonus: calculateBonus(subject)
                      })
                    }
                    className="border rounded-md px-2 py-1 w-24 text-right"
                    min="0"
                    max="100"
                    placeholder="ציון"
                  />
                </td>
                <td className="px-6 py-4">
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
                    onBlur={(e) => {
                      const currentValue = Number(e.target.value);
                      if (currentValue > 10) {
                        const newSubject = {...subject, units: 10};
                        const newBonus = calculateBonus(newSubject);
                        onUpdate(subject.id, { 
                          units: 10,
                          bonus: newBonus
                        });
                      }
                    }}
                    className="border rounded-md px-2 py-1 w-24 text-right"
                    min="1"
                    max="10"
                    placeholder="יחידות"
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  {bonus > 0 ? `+${bonus}` : '-'}
                </td>
                <td className="px-6 py-4">
                  {!subject.isDefault && (
                    <button
                      onClick={() => onRemove(subject.id)}
                      className="text-red-600 hover:text-red-900 mr-auto"
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
  );
} 