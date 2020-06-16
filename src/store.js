import {createStore} from "redux";
const CLICK_COUNTER = 'CLICK_COUNTER';
const GET_RANDOM_INDEX = 'GET_RANDOM_INDEX';
const START_AGAIN = 'START_AGAIN';

const initialState = {
    counter: 0,
    index: 1,
    time: 700,
    item: [{},{}, {}, {}, {}, {}, {},{},{}],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_COUNTER: {
            return {
                ...state, counter: state.counter + 1
            }
        }
        case GET_RANDOM_INDEX: {
            return {
                ...state, index: Math.floor(Math.random() * 9)
            }
        }
        case START_AGAIN: {
            return {
                ...state, counter: 0
            }
        }

        default:
            return state;

    }

}

const store = createStore(reducer);

export const clickCounterAC = () => ({type:CLICK_COUNTER});
export const getRandomImageIndexAC = () => ({type: GET_RANDOM_INDEX});
export const startAgainAC = () => ({type: START_AGAIN});


export default store;