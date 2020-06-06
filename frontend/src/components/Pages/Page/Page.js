import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

const Page = (props) => {
    const [pageTitle, setPageTitle] = useState("");
    const [pageContent, setPageContent] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`/wp-json/wp/v2/pages?slug=${props.match.params.slug}`)
            .then((res) => {
                setPageTitle(res.data[0].title.rendered);
                setPageContent(res.data[0].content.rendered);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });

        // eslint-disable-next-line
    }, [props.match.params.slug]);

    return (
        <Fragment>
            {isLoaded && (
                <div className='container'>
                    <h1>
                        <u>{pageTitle}</u>
                    </h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: pageContent,
                        }}
                    />
                </div>
            )}
            {!isLoaded && <div>loading page content...</div>}
        </Fragment>
    );
};

export default Page;
