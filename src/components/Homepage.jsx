import React from 'react'
import Navbar from './Navbar'
import MarvelPage from './MarvelPage'
import StanLeePage from './StanLeePage'
import PhotoSlider from './PhotoSlider'
import ContactUs from './ContactUs'

const Homepage = () => {
  return (
    <>
    <MarvelPage/>
    <StanLeePage/>
    <PhotoSlider/>
    <ContactUs/>
    </>
  )
}

export default Homepage