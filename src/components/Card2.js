import React from 'react';
import { Link } from 'react-router-dom';

const Card2 = (props) => {
    const { location, common_name, img_src, scientific_name, _id, category, button } = props;
    console.log(category, _id, location, img_src, scientific_name, common_name);
    return (
        <div className='col-6 col-lg-4 col-md-6 card-container'>
            <div className='card card-wrapper'>
                <img className='card-img-top' src={process.env.PUBLIC_URL + img_src} height={'200rem'} alt={_id} />
                <div className='card-body'>
                    <h5 className='card-title'>{common_name}</h5>
                    <h6>Scientific Name: {scientific_name}</h6>
                    <h6>Location: {location}</h6>
                </div>
                {button !== false ? <Link to={`/${category}/${_id}`} className='card-link card-button'><button >Find Me!!!</button></Link> : null}
            </div>
        </div>
    )
}

export default Card2;