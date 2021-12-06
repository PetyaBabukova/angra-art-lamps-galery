import './GaleryNew.css';
import { useEffect, useState } from 'react';

import CategoriesCardComponent from "../CategoriesCardComponent/CategoriesCardComponent";

const GaleryNew = ({
    match
}) => {

    let [subcategories, setSubcategories] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/subcategories')
            .then(res => res.json())
            .then(res => (setSubcategories(res)))
        // .then(res => console.log(subcategories))
        // .then(res => res.map(x => console.log(x)))

    }, [])
    // console.log(subcategories);

    // subcategories.map(x=>console.log(x.id))

    return (
        <main>
            {subcategories.map(x => <CategoriesCardComponent
                key={x.id}
                id={x.id}
                subcategory={x.subcategory}
                title={x.title}
                imageURL={x.subcategoryURL}
            />)}

        </main>
    );
};














export default GaleryNew;