// src/components/Home.js
import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import QuizGame from './QuizGame';
// import Sidebar from './SideBar';
const Home = () => {
  return (
      <>
      <Navbar/>
      <div className="pt-3">
    {/* <CategoryListTop/> */}
    
      </div>
    <div className="pt-20 pb-6 ">
      {/* <ProductList/> */}
      <QuizGame/>
    </div>
    <div className="pt-12">
    <Footer/>
    </div>
    
      </>
  );
};

export default Home;











