import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import NewsLetter from '../../NewsLetter/NewsLetter';
// import ContractUs from '../../ContractUs/ContractUs';

const Home = () => {
    return (
        <div >
            <Navbar />   
            <NewsLetter />         
            <Footer />
            
        </div>
    );
};

export default Home;