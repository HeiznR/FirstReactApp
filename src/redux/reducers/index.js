import { combineReducers } from 'redux';
import { default as filter } from './filter';
import { default as pizzas } from './pizzas';
import { default as cart } from './cart';

const rootReducer = combineReducers({
  filter,
  pizzas,
  cart,
});

export default rootReducer;
