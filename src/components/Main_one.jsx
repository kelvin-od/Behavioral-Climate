import React from 'react'

const Main_one = () => {
    return (
        <div className='relative bg-gray-200 flex-col align-items-center items-center h-auto p-8'>
            <div className='flex flex-col items-center m-16 text-center'>
                <h2 className='text-4xl p-4 '>Together We’re Creating a better world - for Everyone</h2>
            </div>

            <div className='flex text-center mx-24 gap-8 py-8 mb-16'>
                <div>
                    <h3 className='text-4xl font-bold py-6'>20+</h3>
                    <p className='text-2xl'>Recycling Companies,
                        Partners, and
                        Intellects
                    </p>
                </div>

                <div>
                    <h3 className='text-4xl font-bold py-6'>5,000+</h3>
                    <p className='text-2xl'>Health, Economic and
                        Education impact on
                        vulnerable individuals
                    </p>
                </div>

                <div>
                    <h3 className='text-4xl font-bold py-6'>10 Tonnes</h3>
                    <p className='text-2xl'>Plastic, Cartons,
                        Electronics, and glass
                        recycled
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main_one
