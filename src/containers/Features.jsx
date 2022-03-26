import React from 'react';
import FeatureCard from '../components/FeatureCard';
import Human1 from '../assets/Human-01.png';
import Human2 from '../assets/Human-02.png';
import Human3 from '../assets/Human-03.png';

const Features = () => {
  return (
    <div className="">
      <div className="mt-24 text-center">
        <h3 className="text-3xl mb-6 text-gray-800">
          Take the classroom with you!
        </h3>
        <p className="px-12 text-gray-800">
          brainWave is a comprehensive learning platform that gives users the
          opportunity to learn whenever they want, wherever they want!
        </p>
        <div className="gap-y-10 flex flex-col sm:flex-row sm:gap-x-6 items-center sm:justify-evenly mt-16">
          <FeatureCard imgUrl={Human1} title={'Academics'} />
          <FeatureCard imgUrl={Human2} title={'Track your progress'} />
          <FeatureCard imgUrl={Human3} title={'Connect with friends'} />
        </div>
      </div>
    </div>
  );
};

export default Features;
