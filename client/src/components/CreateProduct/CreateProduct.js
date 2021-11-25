import './CreateProduct.css';
import * as productService from "../../services/productService";


const CreateProduct = ({
    history
}) => {

    const onCreateproductSubmitHandler = (e) => {
        e.preventDefault();

        const { name, description, imageURL, imageURL2, imageURL3, imageURL4, category, subcategory, price } = e.target

        productService.create(name.value, description.value, imageURL.value, imageURL2.value, imageURL3.value, imageURL4.value, category.value, subcategory.value, price.value)
            .then(() => {
                history.push('/')
            })

        console.log(name.value, description.value, category.value, subcategory.value, price.value);


    }

    return (
        <main>
            <form className="form input-form" onSubmit={onCreateproductSubmitHandler}>
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
                        <option value="literature" >Литература</option>
                        <option value="science">Наука</option>
                        <option value="sport">Спорт</option>
                        <option value="fantasy">Фентъзи</option>
                        <option value="movies">Филми</option>
                    </select>
                </div>

                <input type="text" name="name" id="title" size="50" placeholder="Име на продукта" />
                <input type="text" name="imageURL" id="imageURL" size="50" placeholder="Основна снимка" />
                <input type="text" name="imageURL2" id="imageURL2" size="50" placeholder="Допълнителна снимка 2" />
                <input type="text" name="imageURL3" id="imageURL3" size="50" placeholder="Допълнителна снимка 3" />
                <input type="text" name="imageURL4" id="imageURL4" size="50" placeholder="Допълнителна снимка 4" />
                <textarea name="description" id="description" cols="38" rows="10" placeholder="Описание" maxLength="500" />
                <input type="number" name="price" id="price" size="50" placeholder="Въведи цена" />
                <div className="submit-buttons-container">
                    <input className="button submit-button create" type="submit" value="Запиши" />
                    {/* <input className="button submit-button edit" type="submit" value="Редактирай" />
                    <input className="button submit-button delete" type="submit" value="Изтрий" /> */}
                </div>

            </form>

        </main>
    )
};

export default CreateProduct;