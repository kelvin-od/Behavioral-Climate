import React from 'react'
import environment from "../Assets/images/environmental.jpg"
import education from "../Assets/images/educa.jpg"
import childhealth from "../Assets/images/childhealth.jpg"

const Main_two = () => {
    return (
        <div className='relative bg-white-500 flex-col align-items-center items-center h-auto p-8'>
            <div className='flex flex-col items-center m-16 text-center'>
                <h2 className='text-4xl p-4 '>Issues We're are Addressing</h2>
                <p className='text-2xl text-gray-500 py-6 leading-loose px-12'>We’re tackling the biggest issues and striving for the maximum impact to
                    ensure a clean environment, healthy community, and the ability of people
                    and nature to thrive.
                </p>
            </div>
            <div className='flex gap-10 mx-24 items-center justify-items-center'>
                <div>
                    <img className='rounded-lg' src={childhealth} alt="" />
                    <p className='text-xl text-center py-4'>Environment</p>
                </div>

                <div>
                    <img className='rounded-lg' src={childhealth} alt="" />
                    <p className='text-xl text-center py-4'>Health</p>
                </div>

                <div>
                    <img className='rounded-lg' src={childhealth} alt="" />
                    <p className='text-xl text-center py-4'>Education</p>
                </div>
            </div>

        </div>
    )
}

export default Main_two
