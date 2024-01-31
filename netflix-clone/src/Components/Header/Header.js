import React, { useState } from 'react'
import"./Header.css"
import NetflixLogo from"../../assets/images/Netflix_Logo_PMS.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <div className='header_outer_container'>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li ><img src={NetflixLogo}  alt='neflixlogo'width="180" height="90"/></li>
                        <li>Homes</li>
                        <li>TvShows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>Mylist</li>
                        <li>Browse by Language</li>
                        </ul>
                        <button className="menu_button" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    </div>
                    <div className='header_right'>
                        <ul> 
                            <li><SearchIcon/></li>
                            <li>Kids</li>
                            <li><NotificationsNoneIcon/></li>
                            <li><AccountBoxIcon/></li>
                            <li><ArrowDropDownIcon/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
    }

    export default Header;