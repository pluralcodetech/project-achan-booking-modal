export enum CustomPost { 
    SEND_CUSTOM_POST = 'SEND_CUSTOM_POST',
    SEND_CUSTOM_POST_SUCCESS = 'SEND_CUSTOM_POST_SUCCESS',
    SEND_CUSTOM_POST_FAILURE = 'SEND_CUSTOM_POST_FAILURE',
}

export interface SendCustomPost { 
    type: CustomPost.SEND_CUSTOM_POST;
}

export interface SendCustomPostSuccess { 
    type: CustomPost.SEND_CUSTOM_POST_SUCCESS;
    payload: any;  
}

export interface SendCustomPostFailure {
    type: CustomPost.SEND_CUSTOM_POST_FAILURE;
    payload: any;
}