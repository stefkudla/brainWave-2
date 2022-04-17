import React from 'react';
import ForgotPassword from '../components/ForgotPassword';

const ResetPassword = () => {
    return (
        <div className="grid grid-cols-1 w-full mx-auto container justify-items-center mt-24 p-1">
            <div>
                <div className="px-4 sm:px-1">
                    <h2 className="text-primary text-3xl">Reset Password</h2>
                </div>
                <ForgotPassword />
            </div>
        </div>
    );
};

export default ResetPassword;
