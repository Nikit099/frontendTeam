import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logoEMP.png' 
import frown from '../images/frown.png' 
import smile from '../images/smile.png' 
import search from '../images/search_icon.png' 
const HeaderMain = () => {
    return (
        <div class="top-panel">
        <div class="search">
            <img alt='' src={search} />
            <form action="" method="get">
                <input name="s" placeholder="Найти" type="search" />
            </form>
        </div>
        <div class="slider">
            <img alt='' src={frown} id="slider-left-icon" />
            <input type="range" min="1" max="100" value="50" class="myRange" />
            <img alt='' src={smile} id="slider-right-icon" />
        </div>
        <div class="logo">
            <Link to={'/choice'}>
                <img alt='' src={logo} width="77" height="77" />
            </Link>
        </div>

    </div>
    );
};

export default HeaderMain;