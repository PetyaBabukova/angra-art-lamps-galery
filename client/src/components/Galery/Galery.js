import './Galery.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import GaleryNavigation from '../GaleryNavigation/GaleryNavigation'

const Galery = ({
    match,
    category
}) => {

    // let queryString = category
    // ? `?category=${category}`
    // : ''

    // let queryString = match.params.category
    // ?`category=${match.params.category}`
    // : ''

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5500/products/`)
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err))
    }, [])

    console.log(products);
    products.map(x => console.log(x.category));

    return (
        <main>

            <GaleryNavigation></GaleryNavigation>
            {/* {products.map(x=>{return(<Link className="main-nav-button button categories-nav" to="/" classNameName='main-nav-buttons'>{x.category}</Link>)})} */}

            {/* {products.map(x=>{return(<h2 className="main-subtittle">{x.category}</h2>)})}; */}

            {products.map(x => <ProductCard key={x.id} name={x.name} description={x.description} price={x.price} imageURL={x.imageURL} />)}

        </main>
    )
};

export default Galery;