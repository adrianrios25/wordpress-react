import { GET_POSTS, POSTS_ERROR } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        case POSTS_ERROR:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
