import React from 'react';

const CTA = () => {
    return (
        <div>
            <div className="container my-16 flex flex-col items-center text-center px-4">
                <h2 className="text-5xl text-gray-900">
                    Ready to join the fun?
                </h2>
                <p className="my-6 text-center text-primary">
                    brainWave is a comprehensive learning platform that gives
                    users the opportunity to learn whenever they want, wherever
                    they want!
                </p>
                <form className="shadow-lg mt-4">
                    <input
                        type="email"
                        placeholder="Email Adress"
                        className="bg-accent text-white placeholder:text-gray-300 py-3 px-6 border-r-2 border-l-gray-300"
                    />
                    <button
                        type="submit"
                        className=" py-3 px-8 bg-accent text-white rounded-r-sm hover:opacity-75"
                    >
                        Sign up
                    </button>
                </form>
                <div className="w-60 mt-8 flex justify-between">
                    <a
                        href="https://stefankudla.com/"
                        className="text-primary hover:text-gray-800"
                    >
                        Contact
                    </a>
                    <a href="" className="text-primary hover:text-gray-800">
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CTA;
