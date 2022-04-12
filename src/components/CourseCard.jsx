import React from 'react';
import { Link } from 'react-router-dom';
import { formatSlug } from '../util/Helper';

const CourseCard = (props) => {
  return (
    <div>
      <div className="max-w-sm mx-auto border border-emerald-300 rounded-md ">
        <div className="relative">
          <img
            src={props.imgSrc}
            className="rounded-t-md max-h-fit transition-all hover:opacity-80"
          />
          <span className="text-slate-200 text-opacity-90 text-xs bg-gray-700 bg-opacity-40 px-4 py-2 rounded-lg absolute top-4 left-4">
            {props.category}
          </span>
        </div>
        <div className="flex p-4 pr-2">
          <div className="flex flex-col justify-between pt-1">
            <Link to="/pathways">
              <h6 className="font-medium text-slate-900 transition-all hover:opacity-60">
                {props.title}
              </h6>
            </Link>
            <p className="text-sm text-primary my-6 pr-8">{props.desc}</p>
            <div>
              <img />
              <span>by {props.author}</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <span className="text-white text-sm whitespace-nowrap font-medium bg-emerald-300 px-4 py-2 rounded-lg">
              {`$${props.price} USD`}
            </span>
            <span className="text-emerald-400 text-sm whitespace-nowrap border-2 border-emerald-300 px-4 py-2 rounded-lg">
              {`${props.lessons} lessons`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
