import React from 'react';

export const FormField = ({ label, id, error, helpText, required, children }) => {
  const errorId = error ? `${id}-error` : undefined;
  const helpId = helpText ? `${id}-help` : undefined;
  const ariaDescribedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      {React.cloneElement(children, {
        id,
        'aria-invalid': !!error,
        'aria-describedby': ariaDescribedBy,
        className: `w-full rounded-xl border px-3.5 py-2.5 text-sm bg-white dark:bg-stone-900 border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 min-h-touch ${
          error ? 'border-rose-500 focus:ring-rose-500' : ''
        } ${children.props.className || ''}`,
      })}
      {error && (
        <p id={errorId} className="mt-1 text-xs text-rose-600 dark:text-rose-400 font-medium">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={helpId} className="mt-1 text-xs text-stone-500 dark:text-stone-400">
          {helpText}
        </p>
      )}
    </div>
  );
};

export default FormField;
