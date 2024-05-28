import React from 'react';
import Footer from '../components/Footer';
import Bottomfooter from '../components/Bottomfooter';

const Becomemember = () => {
  return (
    <>
      <div>
        <h2 className='flex flex-col items-center justify-center mt-10 mb-5'>Fill the Form and Submit to Become a Member</h2>
          <form action="" className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <label htmlFor="">First Name</label>
              <input type="text" />
              <label htmlFor=""> Last Name</label>
              <input type="text" />
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor=""> Email</label>
              <input type="text" />
              <label htmlFor="">Password</label>
              <input type="text" />
              <label htmlFor="">Conform Password</label>
              <input type="text" />
            </div>
            <button type="submit">Submit</button>
          </form>
      </div>
      
      <Footer />
      <Bottomfooter />
    </>
  )
}

export default Becomemember