import {createStore} from 'redux';
import {CounterReducer} from './Reducers';

const store=createStore(CounterReducer);

export default store;