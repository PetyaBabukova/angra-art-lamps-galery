import '../Galery/Galery.css';
import './GaleryNavigation.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GaleryNavigation = ({

}) => {
    return (
        <div className="galery-navigation">
            <h1 className="main-tittle">Галерия</h1>
            <div className="categories">
                <Link className="main-nav-button button categories-nav" to="/lamp" classNameName='main-nav-buttons'>Лампи</Link>
                <Link className="main-nav-button button categories-nav" to="/christmastoys" classNameName='main-nav-buttons'>Играчки за елха</Link>
                <Link className="main-nav-button button categories-nav" to="/wineholders" classNameName='main-nav-buttons'>Стойки за вино</Link>
                <Link className="main-nav-button button categories-nav" to="/cards" classNameName='main-nav-buttons'>Картички</Link>
            </div>
        </div>
    )
}

export default GaleryNavigation;