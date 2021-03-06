const url = 'http://localhost:5000/products';

export const getAll = (subcategory = '') => {
    //let subcategory = this.props.match.params.subcategory

    let productsUrl = url + ((subcategory && subcategory !== 'products') ? `/?subcategory=${subcategory}` : '');

    return fetch(productsUrl)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getOne = (productId, subcategory) => {

    return fetch(`${url}/${productId}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const create = (productName, description, imageURL, category, subcategory, price) => {

    let product = {
        name: productName,
        description,
        imageURL,
        category,
        subcategory,
        price
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    });
};

export const deleteProduct = (id) => {
    return fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE'
    })

}

export const edit = (productName, description, imageURL, category, subcategory, price, id) => {
    
    let product = {
        name: productName,
        description,
        imageURL,
        category,
        subcategory,
        price
    }

    return fetch(`http://localhost:5000/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    });
}

export const update = (product, productId) => {
fetch( `http://localhost:5000/products/${productId}`, {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify(product)
}

)
}