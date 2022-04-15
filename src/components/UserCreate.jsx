import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';

const UserCreate = () => {
    return (
        <form className="flex flex-col w-[380px]">
            <div className="flex flex-col mb-3">
                <label htmlFor="name" className="text-primary text-sm mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="p-2.5 pl-6 text-sm border-2 border-gray-300 rounded"
                    placeholder="Name"
                />
                <div className="absolute">
                    <MdPerson className="mt-[38px] ml-1.5 text-gray-400" />
                </div>
            </div>
            <div className="flex flex-col mb-3">
                <label htmlFor="email" className="text-primary text-sm mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="p-2.5 pl-6 text-sm border-2 border-gray-300 rounded"
                    placeholder="Email"
                />
                <div className="absolute">
                    <MdEmail className="mt-[38px] ml-1.5 text-gray-400" />
                </div>
            </div>
            <div className="flex flex-col mb-3">
                <label htmlFor="password" className="text-primary text-sm mb-1">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="p-2.5 pl-6 text-sm border-2 border-gray-300 rounded"
                    placeholder="Password"
                />
                <div className="absolute">
                    <MdLock className="mt-[38px] ml-1.5 text-gray-400" />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="text-sm text-white bg-accent w-full my-2 rounded-md py-2.5 hover:opacity-70 transition-opacity"
                >
                    Create account
                </button>
            </div>
            <div>
                <p className="text-sm text-primary">
                    Already have an account?
                    <Link
                        to="/login"
                        href="#"
                        className="font-bold text-gray-800 hover:opacity-70 transition-opacity"
                    >
                        {' '}
                        Log in.
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default UserCreate;
