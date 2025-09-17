import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Modal from '../Home/Modal'
import Conteent from './Conteent'
import Fffooter from '../Fffooter'
import Contact from './Contact'
import { CartProvider } from 'react-use-cart'

function AllContact() {
  return (
    <CartProvider>
      <Navbar />
      <Header />
      <Modal />
      <Conteent />
      <Contact />
      <Fffooter />
    </CartProvider>
  )
}

export default AllContact