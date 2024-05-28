import React from 'react';

function MainZero() {
    return (
        <div className='relative bg-white-500 flex flex-col justify-center items-center h-auto p-12'>
            <div className='flex items-center mx-6'>
                <div className='w-1/4'>
                    <h2 className='text-3xl p-4 '>Climate Change</h2>
                    <p className='text-xl p-4 text-gray-500 italic'>Less than 20% of e-waste is formally recycled, with 80% either ending up in landfill or being informally recycled
                        – much of it by hand exposing workers to hazardous substances - NEMA, Kenya.
                        </p>
                    <p className='text-xl p-4 text-gray-500' > Young people playing football in a Filthy Beach.
                    </p>
                    <a className='text-xl p-4 text-lime-500 hover:underline' href="">Join the Move  
                    <span className="ml-2">&#8594;</span>
                    </a>
                </div>

                <div className='w-3/4'>
                    <video className='rounded-lg' src="https://videos.pexels.com/video-files/4146796/4146796-hd_1920_1080_25fps.mp4" autoPlay loop muted controls poster="https://via.placeholder.com/800x450.png"></video>
                </div>
            </div>
        </div>
    );
}

export default MainZero;
