import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PagesContext from "../../../context/pages/pagesContext";

const Navbar = () => {
    // const [pages, setPages] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false);
    const pagesContext = useContext(PagesContext);
    const { pages, getPages, loading } = pagesContext;

    useEffect(() => {
        getPages();
        // eslint-disable-next-line
    }, []);

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    Home
                </Link>

                {!loading && (
                    <ul id='nav-mobile' className='right'>
                        {pages.map((page) => (
                            <li key={page.id}>
                                <Link to={"/page/" + page.slug}>
                                    {page.title.rendered}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {pages.length < 1 && (
                    <div className='right'>loading nav items...</div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
