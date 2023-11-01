// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Components/Authentication/LogIn';
import DataSample from './Components/DataSample';
import Home from './Components/Home';
import PaymentPage from './Components/PaymentPage';
import ProductDetails from './Components/ProductDetails';
import ProductList from './Components/ProductItem';
import QuizGame from './Components/QuizGame';
import SamplePage from './Components/SamplePage';
function App() {
  return (
<>
  <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/data"  element={<DataSample/>} />
        <Route path="/sample"  element={<SamplePage/>} />
        <Route path="/quiz" element= {<QuizGame/>} />
        <Route path="/login" element= {<LogIn/>} />
        <Route path="/products" element= {<ProductList/>} />
        {/* Add more routes for other pages */}
      </Routes>
</>
  );
}

export default App;
