import { fromJS } from 'immutable';

const defaultState = fromJS({
    exchange: true
})

export default (state = defaultState, action) => {
    const {type, value} = action;
    let exchange = state.toJS().exchange;
    switch(type) {
        case 'exchange_address':
            return state.set('exchange', !exchange)
        default: 
            return state;
    }
}
