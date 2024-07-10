import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import './App.css';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clothing from "./components/pages/Clothing";

import BirthdayReturns from "./components/pages/BirthdayReturns";
import CustomGifts from "./components/pages/CustomGifts";
import HomeDecor from "./components/pages/HomeDecor";
import Jewellary from "./components/pages/Jewellary";
import WeddingSign from "./components/pages/WeddingSign";
import BabyShower from "./components/pages/BabyShower";

import AllProducts from "./components/pages/AllProducts";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/birthdayReturns" element={<BirthdayReturns />} />
          <Route path="/customGifts" element={<CustomGifts />} />
          <Route path="/homeDecor" element={<HomeDecor />} />
          <Route path="/jewellary" element={<Jewellary />} />
          <Route path="/WeddingSign" element={<WeddingSign />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/BabyShower" element={<BabyShower />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
