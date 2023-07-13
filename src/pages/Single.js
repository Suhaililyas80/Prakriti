import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import Map_tree from '../components/Map_tree';

const Single = () => {
    var {category, id} = useParams();
    return (
        <div>
        <Navbar />
        <Map_tree api={`${category}/${id}`}/>
        <Footer />
        </div>
    )
}

export default Single;