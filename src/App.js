import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Modal from './Home/Modal'
import Banner from './Home/Banner'
import Categories from './Home/Categories'
import Product from './Home/Product'
import Fffooter from './Fffooter'
import { CartProvider } from 'react-use-cart'

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Navbar />
        <Header />
        <Modal />
        <Banner />
        <Categories />
        <Product />
        <Fffooter />
      </CartProvider>
    )
  }
}

export default App