import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [show, setShow] = useState(false);
    return (
        <section className='navbar-bg'>
            <div><nav class="navbar navbar-expand-lg">
                <div class="container">
                    <Link class="navbar-brand" to='/'>Prakriti</Link>
                    <button
                        class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => setShow(!show)}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/map">Tree Map</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav></div>
        </section>
    )
}

export default Navbar