import './Sidebar.css';

import CahtIcon from '@material-ui/icons/Chat';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import React from 'react'
import SidebarRow from './SidebarRow';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {useStateValue} from '../../../StateProvider'

const Sidebar = () => {

    const [{user}, disptach] = useStateValue();

    return (
        <div className="sidebar">
        <SidebarRow
        src={user.photoURL}
        title={user.displayName}/>
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
        <SidebarRow Icon={EmojiFlagIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={CahtIcon} title="Messenger"/>
        <SidebarRow Icon={StoreFrontIcon} title="MarketPlace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace"/>
        </div>
    )
}

export default Sidebar
