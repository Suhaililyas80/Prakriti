import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card2 from './Card2';
import lodash from 'lodash';

const FoundItem = (props) => {
    const api = `http://127.0.0.1:5000/${props.api}`;
    const [card, setCard] = useState([]);
    useEffect(() => {
        axios.get(api)
            .then(res => setCard(res.data))
            .catch(err => console.log(err));
    }, []);
    const title = lodash.upperFirst(props.api); 
    return (
        <section>
            <div className='container category-wrapper-2'>
                <h1 className='display-4 text-center'>{title} plants/trees</h1>
                <div className='container text-center'>
                    <div className='row'>
                        {card.map(it => {
                            const {location, common_name, img_src, scientific_name, _id, category} = it;
                            return <Card2 common_name={common_name} scientific_name={scientific_name} img_src={img_src} key={_id} location={location} category={category} _id={_id}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoundItem