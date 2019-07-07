import { fromJS } from 'immutable';

const defaultState = fromJS({
    start: '北京',
    end: '上海'
})

export default (state = defaultState, action) => {
    const { type, value } = action;
    switch(type) {
        case 'change_start':
            return state.merge({
                start: value
            });
        case 'change_end':
            return state.merge({
                end: value
            });
        default:
            return state;
    }

}