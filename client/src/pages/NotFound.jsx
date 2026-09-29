import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Home } from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
      <div className="w-20 h-20 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 flex items-center justify-center mb-4">
        <Flame className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-bold text-stone-900 dark:text-white">404</h1>
      <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 max-w-md">
        We couldn't find this page. It may have moved or the link might be wrong.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm min-h-touch inline-flex items-center space-x-2"
      >
        <Home className="w-4 h-4" />
        <span>Go to Home</span>
      </button>
    </div>
  );
};

export default NotFound;
