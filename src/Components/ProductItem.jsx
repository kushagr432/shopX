// src/components/ProductList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  },
[]);

  return (
    <div>
    {/* <h2 className='text-xl pl-2rem pb-8 '>Products</h2> */}
    <div className='flex flex-wrap justify-center gap-4 max-w-screen-xl mx-auto'>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
      <Link key={product.id} to={`/product/${product.id}`} className="cursor-pointer">


        <div className="bg-white p-4 shadow-md rounded-md w-82 hover:scale-105 transition-transform ">
          <img src={product.image} alt={product.title} className="mx-auto h-32 " />
          <div className='h-40'>
          <div className="h-10"></div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          </div>
          
        </div>
        </Link>
      ))}
    </div>
    </div>
  </div>
  );
      };
export default ProductList;
