import React from 'react';

export const Table = ({ headers, children }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm">
      <table className="w-full text-left text-sm text-stone-700 dark:text-stone-300">
        <thead className="bg-stone-50 dark:bg-stone-900/80 text-xs font-semibold text-stone-500 dark:text-stone-400 border-b border-stone-200 dark:border-stone-800 tracking-wide uppercase">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} scope="col" className="px-4 py-3 sm:px-6">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100 dark:divide-stone-800">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
