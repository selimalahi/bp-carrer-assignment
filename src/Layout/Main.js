import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
             {/* <Navbar /> */}
             <div><Outlet /></div>
             {/* <Footer />             */}
        </div>
    );
};

export default Main;