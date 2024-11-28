import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

interface TrainingCardProps {
  title: string;
  date: string;
  students: number;
  duration: string;
}

export function TrainingCard({ title, date, students, duration }: TrainingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-2" />
          <span className="text-sm">{students} students enrolled</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
      </div>
    </div>
  );
}