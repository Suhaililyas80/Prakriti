import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <section className='footer-wrapper'>
                <div className='footer-icons'>
                <a href='https://www.facebook.com/prakritiIITK/'><FontAwesomeIcon icon={faFacebook}  className='icons'/></a>
                <a href='https://www.instagram.com/prakriti_iitk/'><FontAwesomeIcon icon={faInstagram} className='icons'/></a>
                <a href='https://www.linkedin.com/company/prakriti-community-welfare-cell-iit-kanpur/?originalSubdomain=in'><FontAwesomeIcon icon={faLinkedin} className='icons'/></a>
                </div>
                <p><FontAwesomeIcon icon={faCopyright} className='copyright'/>{year} Prakriti - IIT Kanpur</p>
            </section>
        </footer>
    )
}

export default Footer