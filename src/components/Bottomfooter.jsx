import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Bottomfooter = () => {
    return (
        <div className='bg-white-500 h-auto pt-2'>
            <div className='text-center py-3 mb-3 flex justify-between mx-24'>
                <p>&copy;Green Tech. All Rights Reserved. <a className='text-lime-500 ml-2 hover:underline' href="">Privacy Statement.</a>
                    <a className='text-lime-500 ml-2 hover:underline' href="">Terms of use.</a></p>
                <div className='gap-8 flex'>
                    <p className='font-bold text-gray-500'>Follow us on our social media platforms</p>
                    <div className='gap-4'>
                        <FontAwesomeIcon className='mr-3 text-lime-500 hover:text-lime-700  cursor-pointer w-5 h-5' icon={faFacebookF} size="2x" />
                        <FontAwesomeIcon className='mr-3 text-lime-500 hover:text-lime-700 cursor-pointer w-5 h-5' icon={faTwitter} size="2x" />
                        <FontAwesomeIcon className='mr-3 text-lime-500 hover:text-lime-700 cursor-pointer w-5 h-5' icon={faInstagram} size="2x" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottomfooter
