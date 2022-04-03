import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto mt-12">
        <h3 className="mb-4 sm:mb-0 font-medium text-2xl sm:text-3xl text-slate-700">
          Our Popular Courses
        </h3>
        <div className="flex items-center gap-x-6 border border-1 border-slate-400 py-1 px-4 rounded-full">
          <a className="text-sm text-white bg-accent cursor-pointer hover:text-emerald-400 transition-all px-6 py-2 rounded-full">
            All
          </a>
          <a className="text-sm text-primary cursor-pointer hover:text-emerald-400 transition-all">
            Software
          </a>
          <a className="text-sm text-primary cursor-pointer hover:text-emerald-400 transition-all">
            Art & Design
          </a>
          <a className="text-sm text-primary cursor-pointer hover:text-emerald-400 transition-all">
            Music
          </a>
        </div>
      </div>
      <CourseCard />
    </div>
  );
};

export default Courses;
