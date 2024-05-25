import React from 'react'

const Main = () => {
    return (
        <div className="relative bg-white-500 flex-col align-items-center items-center h-auto p-8">
            <div className='flex flex-col items-center m-16 text-center'>
                <h2 className='text-4xl p-4 '>We are Environment Enthusiasts</h2>
                <p className='text-2xl text-gray-500 leading-loose py-3'>We’re a non-profit organization tackling climate change -
                    the major threat of our time. <br /> Our focus on behavioral change put people at the center of what we do.
                </p>
                <h2 className='text-4xl p-4 '>Goals</h2>
                <div className='flex mx-20 gap-12 mt-8'>
                    <div className='rounded-lg p-4 bg-lime-400 text-center shadow-2xl'>
                        <h3 className='py-3 text-xl'>Reduce Environmental
                            Impact by encouraging
                            recycling
                        </h3>
                    </div>
                    <div className='rounded-lg p-4 bg-lime-400 text-center shadow-2xl'>
                        <h3 className='py-3 text-xl'>Strengthen People’s
                            behavior to support
                            Nature’s ability to thrive
                        </h3>

                    </div>
                    <div className='rounded-lg p-4 bg-lime-400 text-center shadow-2xl'>
                        <h3 className='py-3 text-xl'>Impact People’s Health,
                            Education, and Economic
                            Life
                        </h3>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
