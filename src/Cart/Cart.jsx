import React from 'react'
import { CartProvider, useCart } from 'react-use-cart';
import { Col, Container, Navbar, Row } from "reactstrap";
import Header from '../Header';


function Cart() {
    const { isEmpty, totalUniqueItems, totalItems, items, cartTotal, emptyCart, updateItemQuantity, removeItem, } = useCart();
    if (isEmpty) return <h1 className="text-center text-danger">Your cart is empty</h1>;

    return (
        <CartProvider>
            <Navbar />
            <h1 className="text-center mt-5">Cart ({totalItems}) <button className="btn btn-danger" onClick={emptyCart}>Delete Cart</button></h1>
            <Container className=''>
                <Row>
                    <Col md="12" className="m-auto border-none  ">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <td>Image</td>
                                    <td>Name</td>
                                    <td>Quantity</td>
                                    <td>Price</td>
                                    <td>operation</td>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((p) => (
                                    <tr>
                                        <td key={p.url}><img src={p.url} style={{ width: "50px" }} ></img></td>
                                        <td>{p.title}</td>
                                        <td>{p.quantity}</td>
                                        <td>{p.price * p.quantity}</td>
                                        <td>
                                            <button className="btn btn-warning"
                                                onClick={() => updateItemQuantity(p.id, (p.quantity ?? 0) - 1)}
                                            >
                                                -
                                            </button>
                                            <button className="btn btn-success"
                                                onClick={() => updateItemQuantity(p.id, (p.quantity ?? 0) + 1)}
                                            >
                                                +
                                            </button>
                                            <button className="btn btn-danger " onClick={() => removeItem(p.id)}>&times;</button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>TOTAL</td>
                                    <td>-------------------------</td>
                                    <td>{totalItems}</td>
                                    <td>{cartTotal}</td>
                                    <td>
                                        <a className="btn btn-success">Continue Shoping</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </Col>
                </Row>
            </Container>
        </CartProvider>
    );
}



function CCart() {
  return (
    <CartProvider>
        <Header />
        <Cart />
    </CartProvider>
  )
}

export default CCart

