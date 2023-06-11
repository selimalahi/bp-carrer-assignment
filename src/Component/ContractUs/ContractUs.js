import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const ContractUs = () => {
    return (
        <div>
            <Navbar />
            <div className=' ml-12 mb-10 mt-10'>
            <h1 className='text-5xl font-bold '>Contract Us</h1>
            <p className='text-lg leading-10'>
            If you want to contact us: you can send an email to <a href='mailto:contact.deshcareer@gmail.com' className='text-blue-500'>
            contact.deshcareer@gmail.com</a> <br /> If you want to meet with us, you can come to our office based on an appointment.  <br /> Our Office address: 
            <br/>House: 13/3, <br /> Road: 2, <br /> Shyamoly, Dhaka-1207 <br /> +8801880811047 <br />
            </p>
            </div>
            <Footer />
        </div>
    );
};

export default ContractUs;