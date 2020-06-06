import React, { useReducer } from "react";
import axios from "axios";
import PagesContext from "./pagesContext";
import PagesReducer from "./pagesReducer";
import { GET_PAGES, PAGES_ERROR } from "../types";

const PagesState = (props) => {
    const initialState = {
        pages: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(PagesReducer, initialState);

    const getPages = async () => {
        try {
            const res = await axios.get("/wp-json/wp/v2/pages");
            dispatch({
                type: GET_PAGES,
                payload: res.data,
            });
        } catch (err) {
            dispatch({ type: PAGES_ERROR, payload: err.respinse.msg });
        }
    };

    return (
        <PagesContext.Provider
            value={{
                pages: state.pages,
                getPages,
            }}
        >
            {props.children}
        </PagesContext.Provider>
    );
};

export default PagesState;
