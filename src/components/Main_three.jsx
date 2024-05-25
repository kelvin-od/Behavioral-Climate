import React from 'react'
import playstore from "../Assets/images/play_store.png"
import phones from "../Assets/images/phone.png"

const Main_three = () => {
    return (
        <div className='relative bg-gray-100 flex flex-col justify-center items-center h-auto p-12 '>
            <div className='flex items-center mx-24'>
                <div className='w-1/2'>
                    <h2 className='text-3xl p-4 '>Saving Nature now at your fingertips</h2>
                    <p className='text-xl p-4 text-gray-500'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quidem fugiat maiores a explicabo nihil voluptatibus voluptate,
                        sint reprehenderit, harum porro dolore vero est ullam iure quisquam corporis et ipsa!
                    </p>
                    <div>
                        <img src={playstore} alt="" />
                    </div>
                </div>

                <div className='w-1/2'>
                    <img src={phones} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main_three
