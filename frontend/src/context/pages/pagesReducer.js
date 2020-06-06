import { GET_PAGES, PAGES_ERROR } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_PAGES:
            return {
                ...state,
                pages: action.payload,
                loading: false,
            };
        case PAGES_ERROR:
            return {
                ...state,
                pages: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
