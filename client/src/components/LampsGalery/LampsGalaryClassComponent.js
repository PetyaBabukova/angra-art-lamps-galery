import './LampsGalery.css';
import { Link } from 'react-router-dom';

import { Component } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import GaleryNavigation from '../GaleryNavigation/GaleryNavigation'
import Galery from './Galery';

class LampsGalary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            currentCategory: ''
        }

    }

    render() {
        
    }
}

export default LampsGalery;