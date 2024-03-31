import { Link, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FaMoon, FaSun } from 'react-icons/fa';



const Navbar = () => {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem('theme') === 'dark' || false
    )
    // Handle the active link
    const handleLink = ({isActive}) => (
        isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-1 dark:bg-indigo-500' 
        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-1'
    );


    const handleDarkMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    }

    useEffect(() => {
    // Retrieve initial theme preference from localStorage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark'); // Apply dark class if stored as dark
        }
    }, [])

    return (
        <nav className="bg-indigo-700 border-b border-1 border-indigo-500 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        {/* <!-- Logo --> */}
                        <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                        <img
                            className="h-10 w-auto"
                            src={logo}
                            alt="React Jobs"
                        />
                        <span className="hidden md:block text-white text-2xl font-bold ml-2 dark:text-indigo-500"
                            >React Jobs</span>
                        </Link>
                        <div className="md:ml-auto flex items-center">
                            <div className="flex items-center space-x-2">
                                <NavLink
                                    to="/"
                                    className={handleLink}
                                >Home
                                </NavLink>
                                <NavLink
                                    to="/jobs"
                                    className={handleLink}
                                >Jobs
                                </NavLink>
                                <NavLink
                                    to="/add-job"
                                    className={handleLink}
                                >Add Jobs
                                </NavLink>

                                <button 
                                    onClick={handleDarkMode}
                                >
                                    {isDark ? <FaMoon 
                                        className='text-2xl text-white justify-end'
                                    /> : <FaSun 
                                        className='text-2xl text-white justify-end'
                                    />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar