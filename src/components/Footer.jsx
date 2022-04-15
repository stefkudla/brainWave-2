import React from 'react';
import logo from '../assets/images/brainWave-logo.png';

const Footer = () => {
    return (
        <div>
            <div className="bg-background pt-12 px-8 pb-4 mx-auto border-t-2 border-slate-300">
                <div className="grid grid-cols-1 md:flex md:justify-between items-center place-items-start gap-8 sm:gap-14">
                    <div className="">
                        <img src={logo} />
                        <p className="mt-2">
                            Bramblewood 12 41 192 DDksm Ave, All Rights Reserved
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="font-medium underline underline-offset-2">
                            Company
                        </h6>
                        <a>Terms & Conditions</a>
                        <a>Privacy Policy</a>
                        <a href="https://stefankudla.com">Contact</a>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="font-medium underline underline-offset-2">
                            Company
                        </h6>
                        <a>Terms & Conditions</a>
                        <a>Privacy Policy</a>
                        <a href="https://stefankudla.com">Contact</a>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="font-medium underline underline-offset-2">
                            Company
                        </h6>
                        <a>Terms & Conditions</a>
                        <a>Privacy Policy</a>
                        <a href="https://stefankudla.com">Contact</a>
                    </div>
                </div>
                <p className="text-sm text-center mt-8">
                    @2022 brainWave. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
