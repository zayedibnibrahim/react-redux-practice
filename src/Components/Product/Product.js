import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props
    return (
        <div>
            <h3>Id:{product.id}) {product.name}</h3>
            <button onClick={() => addToCart(product.id, product.name)}>Add To Cart</button>
        </div>
    );
};

export default Product;