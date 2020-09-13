import './Widget.css';

import React from 'react'

const Widget = () => {
    return (
        <div className="widgets">
            <iframe
            src='https://web.facebook.com/fcbarcelona'
            width="340"
            height="100%"
            style={{border:"none", overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >

            </iframe>
        </div>
    )
}

export default Widget
