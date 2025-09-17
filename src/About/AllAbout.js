import React, { Component } from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Fffooter from '../Fffooter'
import About from './About'
import Ourservice from './Ourservice'
import Brands from '../Brands'
import Modal from '../Home/Modal'
import { CartProvider } from 'react-use-cart'

export class AllAbout extends Component {
    render() {
        return (
            <CartProvider>
                <Navbar />
                <Header />
                <Modal />
                <About />
                <Ourservice />
                <Brands />
                <Fffooter />  
            </CartProvider>
        )
    }
}

export default AllAbout