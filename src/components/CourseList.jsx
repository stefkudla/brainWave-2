import React, { useState } from 'react';
import CourseCard from './CourseCard';
import {
  course1,
  designCourse1,
  designCourse2,
  designCourse3,
  musicCourse1,
  musicCourse2,
  musicCourse3,
  softwareCourse1,
  softwareCourse2,
  softwareCourse3,
} from '../assets';

const CourseList = ({ filter }) => {
  const courses = [
    {
      id: 1,
      title: 'Modern Web Apps in React',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Software',
      price: '70.00',
      author: 'stef kudla',
      lessons: 3,
      imgSrc: course1,
    },
    {
      id: 2,
      title: 'Design Masterclass',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Design',
      price: '70.00',
      author: 'stef kudla',
      lessons: 12,
      imgSrc: designCourse1,
    },
    {
      id: 3,
      title: 'Machine Learning Music Production',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Music',
      price: '70.00',
      author: 'stef kudla',
      lessons: 8,
      imgSrc: musicCourse1,
    },
    {
      id: 4,
      title: 'Patterns & Materials',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Design',
      price: '70.00',
      author: 'stef kudla',
      lessons: 3,
      imgSrc: designCourse2,
    },
    {
      id: 5,
      title: 'Melodic Substacks',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Music',
      price: '70.00',
      author: 'stef kudla',
      lessons: 31,
      imgSrc: musicCourse2,
    },
    {
      id: 6,
      title: 'Patterns & Materials II',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Design',
      price: '70.00',
      author: 'stef kudla',
      lessons: 10,
      imgSrc: designCourse3,
    },
    {
      id: 7,
      title: 'Xayon Development & Technique',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Software',
      price: '70.00',
      author: 'stef kudla',
      lessons: 10,
      imgSrc: softwareCourse1,
    },
    {
      id: 8,
      title: 'Native React Apps in 2022',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Software',
      price: '70.00',
      author: 'stef kudla',
      lessons: 10,
      imgSrc: softwareCourse2,
    },
    {
      id: 9,
      title: 'Modern Sound Design',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Music',
      price: '70.00',
      author: 'stef kudla',
      lessons: 10,
      imgSrc: musicCourse3,
    },
    {
      id: 10,
      title: 'Smart Watch React App',
      desc: 'Morpheus take the lead show the way new course structure',
      category: 'Software',
      price: '70.00',
      author: 'stef kudla',
      lessons: 10,
      imgSrc: softwareCourse3,
    },
  ];
  const filterCourses = courses.filter((course) => {
    if (filter !== 'All') return course.category === filter;
    return courses;
  });

  return (
    <div className="grid grid-cols-1 max-w-3xl mx-auto my-12 gap-y-12 md:grid-cols-2 md:gap-10">
      {filterCourses.map((course) => (
        <CourseCard
          category={course.category}
          author={course.author}
          desc={course.desc}
          title={course.title}
          price={course.price}
          lessons={course.lessons}
          key={course.id}
          imgSrc={course.imgSrc}
        />
      ))}
    </div>
  );
};

export default CourseList;
