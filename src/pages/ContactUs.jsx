import React from 'react'
import Footer from '../components/Footer';
import Bottomfooter from '../components/Bottomfooter';

const ContactUs = () => {
  return (
    <>
      <div>
        <div>
          <h2> Contact Us </h2>
          <p>Location, <span>Nairobi, Kenya</span></p>
          <p>+254 726422076</p>
          <p>Fax: XXX </p>
        </div>
        <div>
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