import React from 'react';

const STATUS_COLORS = {
  // Order Statuses
  PAYMENT_PENDING: 'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300',
  PLACED:          'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
  CONFIRMED:       'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
  PREPARING:       'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300',
  READY:           'bg-accent-100 text-accent-700 dark:bg-accent-700/20 dark:text-accent-500',
  OUT_FOR_DELIVERY:'bg-accent-100 text-accent-700 dark:bg-accent-700/20 dark:text-accent-500',
  DELIVERED:       'bg-accent-100 text-accent-700 dark:bg-accent-700/20 dark:text-accent-500',
  COMPLETED:       'bg-accent-100 text-accent-700 dark:bg-accent-700/20 dark:text-accent-500',
  REJECTED:        'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
  CANCELLED:       'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
  EXPIRED:         'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400',

  // Account / Restaurant Statuses
  ACTIVE:    'bg-accent-100 text-accent-700 dark:bg-accent-700/20 dark:text-accent-500',
  SUSPENDED: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',

  // Payment Statuses
  PENDING:        'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300',
  FAILED:         'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
  REFUND_PENDING: 'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300',
  REFUNDED:       'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
};

export const StatusBadge = ({ status }) => {
  const colorClass = STATUS_COLORS[status] || 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300';
  const label = status ? status.replace(/_/g, ' ') : 'UNKNOWN';

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${colorClass}`}>
      {label}
    </span>
  );
};

export default StatusBadge;
