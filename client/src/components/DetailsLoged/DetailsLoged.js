import './DetailsLoged.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import * as productService from "../../services/productService";

const DetailsLoged = ({
    match,
    history
}) => {

    let [product, setProduct] = useState({})

    useEffect(() => {
        productService.getOne(match.params.productId, match.params.subcategory)
            .then(res => setProduct(res))
    }, [match])

    const id = match.params.productId;

    const deleteHandler = (e) => {

        e.preventDefault();

        productService.deleteProduct(id)
        .then(() => {
            history.push('/')
        })
    }


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
                    {/* <Link to="/contacts" className='main-nav-buttons'><button className="button order-button" type="submit">Поръчай</button></Link> */}
                    <form onSubmit={deleteHandler}>
                        <input className="button submit-button delete" type="submit" value="Изтрий" />
                    </form>
                    {/* <Link to="/contacts" className='main-nav-buttons'><button className="button order-button" type="submit">Изтрий</button></Link> */}
                </div>

            </article>

        </main>
    )
};

export default DetailsLoged;