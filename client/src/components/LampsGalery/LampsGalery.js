import './LampsGalery.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import LampsGaleryNavigation from '../LampsGaleryNavigation/LampsGaleryNavigation'

const LampsGalery = ({
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
        let searchedCategory = category;
        let url = 'http://localhost:5000/products';

        if(searchedCategory){
            url += `/?category=${category}`;
        }

        // fetch(`http://localhost:5000/products/?category=lamps`)
        fetch(url)
        // fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err))
    }, [])

    console.log(products);
    products.map(x => console.log(x.category));

    return (
        <main>

            <LampsGaleryNavigation></LampsGaleryNavigation>
            {/* {products.map(x=>{return(<Link className="main-nav-button button categories-nav" to="/" classNameName='main-nav-buttons'>{x.category}</Link>)})} */}

            {/* {products.map(x=>{return(<h2 className="main-subtittle">{x.category}</h2>)})}; */}

            {products.map(x => <ProductCard key={x.id} name={x.name} description={x.description} price={x.price} imageURL={x.imageURL} />)}

        </main>
    )
};

export default LampsGalery;