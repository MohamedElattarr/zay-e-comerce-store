import { CartProvider, useCart } from "react-use-cart";
import Navbar from "../Navbar";
import Header from "../Header";
import { Col, Container, Row } from "reactstrap";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      "albumId": 1,
      "id": 1,
      "price": 100,
      "title": "accusamus beatae",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "price": 120,
      "title": "reprehenderit ",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "price": 150,
      "title": "officia porro ",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "price": 150,
      "title": "culpa odio ",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "price": 250,
      "title": "natus nisi",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "price": 290,
      "title": "accusamus ea ",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "price": 300,
      "title": "officia delectus ",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "price": 350,
      "title": "aut porro officiis ",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "price": 390,
      "title": "qui eius ",
      "url": "https://via.placeholder.com/600/51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    }
  ]
    ;


  return (
    <div>
      <Container>
        <Row>
            {products.map((p) => (
            <div className="col-md-4">
              <div key={p.id}>
              </div>
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0 ">
                  <img className="card-img rounded-0 img-fluid" src={p.url} />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                      <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                      <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body ">
                  <a href="shop-single.html" className="h3 text-decoration-none">{p.title}</a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">${p.price}</p>
                </div>
                <button className="add-to-cart btn btn-success mb-2" onClick={() => addItem(p)}>Buy Now </button>
              </div>
            </div>
            ))}
        </Row>
      </Container>


    </div>
  );
}



function Allcart() {
  return (
    <CartProvider>
      <Navbar />
      <Header />
      <br></br>
      <br></br>
      <Page />
    </CartProvider>
  );
}
export default Allcart


