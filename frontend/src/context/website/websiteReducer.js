import { GET_WEBSITE_DATA, WEBSITE_ERROR } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_WEBSITE_DATA:
            return {
                ...state,
                websiteData: action.payload,
                loading: false,
            };
        case WEBSITE_ERROR:
            return {
                ...state,
                websiteData: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
