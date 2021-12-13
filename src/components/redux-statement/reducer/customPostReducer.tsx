import { SendCustomPost, SendCustomPostSuccess, SendCustomPostFailure, CustomPost } from "../constants/customPost";

type ActionTypes = SendCustomPost | SendCustomPostSuccess | SendCustomPostFailure;

export interface CustomPostState { 
    customPost: object[];
    loading: boolean;
    error: any;
};

const getInitialState = () => {
    return {
        customPost: [],
        loading: false,
        error: null
    };
};

const customPostReducer = (state: CustomPostState = getInitialState(), action: ActionTypes) => {
    switch (action.type) {
        case CustomPost.SEND_CUSTOM_POST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CustomPost.SEND_CUSTOM_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                customPost: action.payload.data
            };
        case CustomPost.SEND_CUSTOM_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
};

export default customPostReducer;
