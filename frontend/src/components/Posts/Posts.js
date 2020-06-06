import React, { useEffect, useContext } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import PostContext from "../../context/post/postContext";

const Posts = () => {
    const postContext = useContext(PostContext);
    const { posts, getPosts, loading } = postContext;

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {posts && !loading && (
                <div>
                    <h3>Posts</h3>
                    {posts.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
            )}
            {posts.length < 1 && <div>loading...</div>}
        </div>
    );
};

export default Posts;
