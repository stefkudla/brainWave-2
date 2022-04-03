import React from 'react';
import course1 from '../assets/course-1.jpg';

const CourseCard = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto border border-emerald-300 rounded-md">
        <div className="relative">
          <img src={course1} className="rounded-t-md" />
          <span className="text-slate-200 text-opacity-90 text-xs bg-gray-700 bg-opacity-40 px-4 py-2 rounded-lg absolute top-4 left-4">
            Software
          </span>
        </div>
        <div className="flex p-4 pr-2">
          <div className="flex flex-col justify-between pt-1">
            <h6 className="font-medium text-slate-900">
              Modern Web Apps in React
            </h6>
            <p className="text-sm text-primary my-6 pr-8">
              Morpheus take the lead show the way new course structure
            </p>
            <div>
              <img />
              <span>by stef kudla</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <span className="text-white text-sm whitespace-nowrap font-medium bg-emerald-300 px-4 py-2 rounded-lg">
              $70.00 USD
            </span>
            <span className="text-emerald-400 text-sm whitespace-nowrap border-2 border-emerald-300 px-4 py-2 rounded-lg">
              3 lessons
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
