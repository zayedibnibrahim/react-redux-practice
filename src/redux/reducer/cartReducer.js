import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cartAction";

const initialState = {
    cart: [],
    products: [
        { name: 'Lenovo', id: 1 },
        { name: 'MacBook', id: 2 },
        { name: 'Sony', id: 3 },
        { name: 'HP', id: 4 },
        { name: 'Toshiba', id: 5 }]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                productName: action.name,
                cartId: state.cart.length + 1
            }
            return { ...state, cart: [...state.cart, newItem] }

        case REMOVE_FROM_CART:

            return { ...state, cart: state.cart.filter(itemId => itemId.cartId !== action.id) }
        default:
            return state;
    }
}

export default cartReducer;