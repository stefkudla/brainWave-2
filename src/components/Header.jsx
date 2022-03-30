import React from 'react';
import heroImage from '../assets/brainWave-Hero.png';

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col  h-5/6 border-b border-accent items-center px-4 pt-8 sm:px-1">
        <div className="sm:mt-12 sm:flex-1 self-start">
          <h1 className="pr-16 text-4xl sm:text-5xl font-inter text-primary">
            A Better Way to Train Your Brain
          </h1>
          <p className=" sm:text-lg pr-12 mt-6 text-primary max-w-2xl">
            brainWave takes uses cutting edge technology to train your brain.
            Anything you wish to learn can be learned with brainWave Scroll down
            to learn more!
          </p>
          <button className="mt-8 transition-all sm:text-lg bg-accent px-8 py-3 text-white rounded-sm font-medium hover:opacity-80">
            Start learning
          </button>
        </div>

        <div className="self-center justify-self-end mt-24">
          <img src={heroImage} />
        </div>
      </div>
    </div>
  );
};

export default Header;
