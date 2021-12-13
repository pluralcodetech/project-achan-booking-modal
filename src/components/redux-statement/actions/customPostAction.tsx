// import { ThunkAction } from 'redux-thunk';

import { handleErrors } from "../../useFulSnippets/actions";
import { CustomPost } from "../constants/customPost";

const sendCustomPost = () => async (dispatch, _getState) => {
    return dispatch({
        type: CustomPost.SEND_CUSTOM_POST
    });
};

const sendCustomPostSuccess = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: CustomPost.SEND_CUSTOM_POST_SUCCESS,
        payload: { data }
    })
};

const sendCustomPostError = error => async (dispatch, _getState) => {
    return dispatch({
        type: CustomPost.SEND_CUSTOM_POST_FAILURE,
        payload: {error}
    })
}

// id: any
const customPostAction = () => async dispatch => { 
    dispatch(sendCustomPost());

    try {
         const response = await fetch(`https://watchoutachan.herokuapp.com/api/airline_branch/`, {
            method: 'post',
        })
        handleErrors(response);

        let json = await response.json();

        dispatch(sendCustomPostSuccess(json))
        return json;
    } catch (error) {

        dispatch(sendCustomPostError(error))
    }
};

export default customPostAction