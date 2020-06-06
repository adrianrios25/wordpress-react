import React from "react";
import PropTypes from "prop-types";

const PostItem = ({ post }) => {
    return (
        <div className='row'>
            <div className='col s12 m6 offset-m3'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <span className='card-title'>
                            {post.title.rendered}
                        </span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.content.rendered,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
};

export default PostItem;
