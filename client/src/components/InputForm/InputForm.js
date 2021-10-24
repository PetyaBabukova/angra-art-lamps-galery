import './InputForm.css';

const InputForm = () => {
    return (
        <main>

        <form className="form input-form">
            <input type="text" name="catrgory" id="category" size="50" placeholder="Въведи категория" />
            <input type="text" name="title" id="title" size="50" placeholder="Име на продукта" />
            <input type="text" name="imageURL" id="imageURL" size="50" placeholder="URL на продукта" />
            <textarea name="short-details" id="short-details" cols="38" rows="10" placeholder="Кратко описание" maxlength="50" />
            <textarea name="short-details" id="long-details" cols="38" rows="10" placeholder="Дълго описание" maxlength="150" />
            <input type="text" name="price" id="price" size="50" placeholder="Въведи цена" />
            <input className="button" type="button" value="Запиши" />

        </form>
       

    </main>
    )
};

export default InputForm;