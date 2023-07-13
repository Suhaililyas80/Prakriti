import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import FoundItem from '../components/FoundItem';
import { useParams } from 'react-router-dom';
const Find = () => {
    const {route_path} = useParams();
    return (
        <div>
            <Navbar />
            <FoundItem api={route_path}/>
            <Footer />
        </div>
    )
}

export default Find