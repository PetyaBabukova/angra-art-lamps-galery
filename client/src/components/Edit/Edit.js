import './Edit.css';
import { useEffect, useState } from "react";
import * as productService from "../../services/productService";

const Edit = ({
    history,
    match
}) => {

    let [product, setProduct] = useState({})

    useEffect(() => {
        productService.getOne(match.params.productId, match.params.subcategory)
            .then(res => setProduct(res))
    }, [match])


    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        const {product, name, description, imageURL, category, subcategory, price,  } = e.target

        productService.edit(name.value, description.value, imageURL.value, category.value, subcategory.value, price.value, match.params.productId)
            .then(() => {
                history.push('/')
            })

        console.log(name.value, description.value, category.value, subcategory.value, price.value);


    }


    return (
        <main>
            <form className="form input-form" onSubmit={onEditSubmitHandler}>
                {/* <input type="text" name="category" id="category" size="50" placeholder="Въведи категория" /> */}
                <div className="selectForm">
                    <label htmlFor="category" className="label-for-select"><strong>Категория</strong></label>
                    <select name="category" id="category" className="input-category">
                        <option value="lamps" >Лампи</option>
                        {/* <option value="christmasToys">Коледни играчки</option>
                    <option value="wineHolders">Стойки за вино</option>
                    <option value="cards">Картички</option>
                    <option value="other">Други</option> */}
                    </select>
                </div>

                <div className="selectForm">
                    <label htmlFor="subcategory" className="label-for-select"><strong>Подкатегория</strong></label>
                    <select name="subcategory" id="subcategory" className="input-category">
                        <option value="winterHolidays">Зимни празници</option>
                        <option value="dreamcatcher">Капан за сънища</option>
                        <option value="literature">Литература</option>
                        <option value="feary-tale">Приказки</option>
                        <option value="movies">Филми</option>
                        <option value="football">Футбол</option>
                        <option value="harry-potter">Хари Потър</option>
                    </select>
                </div>

                <input type="text" name="name" id="title" size="50" placeholder="Име на продукта" />
                <input type="text" name="imageURL" id="imageURL" size="50" placeholder="Снимка(URL)" />
                        {/* <input type="text" name="imageURL2" id="imageURL2" size="50" placeholder="Допълнителна снимка 2" />
                        <input type="text" name="imageURL3" id="imageURL3" size="50" placeholder="Допълнителна снимка 3" />
                        <input type="text" name="imageURL4" id="imageURL4" size="50" placeholder="Допълнителна снимка 4" /> */}
                <textarea name="description" id="description" cols="38" rows="10" placeholder="Описание" maxLength="500" />
                <input type="number" name="price" id="price" size="50" placeholder="Цена" />
                <div className="submit-buttons-container">
                    <input className="button submit-button create" type="submit" value="Редактирай" />
                    {/* <input className="button submit-button edit" type="submit" value="Редактирай" />
                    <input className="button submit-button delete" type="submit" value="Изтрий" /> */}
                </div>
            </form>
        </main>
    )
};

export default Edit;