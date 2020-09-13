import "./Header.css";

import {Avatar, IconButton} from "@material-ui/core"

import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/Notifications';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {useStateValue} from '../../StateProvider'

const Header = () => {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">

        <div className="header_left">
        <img src = "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
             alt="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"/>
        
        <div className="header_input">
        <SearchIcon/>
        <input placeholder="Search Facebook" type="text"/>
        </div>

        </div>
        

        <div className="header_center">
        <div className="header_option header_option_active">
            <HomeIcon fontSize="large"/>
        </div>

        <div className="header_option">
            <FlagIcon fontSize="large"/>
        </div>

        <div className="header_option">
            <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>

        <div className="header_option">
            <StorefrontOutlinedIcon fontSize="large"/>
        </div>

        <div className="header_option">
            <SupervisedUserCircleIcon fontSize="large"/>
        </div>

        </div>

        <div className="header_right">
        
        <div className="header_info">
        <Avatar src = {user.photoURL}/>
        <h4>{user.displayName}</h4>
        </div>

        <IconButton>
        <AddIcon/>
        </IconButton>

        <IconButton>
        <ForumIcon/>
        </IconButton>

        <IconButton>
        <NotificationsActiveIcon/>
        </IconButton>

        <IconButton>
        <ExpandMoreIcon/>
        </IconButton>
        </div>

        </div>
    )
}

export default Header
