import './LampsGalery.css';

import { Component } from 'react';

import * as productService from '../../services/productService';

import ProductCard from '../ProductCard/ProductCard';
import LampsGaleryNavigation from '../LampsGaleryNavigation/LampsGaleryNavigation'

class LampsGalaryClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            currentSubcategory:'products'
        }

    }

    componentDidMount() {
        productService.getAll()
            .then(res => this.setState({ products: res }))
    }

    componentDidUpdate(prevProps) {
        const subcategory = this.props.match.params.subcategory
        if (prevProps.match.params.subcategory === subcategory) {
            return;
        }

        productService.getAll(subcategory)
            .then(res => this.setState({ products: res, currentSubcategory: subcategory}))
    }

    render() {
        // console.log(this.props.match.params.subcategory);

        return (
            <main>
                <LampsGaleryNavigation/>

                {this.state.products.map(x =>
                    <ProductCard
                        key={x.id}
                        id={x.id}
                        name={x.name}
                        description={x.description}
                        price={x.price}
                        imageURL={x.imageURL}
                        subcategory={x.subcategory}
                    />)}
            </main>
        )
    }
}

export default LampsGalaryClassComponent;