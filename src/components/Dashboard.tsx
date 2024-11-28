import React from 'react';
import { Plus } from 'lucide-react';
import { TrainingCard } from './TrainingCard';

const mockTrainings = [
  {
    title: "React Advanced Concepts",
    date: "March 15, 2024",
    students: 12,
    duration: "8 weeks"
  },
  {
    title: "TypeScript Fundamentals",
    date: "March 20, 2024",
    students: 15,
    duration: "6 weeks"
  },
  {
    title: "API Design Patterns",
    date: "March 25, 2024",
    students: 10,
    duration: "4 weeks"
  }
];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Training Sessions</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Plus className="h-5 w-5 mr-2" />
          Create Training
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTrainings.map((training, index) => (
          <TrainingCard key={index} {...training} />
        ))}
      </div>
    </div>
  );
}