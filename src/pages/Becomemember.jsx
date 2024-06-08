import React from 'react';
import Footer from '../components/Footer';
import Bottomfooter from '../components/Bottomfooter';

const Becomemember = () => {
  return (
    <>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='bg-emerald-500 w-full max-w-4xl p-8 rounded-xl
                        shadow-lg text-white flex flex-col space-y-7
                        md:flex-row md:space-x-6 md:spacey-0 sm:p-12'>
          <div className='md:flex items-center'>
            <h1 className='font-bold text-4xl tracking-wide'>Fill the Form to Become a Member</h1>
          </div>
          <div>
            <div className='bg-white rounded-xl shadow-lg p-8 text-emerald-900 md:w-200'>
              <form action="" className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="" className='text-sm tracking-wide'>First Name</label>
                  <input 
                    type="text" 
                    className='ring-2 ring-gray-400 rounded-xl w-full px-2 mt-2 outline-none
                              focus:ring-3 focus:ring-cyan-700' />
                </div>
                <div>
                  <label htmlFor="" className='text-sm tracking-wide'>Last Name</label>
                  <input 
                    type="text" 
                    className='ring-2 ring-gray-400 rounded-xl w-full px-2 mt-2 outline-none
                              focus:ring-3 focus:ring-cyan-700'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm tracking-wide'>Username</label>
                  <input 
                    type="text" 
                    className='ring-2 ring-gray-400 rounded-xl w-full px-2 mt-2 outline-none
                              focus:ring-3 focus:ring-cyan-700'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm tracking-wide'>Phone Number</label>
                  <input 
                    type="number" 
                    className='ring-2 ring-gray-400 rounded-xl w-full px-2 mt-2 outline-none
                              focus:ring-3 focus:ring-cyan-700'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm tracking-wide'>Email</label>
                  <input 
                    type="email" 
                    className='ring-2 ring-gray-400 rounded-xl w-full px-2 mt-2 outline-none
                              focus:ring-3 focus:ring-cyan-700'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm tracking-wide'>Password</label>
                  <input 
                    type="password" 
                    className='ring-2 ring-gray-400 rounded-xl w-full px-2 mt-2 outline-none
                              focus:ring-3 focus:ring-cyan-700'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm tracking-wide'>Confirm Password</label>
                  <input 
                    type="password" 
                    className='ring-2 ring-gray-400 rounded-xl w-full px-2 mt-2 outline-none
                              focus:ring-3 focus:ring-cyan-700'/>
                </div>
                <button className='inline-block self-end bg-emerald-800 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm tracking-wide'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Bottomfooter />
    </>
  )
}

export default Becomemember