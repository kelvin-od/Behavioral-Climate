import React from 'react'
import Hero from '../components/Hero';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Bottomfooter from '../components/Bottomfooter';
import MainOne from '../components/MainOne';
import MainTwo from '../components/MainTwo';
import MainZero from '../components/MainZero';
import MainThree from '../components/MainThree';

const Home = () => {
  return (
    <>
      <Hero />
      <Main />
      <MainZero />
      <MainOne />
      <MainTwo />
      <MainThree />
      <Footer />
      <Bottomfooter />
    </>
  )
}

export default Home