import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {link, title, img_src} = props;
    return (
        <div className='col-6 col-lg-4 col-md-6 card-container'>
            <div className='card card-wrapper'>
                <img className='card-img-top' src={process.env.PUBLIC_URL + img_src} height={'200rem'} alt={title}/>
                <h5 className='card-title'>{title}</h5>
                <Link to={link} className='card-link card-button'><button >Find Me!!!</button></Link>
            </div>
        </div>
    )
}

export default Card;