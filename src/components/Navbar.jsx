import React, { useState } from 'react'

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
                    <div className='text-green-700 text-2xl font-bold ml-16'>Green Tech</div>

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
                        <li className='text-base hover:cursor-pointer hover:bg-green-100 px-3 py-2 rounded-lg' ><a href=""></a>Our Work</li>
                        <li className='text-base hover:cursor-pointer hover:bg-green-100 px-3 py-2 rounded-lg'><a href=""></a>Our Impact</li>
                        <li className='text-base hover:cursor-pointer hover:bg-green-100 px-3 py-2 rounded-lg'><a href=""></a>News & Events</li>
                    </ul>

                    <button className='hidden md:flex text-base border-1 bg-lime-500 py-2 px-3 text-white hover:bg-green-100 rounded-lg mr-16'>
                        Become a Member
                    </button>
                </div>

                {/* Mobile Menu */}

                {isMenuOpen ? (
                    <ul className='flex-col md:hidden'>
                        <li className='py hover:cursor-pointer hover:bg-green-100'><a href=""></a>Our Work</li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'><a href=""></a>Our Impact</li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'><a href=""></a>News & Events</li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'><a href=""></a>Become a Member</li>
                    </ul>
                ) : null}
            </nav>
        </div>
    )
}

export default Navbar
