import React, { useReducer } from "react";
import axios from "axios";
import WebsiteContext from "./websiteContext";
import WebsiteReducer from "./websiteReducer";
import { GET_WEBSITE_DATA, WEBSITE_ERROR } from "../types";

const WebsiteState = (props) => {
    const initialState = {
        websiteData: {},
        loading: false,
    };

    const [state, dispatch] = useReducer(WebsiteReducer, initialState);

    const getWebsiteData = async () => {
        try {
            const res = await axios.get("/wp-json/");
            dispatch({ type: GET_WEBSITE_DATA, payload: res.data });
        } catch (err) {
            dispatch({ type: WEBSITE_ERROR, payload: err.response.msg });
        }
    };

    return (
        <WebsiteContext.Provider
            value={{
                websiteData: state.websiteData,
                getWebsiteData,
            }}
        >
            {props.children}
        </WebsiteContext.Provider>
    );
};

export default WebsiteState;
