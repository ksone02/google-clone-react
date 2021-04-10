import React from 'react';
import "./Home.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        //jshint ignore:start
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home_body">
                <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt=""
                />
                <div className="home_inputContainer">
                    <Search />
                </div>
            </div>
        </div>
        //jshint ignore:end
    );
}

export default Home;
