import './Details.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import * as productService from "../../services/productService";

const Details = ({
    match
}) => {

    let [product, setProduct] = useState({})

    useEffect(() => {
        productService.getOne(match.params.productId, match.params.subcategory)
            .then(res => setProduct(res))
    }, [match])


    return (
        <main>
            <article className="details">
                <div className="details-image-container">
                    <img alt="img" src={product.imageURL} />
                </div>
                <h2 className="description-title main-subtittle">{product.name}</h2>

                <div className="details-description">
                    <div className="price-art-number">
                        <p> <strong>Цена: </strong>{product.price} лв</p>
                        <p>№ {product.id}</p>
                    </div>
                    <p>{product.description}</p>

                    {/* <button className="button order-button" type="submit">Поръчай</button> */}
                    {/* <Link to="/contacts" className='main-nav-buttons'><button className="button order-button" type="submit">За контакт и поръчки</button></Link> */}
                    {/* <Link to={`/products/details/${product.id}/edit`} className='main-nav-buttons'><button className="button order-button" type="submit">Редактирай</button></Link> */}
                    {/* <Link to="/contacts" className='main-nav-buttons'><button className="button order-button" type="submit">Изтрий</button></Link> */}
                </div>

            </article>

        </main>
    )
};

export default Details;