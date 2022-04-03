import React from 'react';

const FeatureCard = ({ imgUrl, title }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-accent rounded-t-md flex justify-center items-center p-6 w-[200px] h-[250px]">
          <img src={imgUrl} className="" />
        </div>
        <div className="bg-white h-14 rounded-b-sm">
          <h5 className="font-medium p-2 text-center text-black">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
