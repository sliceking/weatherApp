import { FETCH_WEATHER } from '../actions/index'; 

module.exports = function(state = [], action){
    switch (action.type){
    case FETCH_WEATHER:
        // must return a new state or object, never mutate state
        return[ action.payload.data, ...state ];
    }
    return state;
}