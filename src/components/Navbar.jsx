import React, { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/brainWave-logo.png';

const Menu = () => {
  return (
    <>
      <div className="text-primary flex flex-col md:flex-row gap-y-2 md:gap-x-6">
        <Link
          to="/"
          className="transition-all  hover:text-gray-900 hover:bg-blue-400 p-2
           rounded">
          Home
        </Link>
        <Link
          to="/pathways"
          className="transition  hover:text-gray-900 hover:bg-blue-400 p-2 rounded">
          Pathways
        </Link>

        <Link
          to="/blog"
          className="transition  hover:text-gray-900 hover:bg-blue-400 p-2 rounded">
          Blog
        </Link>
      </div>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-background">
      <nav className="container mx-auto h-16 flex justify-between items-center px-2 sm:py-2">
        <div>
          <img src={logo} alt="brainwave logo" className="" />
        </div>

        <div className="hidden md:block">
          <Menu />
        </div>

        <div className="hidden md:block">
          <button
            href=""
            className="bg-accent rounded-sm py-3 px-8 transition
          hover:text-slate-100 text-white hover:bg-slate-800 font-medium">
            Get Started
          </button>
        </div>

        <div className="block md:hidden relative">
          {toggleMenu ? (
            <RiCloseLine
              color="#333"
              size={27}
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu3Line
              color="#333"
              size={27}
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            />
          )}
          {toggleMenu && (
            <div className="absolute top-6 right-0 bg-slate-50 px-6 py-4 rounded-sm transition-all shadow-md text-center">
              <Menu />
              <button
                href=""
                className="bg-accent rounded-sm px-8 py-2 transition
            hover:text-slate-100 text-white hover:bg-slate-800 mt-4 whitespace-nowrap font-medium">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
