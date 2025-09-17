import React, { Component } from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Modal from '../Home/Modal'
import Product from '../Home/Product'
import Fffooter from '../Fffooter'
import Content from './Content'
import Brands from '../Brands'
import axios from 'axios'
import { Col, Container, Row } from 'reactstrap'
import { CartProvider } from 'react-use-cart'



class AllShop extends Component {

  render() {
    return (
      <CartProvider>
        <Navbar />
        <Header /> 
        <Modal />
        <Content />  
        <Brands />
        <Fffooter />
      </CartProvider>
    )
  }
}

export default AllShop
   



{/* <Container>
      <Row>
        {this.state.person.map( (result)=>(
          <Col md="4" key={result.id} >
            <img src={result.url}></img>
          </Col>
        ) )}
      </Row>
    </Container> */}