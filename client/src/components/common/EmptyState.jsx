import React from 'react';
import { PackageOpen } from 'lucide-react';

export const EmptyState = ({ title = 'No items found', message = 'There are no items to display at this time.', actionLabel, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border-2 border-dashed border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 my-4">
      <div className="w-14 h-14 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-300 flex items-center justify-center mb-4">
        <PackageOpen className="w-7 h-7" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-stone-500 dark:text-stone-400 max-w-sm mb-6">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm min-h-touch"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
