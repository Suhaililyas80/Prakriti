import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card2 from './Card2';

const Map_tree = (props) => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/${props.api}`)
        .then(res => setCard(res.data))
        .catch(err => console.log(err));
    }, []);

    const {common_name, scientific_name, location, img_src, category} = card;
    return (
        <section>
            <div className='container category-wrapper-2'>
            <div className='container text-center'></div>
                <div className='row'>
                    <Card2 common_name={common_name} scientific_name={scientific_name} location={location} img_src={img_src} category={category} button={false}/>
                    <div className='col-12 col-lg-6 ms-5'>
                    <iframe src="https://www.google.com/maps/d/embed?mid=11Apm1XbQ07MZ6idFSzu32Vr4rQ1-i38&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map_tree;