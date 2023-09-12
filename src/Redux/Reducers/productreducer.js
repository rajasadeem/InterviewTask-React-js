import { PRODUCTS } from "../ActionTypes/products"

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return {
                ...state,
            };
    }

}

export default productReducer