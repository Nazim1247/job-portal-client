import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/sheared/Navbar';
import Footer from '../pages/sheared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;