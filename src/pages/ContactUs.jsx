import React from 'react'
import Footer from '../components/Footer';
import Bottomfooter from '../components/Bottomfooter';

const ContactUs = () => {
  return (
    <>
      <div className='antialiased bg-gray-100 flex flex-row gap-11 w-full min-h-screen items-center justify-center mt-4'>
        <div>
          <h2> Contact Us </h2>
          <p>Location, <span>Nairobi, Kenya</span></p>
          <p>+254 726422076</p>
          <p>Fax: XXX </p>
        </div>
        <div className='flex flex-col w-50% border-spacing-y-6'>
          <fieldset>
            <label htmlFor="">Subscribe to Our Periodic News Letter</label>
            <form action="">
              <div>
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Let's Know Something About Your Passion to the Environment</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message' typeof='text'></textarea>
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