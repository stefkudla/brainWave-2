import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/brainWave-logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    const menuItems = [
      { name: 'Home', path: '/' },
      { name: 'Pathways', path: '/pathways' },
      { name: 'Blog', path: '/blog' },
    ];

    return (
      <div>
        <div className="text-primary flex flex-col md:flex-row gap-y-2 md:gap-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="transition-all  hover:text-white hover:bg-blue-400 p-2
             rounded"
              onClick={() => setToggleMenu(!toggleMenu)}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background">
      <nav className="container mx-auto h-16 flex justify-between items-center px-2 sm:py-2">
        <div>
          <Link to="/">
            <img src={logo} alt="brainwave logo" className="" />
          </Link>
        </div>

        <div className="hidden md:block">
          <Menu />
        </div>

        <div className="hidden md:block">
          <a className="text-slate-800 hover:opacity-60 font-medium cursor-pointer mr-6 transition-all">
            Log in
          </a>
          <Link
            to="/pathways"
            className="bg-accent rounded-sm py-3 px-6 transition
          hover:text-slate-100 text-white hover:bg-slate-800 font-medium">
            Get Started
          </Link>
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
              <div className="mt-4 ">
                <Link
                  to="/pathways"
                  className="bg-accent rounded-sm px-7 py-3 transition
            hover:text-slate-100 text-white hover:bg-slate-800 whitespace-nowrap font-medium"
                  onClick={() => setToggleMenu(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
