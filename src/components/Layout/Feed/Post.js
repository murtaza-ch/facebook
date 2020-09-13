import './Post.css';

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {Avatar} from '@material-ui/core'
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutline'
import {ExpandMoreOutlined} from '@material-ui/icons'
import NearMeIcon from '@material-ui/icons/NearMe'
import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Post = ({profilePic, image, username, timestamp, message}) => {
    return (
        <div className="post">
            <div className="post_top">
             <Avatar src={profilePic} className="post_avatar"/>
             <div className="post_topInfo">
                 <h3>{username}</h3>
                 <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
             </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt=""/>
            </div>

            <div className="post_options">
                <div className="post_option">
                 <ThumbUpIcon/>
                 <p>Like</p>
                </div>

                <div className="post_option">
                 <ChatBubbleOutlinedIcon/>
                 <p>Comment</p>
                </div>

                <div className="post_option">
                 <NearMeIcon/>
                 <p>Share</p>
                </div>

                <div className="post_option">
                 <AccountCircleIcon/>
                 <ExpandMoreOutlined/>
                </div>

            </div>
            
        </div>
    )
}

export default Post
