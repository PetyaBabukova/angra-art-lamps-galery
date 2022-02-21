import { Link } from "react-router-dom";
import './CategoriesCardComponent_old.css';


const CategoriesCardComponent = ({
    subcategory,
    title,
    imageURL,
    
}) => {


    return (
        <Link className="product-card-container" to={`/products/${subcategory}`}>
            {/* <section > */}
                <div className="product-card-image-container">
                    <img className="category-image" alt="img" src={imageURL} />
                </div>
                <h3 className="product-card-tittle" > {title} </h3>
            {/* </section> */}
         </Link>

    )
};

export default CategoriesCardComponent;