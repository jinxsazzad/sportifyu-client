import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../parts/NavBar/NavBar';
import Footer from '../parts/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=' bg-[#DBF5F0]'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;