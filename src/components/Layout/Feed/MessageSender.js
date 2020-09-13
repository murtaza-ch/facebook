import './MessageSender.css';

import React, {useState} from 'react'

import { Avatar } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCamIcon from '@material-ui/icons/Videocam';
import db from '../../../firebase';
import firebase from 'firebase';
import {useStateValue} from '../../../StateProvider'

const MessageSender = () => {

  const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl
        })

        setInput('');
        setImageUrl('');
    }
    
    return (
        <div className="message_sender">
          <div className="message_sender_top">
              <Avatar src= {user.photoURL}/>
              <form>
                  <input
                  value={input}
                  onChange={(e)=> setInput(e.target.value)}    
                  className="message_sender_input" type="text" placeholder={`What's on your mind, ${user.displayName}?`}/>
                  
                  <input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="text" placeholder="image URL (Optional)"/>
                  <button onClick={handleSubmit} type="submit"> Hidden Submit</button>
              </form>
          </div>
          <div className="message_sender_bottom">
              
              <div className="message_sender_option">
                <VideoCamIcon style={{color:'red'}}/>
                <h3>Live Video</h3>
              </div>

              <div className="message_sender_option">
                <PhotoLibraryIcon style={{color:'green'}}/>
                <h3>Photo/Video</h3>
              </div>

              <div className="message_sender_option">
                <InsertEmoticonIcon style={{color:'orange'}}/>
                <h3>Feeling/Activity</h3>
              </div>

          </div>
        </div>
    )
}

export default MessageSender
