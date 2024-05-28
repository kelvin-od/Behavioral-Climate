import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-lime-500 h-auto p-8'>
            <div className="flex items-center justify-between mx-24">
                <div>
                    Logo
                </div>
                <div className='flex-col items-center justify-between'>
                    <p className='text-white text-2xl'>About Green Tech</p>
                    <div className='flex flex-col text-xl py-4 pl-2 leading-loose'>
                        <Link className='text-gray-300 hover:text-gray-100'  to="">Committed to change</Link>
                        <Link className='text-gray-300 hover:text-gray-100' to="">Committed to Diversity</Link>
                        <Link className='text-gray-300 hover:text-gray-100' to="">Careers</Link>
                    </div>
                </div>

                <div className='flex-col items-center justify-between'>
                    <p className='text-white text-2xl'>News and Resources</p>
                    <div className='flex flex-col text-xl py-4 text-gray-300 pl-2 leading-loose'>
                        <Link className='text-gray-300 hover:text-gray-100' to="">News & Update</Link>
                        <Link className='text-gray-300 hover:text-gray-100' to="">Reports & Publication</Link>
                        <Link className='text-gray-300 hover:text-gray-100' to=""> For the media</Link>
                    </div>
                </div>

                <div className='flex-col items-center justify-between'>
                    <p className='text-white text-2xl'>Become the change</p>
                    <div className='flex flex-col text-xl py-4 text-gray-300 pl-2 leading-loose'>
                        <Link className='text-gray-300 hover:text-gray-100' to="">Support</Link>
                        <Link className='text-gray-300 hover:text-gray-100' to="/contactus">Contact</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
