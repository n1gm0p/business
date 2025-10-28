import React from 'react'
import Navbar from '../components/Navbar'
import End from '../components/End'
import Products from '../components/Basket/Products'
import Interested from '../components/Basket/Interested'



function Basket() {
  return (
    <div>
      <Navbar />
      <Products />
      <Interested />
      <End />
    </div>
  )
}

export default Basket