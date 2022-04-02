import React from 'react';

const FeatureCard = ({ imgUrl, title }) => {
  return (
    <div>
      <div className="container w-52">
        <div className="bg-accent flex justify-center p-6 h-60">
          <img src={imgUrl} className="w-full" />
        </div>
        <div className="bg-white h-14">
          <h5 className="font-medium p-2 text-center text-black">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
