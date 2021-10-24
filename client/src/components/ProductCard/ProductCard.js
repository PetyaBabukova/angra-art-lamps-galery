import './ProductCard.css';
import { Link } from 'react-router-dom';


const ProductCard = ({ 
        id,
        name,
        description,
        imageURL,
        category, 
        price
    }) => {
    return (
        <Link className="product-card-container" to="/details">
            <section >
                <div className="product-card-image-container">
                    <img src={imageURL} />
                </div>
                <h3 className="product-card-tittle" >{name}</h3>
                <p className="product-card-description">{description}</p>
                <p className="product-card-price"> <strong>Цена:</strong> {price} лв</p>
            </section>
        </Link>
    )
}

export default ProductCard;