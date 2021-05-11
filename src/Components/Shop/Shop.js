import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/action/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    const {products, addToCart} = props
    
    return (
        <div>
            {
                products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);