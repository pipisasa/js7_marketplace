import { combineReducers } from 'redux';

import ProductsReducer from './products/reducer';

export const rootReducer = combineReducers({
  products: ProductsReducer,
})