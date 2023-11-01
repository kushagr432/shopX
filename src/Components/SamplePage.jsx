import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
// import ProductDetails from './ProductDetails';
const SamplePage = () => {
const [sample, setsample] = useState([]);

useEffect(() => {
    async function fetchProduct() {
    try {
        const response = await axios.get('http://localhost:8080/products/all');
        setsample(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
    }

    fetchProduct();
},
[]);

return (
    // <div>
    //     <h1>Data from Spring Boot API</h1>
    //     <ul>
    //         {products.map(product => (
    //         <li key={product.id}>{product.name} : {product.description}</li>
    //         ))}
    //     </ul>
    //     </div>
    <>
    <Layout/>
    <div>
    {/* <h2 className='text-xl pl-2rem pb-8 '>Products</h2> */}
    <div className='flex flex-wrap justify-center gap-4 max-w-screen-xl mx-auto'>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {sample.map(prod => (
        //   <Link key={product.id} to={`/product/${product.id}`} className="cursor-pointer">
        
        
        <div className="bg-white p-4 shadow-md rounded-md w-82 hover:scale-105 transition-transform ">
        <img src={prod.image} alt={prod.title} className="mx-auto h-32 " />
        <div className='h-40'>
        <div className="h-10"></div>
            <h3 className="text-lg font-semibold">{prod.name}</h3>
        <p className="text-gray-600">${prod.price}</p>
        </div>
        
        </div>
        // </Link>
        ))}
    </div>
    </div>
</div>
        </>
);
    };
export default SamplePage;
