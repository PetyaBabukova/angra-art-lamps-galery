import './Details.css';
import { useEffect, useState } from 'react';
import * as productService from "../../services/productService";

const Details = ({
    match
    }) => {
        
        let [product, setProduct] = useState({})
        
        useEffect(()=>{
            productService.getOne(match.params.productId)
            .then (res => setProduct(res))
        }, [match])

        return(
        
        <main>
        <article className="details">

            <div className="detail-images">
                <div className="details-image-container">
                    <img alt="img" src={product.imageURL}/>
                </div>
                <div className="details-image-container">
                    <img alt="img" src={product.imageURL2}/>
                </div>
                <div className="details-image-container">
                    <img alt="img" src={product.imageURL3}/>
                </div>
                <div className="details-image-container">
                    <img alt="img" src={product.imageURL4}/>
                </div>
            </div>
            <h2 className="description-title main-subtittle">{product.name}</h2>

            <div className="details-description">
                <div className="price-art-number">
                    <p> <strong>Цена: </strong>{product.price} лв</p>
                    <p>№ {product.id}</p>
                </div>
                <p>{product.description}</p>

                    <button className="button order-button" type="submit">Поръчай</button>
                </div>
        </article>

    </main>
    )
};

export default Details;