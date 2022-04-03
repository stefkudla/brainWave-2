import { MdPlayCircle } from 'react-icons/md';
import pathwayHero from '../assets/pathways-hero.png';

const PathwaysHeader = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col md:flex-row lg:flex-col mt-6 md:mt-16 flex-2">
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
              <button className="flex items-center hover:opacity-70 transition-all">
                <span className="inline text-2xl mr-3 border border-accent border-1 rounded-full">
                  <MdPlayCircle />
                </span>
                <span className="text-xs text-slate-800">Watch Video</span>
              </button>
            </div>
          </div>
          <div className="flex md:flex-col md:justify-between lg:flex-row md:ml-16 lg:ml-0 gap-x-6 mt-8 lg:mt-16">
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
          <img src={pathwayHero} />
        </div>
      </div>
    </div>
  );
};

export default PathwaysHeader;
