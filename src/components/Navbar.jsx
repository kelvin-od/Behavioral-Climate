import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    console.log(isMenuOpen)
    return (
        <div>
            <nav className='bg-white-500 p-4 border-b-1 border-gray-200 shadow-md'>
                <div className="flex items-center justify-between mx-6">
                    {/* Logo */}
                    <div className='text-green-700 text-2xl font-bold ml-16'><Link to="/">Green Tech</Link></div>

                    <div className='md:hidden'>
                        <button className='text-white' onClick={toggleMenu}>
                            <svg
                                fill='none'
                                stroke='green'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                viewBox='0 0 24 24'
                                className='w-6 h-6'
                            >
                                <path d="M4 6h16M4 12h16M4  18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <ul className='hidden md:flex space-x-16'>
                        <li className='text-base hover:cursor-pointer hover:bg-green-100 px-3 py-2 rounded-lg' >
                            <Link to="/ourwork">Our Work</Link>
                        </li>
                        <li className='text-base hover:cursor-pointer hover:bg-green-100 px-3 py-2 rounded-lg'>
                            <Link to="/ourimpact">Our Impact</Link>
                        </li>
                        <li className='text-base hover:cursor-pointer hover:bg-green-100 px-3 py-2 rounded-lg'>
                            <Link to="/newsandevents">News & Events</Link>
                        </li>
                        {/*<li className='py hover:cursor-pointer hover:bg-green-100'><Link to="Becomemember">Become a Member</Link></li>*/}
                    </ul>

                    <button className='hidden md:flex text-base border-1 bg-lime-500 py-2 px-3 text-white hover:bg-green-100 rounded-lg mr-16'>
                        <Link to="/becomemember">Become a Member</Link>
                    </button>
                </div>

                {/* Mobile Menu */}

                {isMenuOpen ? (
                    <ul className='flex-col md:hidden'>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/ourwork">Our Work</Link>
                        </li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/ourimpact">Our Impact</Link>
                        </li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/newsandevents">News & Events</Link>
                        </li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/becomemember">Become a Member</Link>
                        </li>
                    </ul>
                ) : null}
            </nav>
        </div>
    )
}

export default Navbar
