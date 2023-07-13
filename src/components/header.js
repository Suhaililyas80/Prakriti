import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Card2 from './Card2';
const Header = () => {

    const [card, setCard] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query !== '') {
            axios.get(`http://127.0.0.1:5000/search/query/${query}`)
                .then(res => setCard(res.data))
                .catch(err => console.log(err));
        }

    }, [query]);

    const myStyle = {
        height: '10px',
        marginBottom: '40px'
    }

    return (
        <React.Fragment>
            <header>
                <section className='container main-container'>
                    <h1>Tree Search</h1>
                    <div className='input-wrapper'>
                        <form action='#' onSubmit={(e) => e.preventDefault()} className='search-bar'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} beat />
                            <input type='text' placeholder='Type to Search' value={query} onChange={(e) => setQuery(e.target.value)} />
                        </form>
                    </div>
                </section>
            </header>

            {query ? <section>
                <div className='container category-wrapper' style={!card.length ? myStyle : null}>
                    <h1 className='display-4'>{!card.length ? `No Results Found` : `Results Found For "${query}"`}</h1>
                    <div className='container text-center'>
                        <div className='row'>
                            {card.map(it => {
                                const { common_name, scientific_name, location, img_src, category, _id } = it;
                                return <Card2 common_name={common_name} scientific_name={scientific_name} img_src={img_src} key={_id} location={location} category={category} _id={_id} />
                            })}
                        </div>
                    </div>
                </div>
            </section> : null}
        </React.Fragment>
    )
}

export default Header