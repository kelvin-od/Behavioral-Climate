import React from 'react'
import Footer from '../components/Footer';
import Bottomfooter from '../components/Bottomfooter';
import { Link }from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
    {/* two colum contact page styling */}
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='bg-emerald-500 w-full max-w-4xl p-8 rounded-xl 
                        shadow-lg text-white flex flex-col space-y-7
                        md:flex-row md:space-x-6 md:space-y-0 sm:p-12
                        '>
          <div className='flex flex-col justify-between space-y-8'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>
                Contact Us
              </h1>
              <p className='pt-2 text-emerald-100 text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ut, quae perspiciatis cumque at esse accusantium.
              </p>
            </div>
            <div className='flex flex-col space-y-6 text-teal-100'>
              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name="call" className='text-teal-100 text-xl'></ion-icon>
                <span>+254 726422076</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name="mail" className='text-teal-100 text-xl'></ion-icon>
                <span>contactus@greentech.org</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name="location" className='text-teal-100 text-xl'></ion-icon>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className='inline-flex space-x-3 items-center text-lg text-teal-100'>
              {/* Social Media icon links */}
              <Link to=''>
                <ion-icon name='logo-facebook'></ion-icon>
              </Link>
              <Link to=''>
                <ion-icon name='logo-twitter'></ion-icon>
              </Link>
              <Link to=''>
                <ion-icon name='logo-youtube'></ion-icon>
              </Link>
              <Link to=''>
                <ion-icon name='logo-instagram'></ion-icon>
              </Link>
            </div>
          </div>
          <div>
            <div className='bg-white rounded-xl shadow-lg p-8 text-emerald-900 md:w-150'>
              <form action="" className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="" className='text-sm'>Full Name</label>
                  <input 
                  type="text" 
                  className='ring-1 ring-gray-300 rounded-xl w-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-700' 
                  placeholder='Your Name'/>
                </div>
              <div>
                  <label htmlFor="" className='text-sm'>Email</label>
                  <input 
                  type="email" 
                  className='ring-1 ring-gray-300 rounded-xl w-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-700' 
                  placeholder='Your Email'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm'>Phone Number</label>
                  <input 
                  type="number" 
                  className='ring-1 ring-gray-300 rounded-xl w-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-700' 
                  placeholder='Phone Number'/>
                </div>
                <div>
                <label htmlFor="" className='text-sm'>Tell Us Something About Yourself</label>
                  <textarea 
                  type="text"
                  rows='6' 
                  className='ring-1 ring-gray-300 rounded-xl w-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-700' 
                  placeholder='Message'></textarea>
                </div>
                <button className='inline-block self-end bg-emerald-800 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Submit</button>
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

export default ContactUs