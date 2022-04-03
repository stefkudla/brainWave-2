import React from 'react';
import course1 from '../assets/course-1.jpg';

const CourseCard = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto border border-emerald-300 rounded-md">
        <div>
          <img src={course1} className="rounded-t-md" />
        </div>
        <div className="flex p-4 pr-2">
          <div className="flex flex-col justify-between pt-1">
            <h6 className="font-medium text-slate-900">
              Native Mac Apps in Swift
            </h6>

            <p className="my-4 pr-4">
              printing and typing undustry class lorem
            </p>
            <div>
              <img />
              <span>by milanjack</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <a className="text-white text-sm whitespace-nowrap font-medium bg-emerald-300 px-4 py-2 rounded-lg cursor-pointer hover:opacity-70 transition-all">
              $70.00 USD
            </a>
            <span>3 lessons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
