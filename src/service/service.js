import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/actionTypes';

export const signupRequest = (data) => ({
    type: SIGNUP_REQUEST,
    payload: data,
  });

  export const signupSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data,
  });

  export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
  });

export const signUpService = (userData) => async (dispatch) => {
    dispatch(signupRequest(userData));
    try {
        const response = await axios.post('http://localhost:5000/api/knowmycricket/signup', userData);
        // dispatch(signupSuccess(response.data));
        return response.data;
    } catch (error) {
        // dispatch(signupFailure(error.response.data));
        return error.response.data;
    }
}