import { PRODUCTS } from "../ActionTypes/products";

export const updateProducts = (data) => {
    return {
        type: PRODUCTS,
        payload: data,
    };
};