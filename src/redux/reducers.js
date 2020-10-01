import { combineReducers } from 'redux';

import ProductsReducer from './products/reducer';
import AuthReducer from './auth/reducer';

export const rootReducer = combineReducers({
  products: ProductsReducer,
  auth: AuthReducer
})