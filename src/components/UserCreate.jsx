import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { useAuth } from '../contexts/AuthContext';

const UserCreate = () => {
    // const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch {
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    return (
        <>
            {error && (
                <p className="bg-red-500 text-white pl-1 rounded">
                    {error}. Please try again.
                </p>
            )}
            <form className="flex flex-col w-[380px]" onSubmit={handleSubmit}>
                {/* <div className="flex flex-col mb-3">
                    <label htmlFor="name" className="text-primary text-sm mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="p-2.5 pl-6 text-sm border-2 border-gray-300 rounded"
                        placeholder="Name"
                        ref={nameRef}
                        required
                    />
                    <div className="absolute">
                        <MdPerson className="mt-[38px] ml-1.5 text-gray-400" />
                    </div>
                </div> */}
                <div className="flex flex-col mb-3">
                    <label
                        htmlFor="email"
                        className="text-primary text-sm mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="p-2.5 pl-6 text-sm border-2 border-gray-300 rounded"
                        placeholder="Email"
                        ref={emailRef}
                        required
                    />
                    <div className="absolute">
                        <MdEmail className="mt-[38px] ml-1.5 text-gray-400" />
                    </div>
                </div>
                <div className="flex flex-col mb-3">
                    <label
                        htmlFor="password"
                        className="text-primary text-sm mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="p-2.5 pl-6 text-sm border-2 border-gray-300 rounded"
                        placeholder="Password"
                        ref={passwordRef}
                        required
                    />
                    <div className="absolute">
                        <MdLock className="mt-[38px] ml-1.5 text-gray-400" />
                    </div>
                </div>
                <div className="flex flex-col mb-3">
                    <label
                        htmlFor="password"
                        className="text-primary text-sm mb-1"
                    >
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="p-2.5 pl-6 text-sm border-2 border-gray-300 rounded"
                        placeholder="Confirm password"
                        ref={passwordConfirmRef}
                        required
                    />
                    <div className="absolute">
                        <MdLock className="mt-[38px] ml-1.5 text-gray-400" />
                    </div>
                </div>
                <div>
                    <button
                        disabled={loading}
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
        </>
    );
};

export default UserCreate;
