import '../Galery/Galery.css';
import './LampsGaleryNavigation.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LampsGaleryNavigation = ({

}) => {
    return (
        <div className="galery-navigation">
            <Link to='/lamps'><h1 className="main-tittle">Лампи</h1></Link>
            <div className="categories">
                <Link className="main-nav-button button categories-nav" to="/category1" >Категория 1</Link>
                <Link className="main-nav-button button categories-nav" to="/category2" >Категория 2</Link>
                <Link className="main-nav-button button categories-nav" to="/category3" >Категория 3</Link>
                <Link className="main-nav-button button categories-nav" to="/category4" >Категория 4</Link>
                <Link className="main-nav-button button categories-nav" to="/category5" >Категория 5</Link>
            </div>
        </div>
    )
}

export default LampsGaleryNavigation;