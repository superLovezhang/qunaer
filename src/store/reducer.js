import { combineReducers } from 'redux-immutable';

import trainDate from '../pages/trainDate/store';
import city from '../pages/city/store';
import trainChoose from '../pages/trainChoose/store';

const reducer = combineReducers({
    trainDate,
    city,
    trainChoose
})

export default reducer;