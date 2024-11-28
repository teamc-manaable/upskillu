import React from 'react';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-8 w-8 text-indigo-600" />
          <h1 className="text-xl font-semibold text-gray-900">Training Admin</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Admin User</span>
          <button className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
        </div>
      </div>
    </header>
  );
}