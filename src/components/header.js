import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <header>
            <section className='container main-container'>
                <h1>Tree Search</h1>
                <div className='input-wrapper'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} beat/>
                    <input type='text' placeholder='Type to Search'/>
                </div>
            </section>
        </header>
    )
}

export default Header