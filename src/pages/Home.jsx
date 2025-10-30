import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Blog from '../components/Blog'
import PhotoBlock from '../components/PhotoBlock'
import Customer from '../components/Customer'
import Working from '../components/Working'
import Companies from '../components/Companies'
import QuoteBlock from '../components/QuoteBlock'
import QuestionBlock from '../components/QuestionBlock'
import End from '../components/End'




export const Home = () => {
  return (
    <div>
      <Navbar />
      <Baner />
      <Blog />
      <PhotoBlock />
      <Customer />
      <Working />
      <Companies />
      <QuoteBlock />
      <QuestionBlock />
      <End />
    </div>

  )
}

export default Home