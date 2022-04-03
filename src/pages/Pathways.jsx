import React from 'react';
import Courses from '../components/Courses';

import PathwaysHeader from '../components/PathwaysHeader';

const Pathways = () => {
  return (
    <div className="container mx-auto px-4">
      <PathwaysHeader />
      <Courses />
    </div>
  );
};

export default Pathways;
