import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/images/brainWave-logo.png';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState('');
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            navigate('/login');
            setToggleMenu(!toggleMenu);
        } catch (error) {
            setError(error);
        }
    }

    const Menu = () => {
        const menuItems = [
            { name: 'Home', path: '/' },
            { name: 'Pathways', path: '/pathways' },
            { name: 'Blog', path: '/blog' }
        ];

        return (
            <div>
                <div className="text-primary flex flex-col lg:flex-row gap-y-2 md:gap-x-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="transition-all  hover:text-white hover:bg-blue-400 p-2
             rounded"
                            onClick={() => setToggleMenu(!toggleMenu)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    const Login = () => {
        return (
            <>
                {currentUser ? (
                    <a
                        onClick={handleLogout}
                        className="text-slate-800 hover:opacity-60 font-medium cursor-pointer mr-6 transition-all whitespace-nowrap"
                    >
                        Log Out
                    </a>
                ) : (
                    <Link
                        to="login"
                        className="text-slate-800 hover:opacity-60 font-medium cursor-pointer mr-6 transition-all whitespace-nowrap"
                        onClick={() => setToggleMenu(!toggleMenu)}
                    >
                        Log in
                    </Link>
                )}
                <Link
                    to="register"
                    className="bg-accent rounded-sm px-7 py-3 transition
          hover:text-slate-100 text-white hover:bg-slate-800 whitespace-nowrap font-medium"
                    onClick={() => setToggleMenu(!toggleMenu)}
                >
                    Get Started
                </Link>
            </>
        );
    };

    return (
        <div className="bg-background">
            <nav className="lg:container mx-auto h-16 flex justify-between items-center px-2 sm:py-2">
                <div>
                    <Link to="/">
                        <img src={logo} alt="brainwave logo" className="" />
                    </Link>
                </div>

                <div className="hidden lg:block">
                    <Menu />
                </div>

                <div className="hidden lg:block">
                    <Login />
                </div>

                <div className="block lg:hidden relative">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#333"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                            className="cursor-pointer"
                        />
                    ) : (
                        <RiMenu3Line
                            color="#333"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                            className="cursor-pointer"
                        />
                    )}
                    {toggleMenu && (
                        <div className="absolute top-6 right-0 bg-slate-50 px-6 py-4 rounded-sm transition-all shadow-md text-center">
                            <Menu />
                            <div className="mt-8">
                                <Login />
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
