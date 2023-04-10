import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import React from 'react'
import "./Share.css"

function Share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img src=".\assest\person\photographer-407068_640.jpg" alt="img" className="profileImage" />
                <input placeholder='what's in your mind className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon' />
                        <span className="optionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon' />
                        <span className="optionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon' />
                        <span className="optionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='DAA520' className='shareIcon' />
                        <span className="optionText">Photo or Video</span>
                    </div>
                </div>
                <button className='shareBtn'>Share</button>
            </div>
        </div>
       
    </div>
  )
}

export default Share
