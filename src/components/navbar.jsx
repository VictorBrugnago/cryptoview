import React from 'react';
import {Typography, Avatar} from "antd";
import {Link} from 'react-router-dom';

import icon from "../images/cryptoview.png";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoView</Link>
                </Typography.Title>
                {/*<Button className="menu-control-container">*/}

                {/*</Button>*/}
            </div>
        </div>
    )
};

export default Navbar;