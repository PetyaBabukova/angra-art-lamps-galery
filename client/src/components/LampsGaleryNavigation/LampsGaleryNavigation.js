import '../Galery/Galery.css';
import './LampsGaleryNavigation.css'
import { NavLink } from 'react-router-dom';

const LampsGaleryNavigation = () => {
    return (
        <div className="galery-navigation">
            {/* <NavLink to='/lamps'><h1 className="main-tittle">Лампи</h1></NavLink> */}
            <div className="categories">
                <NavLink activeClassName="button-selected" className="main-nav-button button categories-nav" to="/" >Всички</NavLink>
                <NavLink activeClassName="button-selected" className="main-nav-button button categories-nav" to="/categories/literature" >Литература</NavLink>
                <NavLink activeClassName="button-selected" className="main-nav-button button categories-nav" to="/categories/science" >Наука</NavLink>
                <NavLink activeClassName="button-selected" className="main-nav-button button categories-nav" to="/categories/sport" >Спорт</NavLink>
                <NavLink activeClassName="button-selected" className="main-nav-button button categories-nav" to="/categories/fantasy" >Фентъзи</NavLink>
                <NavLink activeClassName="button-selected" className="main-nav-button button categories-nav" to="/categories/movies" >Филми</NavLink>
            </div>
        </div>
    )
}

export default LampsGaleryNavigation;