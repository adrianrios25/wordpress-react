import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import { GET_POSTS, POSTS_ERROR } from "../types";

const PostState = (props) => {
    const initialState = {
        posts: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(PostReducer, initialState);

    const getPosts = async () => {
        try {
            const res = await axios.get("/wp-json/wp/v2/posts");
            dispatch({
                type: GET_POSTS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({ type: POSTS_ERROR, payload: err.response.msg });
        }
    };

    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                getPosts,
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
};

export default PostState;
