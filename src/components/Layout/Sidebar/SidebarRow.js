import './SidebarRow.css';

import {Avatar} from '@material-ui/core'
import React from 'react'

const SidebarRow = ({Icon, src, title}) => {
    return (
        <div className="sidebarRow">
        { src && <Avatar src={src}/> }
        { Icon && <Icon/>}
        <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
