import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./producReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer
})
export default reducers