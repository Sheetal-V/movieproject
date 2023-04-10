import React from 'react'
import "./rightbar.css"
import {Users} from "../Data"

function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src=".\assest\person\4213958.png" alt="img" className="birthdatImg" />
          <span className='birthdatText'>friends..</span>
        </div>
        <img className='add' src=".\assest\person\people-4817872_640.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendList">
          <li className="friends">
            <div className="profileImgContainer">
              <img src=".\assest\person\holi-2416686_640.jpg" alt="img" className="profileImg" />
              <span className="onlineActive"></span>
            </div>
            <span className="username">Varshi</span>
          </li>

        </ul>
      </div>
      
    </div>
  )
}

export default Rightbar
