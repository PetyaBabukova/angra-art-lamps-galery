import './SubcategoriesComponent.css';

import { useEffect, useState } from "react";
import CategoriesCardComponent from "../CategoriesCardComponent/CategoriesCardComponent";

const SubcategoriesComponent = ({
    match,
}) => {

    // console.log(match.params);
    let searchedCategory = Object.values(match.params);
    // console.log(searchedCategory);

    let [currentProducts, setCurrentProducts] = useState([]);
    // let subcategory = match.params.subcategory

    useEffect(() => {
        fetch(`http://localhost:5000/products/`)
            .then(res => res.json())
            .then(res => setCurrentProducts(res))
        // .then(res => console.log(res));
    }, []);


    return (
        <main>
            {currentProducts.map(x => 
            x.subcategory==searchedCategory ? <CategoriesCardComponent 
            key={x.id}
            id={x.id}
            subcategory={x.subcategory}
            title={x.name}
            imageURL = {x.imageURL}
            /> : ''
            
            
            
            
            )}
            

        </main>

    );
}

export default SubcategoriesComponent;

// ?subcategory=${match.params}


// (<CategoriesCardComponent
//     key={x.id}
//     id={x.id}
//     subcategory={x.subcategory}
//     title={x.title}
//     imageURL={x.subcategoryURL}
// />)


// {
//     if (x.subcategory === searchedCategory) {
//         <CategoriesCardComponent
//             key={x.id}
//             id={x.id}
//             subcategory={x.subcategory}
//             title={x.title}
//             imageURL={x.imageURL}
//         />
        
//     }
// }