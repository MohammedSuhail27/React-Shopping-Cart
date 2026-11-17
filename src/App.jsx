
//  project shopping cart

import React from "react";
import Navbar from "./Shopping cart project/Components/Navbar";
import ProductList from "./Shopping cart project/pages/ProductList";
import Cart from "./Shopping cart project/pages/Cart";
import Checkout from "./Shopping cart project/pages/Checkout";
import ProductDetail from "./Shopping cart project/pages/ProductDetail";
import Footer from "./Shopping cart project/Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer, toast,Bounce } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;