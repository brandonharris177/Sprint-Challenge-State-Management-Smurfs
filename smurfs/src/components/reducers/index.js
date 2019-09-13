//import {GETING_SMURF_START, GETING_SMURF_SUCCESS, GETING_SMURF_FAILURE} from '../actions'

import {GETING_SMURF_START, GETING_SMURF_SUCCESS, GETING_SMURF_FAILURE} from '../actions'

const initialState = { 
    smurfs: [],
    loading: false
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case GETING_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case GETING_SMURF_SUCCESS:
            // console.log(action.payload)
                return {
                    ...state,
                    loading: false,
                    smurfs: action.payload
                }

        case GETING_SMURF_FAILURE:
                return {
                    ...state,
                    loading: false
                }
        default: return state;
    }
}

export default reducer;