import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { MdEmail } from 'react-icons/md';

const ForgotPassword = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch {
            setError('Failed to reset password');
        }
    }

    return (
        <>
            {(error || message) && <p>{error || message}</p>}
            <form
                className="flex flex-col w-[380px] px-4 sm:px-1"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col mb-3">
                    <label
                        htmlFor="email"
                        className="text-primary text-sm my-1"
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
                        <MdEmail className="mt-[42px] ml-1.5 text-gray-400" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        disabled={loading}
                        type="submit"
                        className="text-sm text-white bg-accent w-full my-2 rounded-md py-2.5 hover:opacity-70 transition-opacity"
                    >
                        Reset Password
                    </button>
                    <Link
                        to="/login"
                        className="hover:opacity-70 transition-opacity"
                    >
                        Login
                    </Link>
                    <div>
                        <p className="text-sm text-primary mt-3">
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
                </div>
            </form>
        </>
    );
};

export default ForgotPassword;
