import React from 'react';

export default function Introduction({ onStart }: { onStart: () => void }) {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">ברוכים הבאים למחשבון הסכם</h1>
      <p className="text-lg">
        כאן תוכלו לחשב את ממוצע הבגרויות שלכם, את הסכם עבור מוסדות שונים, ולבדוק עמידה בתנאים ראשוניים למקצועות מבוקשים.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        התחל
      </button>
    </div>
  );
} 