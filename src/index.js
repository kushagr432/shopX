import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as  Route,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyCpPypRLh2arX1HNDuNNE8zjAEgUX0mOwA",
  authDomain: "ecommerce-fae01.firebaseapp.com",
  databaseURL: "https://ecommerce-fae01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-fae01",
  storageBucket: "ecommerce-fae01.appspot.com",
  messagingSenderId: "368450765326",
  appId: "1:368450765326:web:c9b3da82c181bf4eb0325f",
  measurementId: "G-S2YP5BFGEE"
};

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
initializeApp(firebaseConfig);
reportWebVitals();
