import React from 'react';
import Header from '../Pages/SharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPages/Footer/Footer';

const Main = () => {
   return (
      <div>
         <Header/>
         <Outlet/>
         <Footer/>
      </div>
   );
};

export default Main;