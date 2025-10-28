import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Blog from '../components/Blog'
import PhotoBlock from '../components/PhotoBlock'
import End from '../components/End'




export const Home = () => {
  return (
    <div>
        <Navbar />
        <Baner/>
        <Blog/>
        <PhotoBlock/>
        <End/>
    </div>
    
  )
}

export default Home