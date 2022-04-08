import React from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: 'Modern Web Apps in React',
      summary: 'Morpheus take the lead show the way new course structure',
      category: 'Software',
      price: '70.00',
      author: 'stef kudla',
      lessons: 3,
    },
  ];

  return (
    <div className="grid grid-cols-1 max-w-3xl mx-auto my-12 gap-y-12 md:grid-cols-2 md:gap-10">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default CourseList;
