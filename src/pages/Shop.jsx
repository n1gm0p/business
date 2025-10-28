import React from 'react'
import Navbar from '../components/Navbar'
import View from '../components/Shop/View'
import Product from '../components/Shop/Product'
import End from '../components/End'
import Releted from '../components/Shop/Releted'


function Shop() {
  return (
    <div>
        <Navbar/>
        <View/>
        <Product/>
        <Releted/>
        <End/>
    </div>

  )
}

export default Shop