import React from 'react'
import Footer from '../components/Footer';
import Bottomfooter from '../components/Bottomfooter';

const ContactUs = () => {
  return (
    <>
      <div className=' bg-red-500 flex flex-row gap-10 items-center h-screen w-full p-4'>
        <div className='w-1/4 '>
          <h2> Contact Us </h2>
          <p>Location, <span>Nairobi, Kenya</span></p>
          <p>+254 726422076</p>
          <p>Fax: XXX </p>
        </div>
        <div className='w-'>
          <fieldset className='flex flex-col items-center'>
            <label htmlFor="">Subscribe to Our Periodic News Letter</label>
            <form action="" className='flex flex-col'>
              <div className='flex col'>
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Let's Know Something About Your Passion to the Environment</label>
              <textarea name="" id="" cols="10" rows="10" placeholder='Message' typeof='text'></textarea>
              <button>Submit</button>
            </form>
          </fieldset>
        </div>
      </div>
      <Footer />
      <Bottomfooter />
    </>
  )
}

export default ContactUs