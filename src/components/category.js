import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

const Category = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/')
        .then(res => setCard(res.data));
    }, []);

    return (
        <section>
            <div className='container category-wrapper'>
                <h1 className='display-4'>Category</h1>
                <div className='container text-center'>
                    <div className='row'>
                    {card.map(it => {
                        return <Card title={it.title} link={it.link} img_src={it.img_src} key={it._id}/>
                    })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category