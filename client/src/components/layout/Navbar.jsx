import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShoppingBag, Bell, Flame, User, LogOut, Shield, Store } from 'lucide-react';

export const Navbar = () => {
  const { user, logout, unreadNotificationsCount } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2.5 text-stone-900 dark:text-white font-bold text-xl tracking-tight">
          <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-sm">
            <Flame className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight">Saffron</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-1 sm:space-x-3">
          <Link
            to="/restaurants"
            className="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            Explore Restaurants
          </Link>

          {user && user.role === 'customer' && (
            <>
              <Link
                to="/cart"
                className="p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 relative min-h-touch min-w-touch flex items-center justify-center transition-colors"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
              <Link
                to="/notifications"
                className="p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 relative min-h-touch min-w-touch flex items-center justify-center transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {unreadNotificationsCount > 9 ? '9+' : unreadNotificationsCount}
                  </span>
                )}
              </Link>
            </>
          )}

          {user && user.role === 'restaurant' && (
            <Link
              to="/restaurant/dashboard"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-100 dark:hover:bg-brand-900/60 transition-colors"
            >
              <Store className="w-4 h-4" />
              <span className="hidden sm:inline">Partner Dashboard</span>
            </Link>
          )}

          {user && user.role === 'admin' && (
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Admin Console</span>
            </Link>
          )}

          {/* User Menu */}
          {user ? (
            <div className="flex items-center space-x-1 sm:space-x-2 pl-2 border-l border-stone-200 dark:border-stone-800">
              <Link
                to="/profile"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="hidden md:inline">{user.name}</span>
              </Link>
              <button
                onClick={logout}
                className="p-2 rounded-lg text-stone-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 min-h-touch min-w-touch flex items-center justify-center transition-colors"
                title="Sign out"
                aria-label="Sign out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2 pl-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 min-h-touch flex items-center transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white shadow-sm min-h-touch flex items-center transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
