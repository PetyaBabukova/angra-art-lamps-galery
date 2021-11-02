const url = 'http://localhost:5000/products';

export const getAll = (subcategory = '') => {
    //let subcategory = this.props.match.params.subcategory

    let productsUrl = url + ((subcategory && subcategory !== 'products') ? `/?subcategory=${subcategory}` : '');

    return fetch(productsUrl)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getOne = (productId) => {

    return fetch(`${url}/${productId}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}