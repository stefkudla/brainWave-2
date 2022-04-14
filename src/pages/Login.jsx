import React from 'react';
import UserLogin from '../components/UserLogin';

const Login = () => {
  return (
    <div className="grid grid-cols-1 w-full mx-auto container justify-items-center mt-24 p-1">
      <div className="">
        <div>
          <h2 className="text-primary text-3xl">Welcome back</h2>
          <p className="text-sm text-primary mt-1 mb-3">
            Please enter your details
          </p>
        </div>
        <UserLogin />
      </div>
    </div>
  );
};

export default Login;
