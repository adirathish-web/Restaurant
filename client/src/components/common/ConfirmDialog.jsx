import React from 'react';
import Modal from './Modal';
import { AlertTriangle } from 'lucide-react';

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isDanger = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center sm:items-start sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            isDanger ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600' : 'bg-brand-100 dark:bg-brand-900/30 text-brand-600'
          }`}
        >
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm text-stone-600 dark:text-stone-300">{message}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700 font-medium text-sm min-h-touch"
        >
          {cancelLabel}
        </button>
        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-white font-semibold text-sm shadow-sm transition-colors min-h-touch ${
            isDanger
              ? 'bg-rose-600 hover:bg-rose-700'
              : 'bg-brand-600 hover:bg-brand-700'
          }`}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
