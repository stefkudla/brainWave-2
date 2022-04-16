import React from 'react';
import UserCreate from '../components/UserCreate';

const Register = () => {
    return (
        <div className="grid grid-cols-1 w-full mx-auto container justify-items-center mt-24 p-1">
            <div className="">
                <div>
                    <h2 className="text-primary text-3xl">Get Started</h2>
                    <p className="text-sm text-primary mt-1 mb-3">
                        Enter your details and start learning
                    </p>
                </div>
                <UserCreate />
            </div>
        </div>
    );
};

export default Register;
