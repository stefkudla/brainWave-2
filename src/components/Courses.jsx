import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseList from './CourseList';

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    function toggleCategory(e) {
        let targeted = e.target.innerHTML;
        setSelectedCategory(targeted);
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto mt-12">
                <h3 className="mb-4 md:mb-0 font-medium text-2xl sm:text-3xl text-slate-700">
                    Our Popular Courses
                </h3>
                <div className="flex items-center gap-x-6 border border-1 border-slate-400 py-3 px-6 rounded-full">
                    <a
                        className={
                            selectedCategory === 'All'
                                ? 'active-category text-sm px-2 py-1'
                                : 'text-sm text-primary cursor-pointer hover:text-emerald-400 transition-all px-2 py-1'
                        }
                        onClick={toggleCategory}
                    >
                        All
                    </a>
                    <a
                        className={
                            selectedCategory === 'Software'
                                ? 'active-category text-sm px-2 py-1'
                                : 'text-sm text-primary cursor-pointer hover:text-emerald-400 px-2 py-1'
                        }
                        onClick={toggleCategory}
                    >
                        Software
                    </a>
                    <a
                        className={
                            selectedCategory === 'Design'
                                ? 'active-category text-sm px-2 py-1'
                                : 'text-sm text-primary cursor-pointer hover:text-emerald-400 px-2 py-1'
                        }
                        onClick={toggleCategory}
                    >
                        Design
                    </a>
                    <a
                        className={
                            selectedCategory === 'Music'
                                ? 'active-category text-sm px-2 py-1'
                                : 'text-sm text-primary cursor-pointer hover:text-emerald-400 px-2 py-1'
                        }
                        onClick={toggleCategory}
                    >
                        Music
                    </a>
                </div>
            </div>
            <div className="">
                <CourseList filter={selectedCategory} />
            </div>
        </div>
    );
};

export default Courses;
