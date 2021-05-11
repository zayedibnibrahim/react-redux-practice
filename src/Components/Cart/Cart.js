import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/action/cartAction';

const Cart = (props) => {
    const { cart, removeFromCart } = props
    return (
        <div style={{ border: '2px solid purple' }}>
            <h2>This is cart</h2>
            <ul>
                {
                    cart.map((item, index) =>
                        <li key={index + 1}>
                            {item.productName}
                            <button onClick={() => { removeFromCart(item.cartId) }}>
                                X
                                </button>
                        </li>)
                }
            </ul>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)