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
                        We are SOON making this mobile platform available to help make it easy to save Nature!
                    </p>


                    <div>
                        <img src={playstore} alt="" />
                    </div>

                    {/* <p className='text-xl p-2 text-gray-500 mx-8'>
                        Leave us an email and we shall let you know when this done!
                    </p>

                    <div className='mx-4 my-4 bg-white rounded-3xl flex justify-between'>
                        <input className='ml-6 w-1/2 focus:outline-none' type="email" placeholder='Enter your Email' />
                        <button className='ml-4 text-xl p-4 text-gray-500'>Submit</button>
                    </div> */}

                </div>

                <div className='w-1/2'>
                    <img src={phones} alt="" />
                </div>


            </div>
        </div>
    )
}

export default Main_three
