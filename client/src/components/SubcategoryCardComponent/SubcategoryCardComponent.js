import { Link } from "react-router-dom";
import './SubcategoryCardComponent.css';


const SubcategoryCardComponent = ({
    subcategory,
    title,
    id,
    imageURL,
    price,
    key
}) => {


    return (
        <Link className="product-card-container" to={`/products/${subcategory}/${id}`}>
            {/* <section > */}
                <div className="product-card-image-container">
                    <img className="category-image" alt="img" src={imageURL} />
                </div>
                <h3 className="product-card-tittle" > {title} </h3>
                <p className="product-card-price"><strong>Цена: {price} лв </strong></p>
            {/* </section> */}
         </Link>


    )
};

export default SubcategoryCardComponent;