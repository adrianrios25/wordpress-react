import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Page from "./components/Pages/Page/Page";
import Navbar from "./components/Layout/Navbar/Navbar";
import "./App.css";
import WebsiteState from "./context/website/WebsiteState";
import PostState from "./context/post/PostState";
import PagesState from "./context/pages/PagesState";

function App() {
    return (
        <WebsiteState>
            <PagesState>
                <PostState>
                    <Router>
                        <div className='container-fluid'>
                            <Navbar />
                            <Switch>
                                <Route Route exact path='/' component={Home} />
                                <Route
                                    Route
                                    exact
                                    path='/page/:slug'
                                    component={Page}
                                />
                            </Switch>
                        </div>
                    </Router>
                </PostState>
            </PagesState>
        </WebsiteState>
    );
}

export default App;
