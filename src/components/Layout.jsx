import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-background">
        <div className="mx-auto min-h-screen p-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
