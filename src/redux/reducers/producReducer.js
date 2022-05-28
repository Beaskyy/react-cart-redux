import { REMOVE_SELECTED_PRODUCTS, SELECTED_PRODUCTS, SET_PRODUCTS } from "../constants/actionTypes"

const initialState = {
  products: []
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.payload}
    default:
      return state
  }
};

export const selectedProductReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SELECTED_PRODUCTS:
      return {...state, ...payload}
      default:
        return state
  }
};

export const removeSelectedProductReducer = (
  state = initialState,
  { type }
) => {
  switch (type) {
    case REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};