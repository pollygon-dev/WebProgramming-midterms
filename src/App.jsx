import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link,Navigate } from 'react-router-dom'
import React, {useState} from 'react';

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/ProductList'
import Article from './pages/Article'

function App() {

  const products = [
    {
      "id": "1",
      "title": "YeT016 Kimono Cat Tee",
      "price": "1999",
      "description": "100% Preshrunk cotton with added double layered fleece material made for long lasting comfort and warmth",
      "imageUrl": "https://niepceinc.com/cdn/shop/files/2_c6cfdba4-27a2-4203-b08e-ba89bf9deb99_1800x1800.jpg?v=1747945843"
    },
    {
      "id": "2",
      "title": "K24 Blue Waves Kimono",
      "price": "2400",
      "description": "Japanese ocean and red suns graphic ",
      "imageUrl": "https://niepceinc.com/cdn/shop/files/6b619c3d_1800x1800.jpg?v=1747945301"
    },
    {
      "id": "3",
      "title": "S23888 Blue Wave Sneakers",
      "price": "5000",
      "description": "Low rise sneakers with the back sole of the shoes containing soft foam material",
      "imageUrl": "https://niepceinc.com/cdn/shop/files/shoe-S23888-1_1800x1800.jpg?v=1749714915"
    }
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Mini Product Catalog</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Product List</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home products={products}/>} />              
          <Route path="/contact" element = {<Contact products={products}/>} />
          <Route path="/products/:urlId" element ={<Article products={products} />} />   
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
export const products = 'products_list';
