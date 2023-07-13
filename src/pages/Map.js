import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Maps = () => {
    return (
        <div>
            <Navbar />
            <div className='container category-wrapper-2'>
                <iframe className='m-auto' src="https://www.google.com/maps/d/embed?mid=11Apm1XbQ07MZ6idFSzu32Vr4rQ1-i38&ehbc=2E312F" width="640" height="480"></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default Maps