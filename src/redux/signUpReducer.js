import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/actionTypes";

const intialState = {
    loadind: false,
    user: null,
    error: null
}

const signUpReducer = (state = intialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                user: action.payload
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
};

export default signUpReducer;