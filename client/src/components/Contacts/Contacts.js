import { render } from 'react-dom';
import './Contacts.css';

const Contacts = () => {
    return (
        <main>
        <h2 className="main-subtittle">За контакт и поръчки:</h2>
        <div className="contacts">
            <div className="aderss-contacts">
                <p className="adress">гр. София 1000</p>
                <p className="adress">ул. Неофит Рилски 37Б (входът е откъм двора)</p>
                <p className="adress">тел.: +359 2 988 09 21</p>
                <p className="adress">мобилен: 0884 127 002</p>
                <p className="adress">e-mail: angra@abv.bg, angra@angra-bg.com</p>
                <p className="adress">facebook: Ангра Арт</p>

                <br></br>
                <br></br>
                {/* <p className="adress"> <i>Моля напишете артикулния номер на изделието което сте си избрали или ако имате някакви други желания/ предложения. Ние ще се свържем с вас за допълнителни уточнения в първия възможен момент :)</i></p> */}
                <p className="adress"> <i>За поръчки и въпроси моля свържете се с нас, с някой от посочените по-горе начини за контакт</i></p>
            </div>
            
            {/* <form className="form contact-form">
                <input type="text" name="name" id="name"  placeholder="Вашето име" />
                <input type="number" name="phone" id="phone" placeholder="Телефон за връзка" />
                <input type="email" name="email" id="email" placeholder="e-mail" />
                <textarea name="question" id="question" cols="41" rows="10" placeholder="Контактна форма" maxlength="500"></textarea>
                
            </form> */}
        </div>

    </main>
    )
};

export default Contacts;