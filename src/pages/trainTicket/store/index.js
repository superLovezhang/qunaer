import { fromJS } from 'immutable';

const defaultState = fromJS({
    index: (new Date()).getDay()
})

export default (state = defaultState, action) => {
    const { type, value } = action;
    switch(type) {
        case 'change_date_index':
            return state.merge({
                index: value
            });
        default: 
            return state;
    }
}