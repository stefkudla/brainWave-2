import { MdPlayCircle } from 'react-icons/md';
import pathwayHero from '../assets/pathways-hero.png';
import floatingBooks from '../assets/floating-books.mp4';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const PathwaysHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const playVideo = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-center">
        <div className="flex flex-col md:flex-row xl:flex-col mt-6 md:mt-16 flex-2">
          <div>
            <h1 className="text-3xl sm:text-5xl text-primary sm:mt-4">
              Grow Your Skills,
              <br />
              Define Your Future
            </h1>
            <p className="text-primary max-w-sm mt-8">
              We help you choose efficient pathways on your journey to learn, so
              you can focus less on the planning and more on the learning.
            </p>
            <div className="flex flex-row mt-8">
              <button className="text-sm font-medium text-white bg-accent rounded-sm px-7 py-3  hover:opacity-70 transition mr-8 whitespace-nowrap">
                Explore Pathways
              </button>
              <button
                className="flex items-center hover:opacity-70 transition-all"
                onClick={playVideo}>
                <span className="inline text-2xl mr-3 border border-accent border-1 rounded-full">
                  <MdPlayCircle />
                </span>
                <span className="text-xs text-slate-800">Watch Video</span>
              </button>
            </div>
          </div>
          <div className="flex md:flex-col md:justify-between xl:flex-row md:ml-16 lg:ml-32 xl:ml-0 gap-x-6 mt-8 xl:mt-16">
            <div>
              <p className="font-bold text-slate-800 text-xl md:text-2xl">
                40k+
              </p>
              <p className="text-xs text-primary mt-2">Happy Students</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-xl md:text-2xl">
                12k+
              </p>
              <p className="text-xs text-primary mt-2">Active Users</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-xl md:text-2xl">
                2k+
              </p>
              <p className="text-xs text-primary mt-2">Online Classes</p>
            </div>
          </div>
        </div>
        <div>
          <img src={pathwayHero} alt="pathway header" />
        </div>
        {isOpen && (
          <div className="absolute self-center">
            <video autoPlay width="340" className="">
              <source src={floatingBooks} />
            </video>
            <RiCloseLine
              color="#333"
              size={27}
              onClick={() => setIsOpen(false)}
              className="absolute top-1 right-0 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PathwaysHeader;
