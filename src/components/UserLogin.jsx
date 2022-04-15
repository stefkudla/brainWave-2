import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';

const UserLogin = () => {
    return (
        <form className="flex flex-col w-[380px]">
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
                    <MdLock className="mt-[37px] ml-1.5 text-gray-400" />
                </div>
            </div>
            <div className="flex justify-between my-1">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="rememberUser"
                        id="rememberUser"
                    />
                    <label
                        htmlFor="rememberUser"
                        className="text-sm font-bold text-gray-800 ml-2"
                    >
                        Remember for 30 days
                    </label>
                </div>
                <a
                    href="#"
                    className="text-sm font-bold text-gray-800 hover:opacity-60 transition-opacity"
                >
                    Forgot Password?
                </a>
            </div>
            <div>
                <button
                    type="submit"
                    className="text-sm text-white bg-accent w-full my-2 rounded-md py-2.5 hover:opacity-70 transition-opacity"
                >
                    Sign in
                </button>
            </div>
            <div>
                <p className="text-sm text-primary">
                    Don't have an account?
                    <Link
                        to="/register"
                        className="font-bold text-gray-800 hover:opacity-70 transition-opacity"
                    >
                        {' '}
                        Sign up for free!
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default UserLogin;
