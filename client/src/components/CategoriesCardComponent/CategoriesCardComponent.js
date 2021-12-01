import { Link } from "react-router-dom";
import './CategoriesCardComponent_old.css';


const CategoriesCardComponent = ({
    subcategory,
    imageURL,
    key
}) => {


    return (
        <Link className="product-card-container" to={`/categories/${subcategory}`}>
            {/* <section > */}
                <div className="product-card-image-container">
                    <img className="category-image" alt="img" src={imageURL} />
                </div>
                <h3 className="product-card-tittle" > {subcategory} </h3>
            {/* </section> */}
         </Link>


    )
};

export default CategoriesCardComponent;