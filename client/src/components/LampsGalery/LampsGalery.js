import './LampsGalery.css';
import { useEffect, useState } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import LampsGaleryNavigation from '../LampsGaleryNavigation/LampsGaleryNavigation'

const LampsGalery = ({
    match,
    category
}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(res => setProducts({ res }))
    }, [])

    console.log(products);

    return (

        <main>

            <LampsGaleryNavigation></LampsGaleryNavigation>
            {/* {products.map(x=>{return(<Link className="main-nav-button button categories-nav" to="/" classNameName='main-nav-buttons'>{x.category}</Link>)})} */}

            {/* {products.map(x=>{return(<h2 className="main-subtittle">{x.category}</h2>)})}; */}

            {products.map(x => <ProductCard key={x.id} name={x.name} description={x.description} price={x.price} imageURL={x.imageURL1} />)}

            {/* {products.map((x) => {
                 if (x.category == searchedCategory) {
                    <ProductCard key={x.id} name={x.name} description={x.description} price={x.price} imageURL={x.imageURL} />)}
                    
                    
                } */}






        </main>
    )
};

export default LampsGalery;