import React, { useEffect, useContext, Fragment } from "react";
import Posts from "../../Posts/Posts";
import WebsiteContext from "../../../context/website/websiteContext";

const Home = () => {
    const websiteContext = useContext(WebsiteContext);
    const { websiteData, getWebsiteData, loading } = websiteContext;

    useEffect(() => {
        getWebsiteData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='container'>
            {websiteData && !loading && (
                <Fragment>
                    <h1>{websiteData.name}</h1>
                    <p>{websiteData.description}</p>
                </Fragment>
            )}
            {Object.keys(websiteData).length === 0 && (
                <div>loading page content...</div>
            )}
            <hr />
            <Posts />
        </div>
    );
};

export default Home;
