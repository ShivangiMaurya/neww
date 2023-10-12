// rootreducer === index.js

// we want to combine all reducer , all this data in one store so we need a root reducer

// root reducer will combine all the reducers into a single one 

import {combineReducers} from 'redux';
import {cardItems} from './reducer';

export default combineReducers({
    cardItems,

})







