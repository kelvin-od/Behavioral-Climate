import React from 'react'

const Bottomfooter = () => {
    return (
        <div className='bg-white-500 h-auto pt-2'>
            <div className='text-center py-3 mb-3 flex justify-between mx-24'>
                <p>Green Tech. All Rights Reserved. <a className='text-lime-500 ml-2 hover:underline' href="">Privacy Statement.</a>
                <a className='text-lime-500 ml-2 hover:underline' href="">Terms of use.</a></p>
                <div className='gap-8 flex'>
                    <p className='font-bold'>Follow us on our social media platforms</p>
                    <a href="">facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Bottomfooter
