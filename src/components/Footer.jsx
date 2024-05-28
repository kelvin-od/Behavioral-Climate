import React from 'react'

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
                        <a className='text-gray-300 hover:text-gray-100'  href="">Committed to change</a>
                        <a className='text-gray-300 hover:text-gray-100' href="">Committed to Diversity</a>
                        <a className='text-gray-300 hover:text-gray-100' href="">Careers</a>
                    </div>
                </div>

                <div className='flex-col items-center justify-between'>
                    <p className='text-white text-2xl'>News and Resources</p>
                    <div className='flex flex-col text-xl py-4 text-gray-300 pl-2 leading-loose'>
                        <a className='text-gray-300 hover:text-gray-100' href="">News & Update</a>
                        <a className='text-gray-300 hover:text-gray-100' href="">Reports & Publication</a>
                        <a className='text-gray-300 hover:text-gray-100' href=""> For the media</a>
                    </div>
                </div>

                <div className='flex-col items-center justify-between'>
                    <p className='text-white text-2xl'>Become the change</p>
                    <div className='flex flex-col text-xl py-4 text-gray-300 pl-2 leading-loose'>
                        <a className='text-gray-300 hover:text-gray-100' href="">Support</a>
                        <a className='text-gray-300 hover:text-gray-100' href="/components/contact">Contact</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
