import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import App from "./App";
import AllAbout from "./About/AllAbout";
import AllShop from "./Shop/AllShop";
import AllContact from "./Contact/AllContact";
import ScrollToTop from "react-scroll-to-top";
import Allcart from "./Cart/Allcart";
import { CartProvider } from "react-use-cart";
import Cart from "./Cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Home",
    element: <App /> ,
  },
  {
    path: "about",
    element: <AllAbout />,
  },
  {
    path: "shop",
    element: <AllShop />,
  },
  {
    path: "Contact",
    element: <AllContact />,
  },
  {
    path: "products",
    element: <Allcart />,
  },
  {
    path: "cart",
    element: <Cart />,
  }
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
    <ScrollToTop smooth 
    viewBox="0 0 48 48"
    svgPath="M32.4,13.8c-1.9-2.6-5-4.3-8.4-4.3c-5.8,0-10.5,4.7-10.5,10.5v0.5H12c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5 h2.1"
    />
  </CartProvider>

);
