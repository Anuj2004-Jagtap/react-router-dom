// Import necessary dependencies and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"

// Import Address and ContactUs components from their respective files
import Address from './components/Address';
import ContactUS from './components/ContactUS';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />}>
        <Route path=':id' element={<ProductDetails/>}></Route>
      </Route>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />}>
        <Route path='address' element={<Address />} />
        <Route path='contact-us' element={<ContactUS />} />
      </Route>

      <Route path='*' element={<h2>Page Not Found</h2>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
