import { MoreVert } from '@material-ui/icons'
import React from 'react'
import "./post.css"
import {Users} from "../Data"


function Post({post}) {
    // console.log(post);
    // const user = Users.filter(u=> u.id===1)
    // console.log(user[0].username);
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src=".\assest\person\sad-2042536_1920.jpg"
                     alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src=".\assest\person\beach-2836300_640.jpg" alt=""  className='postImg'/>
            </div>
            <div className="postBottom">
                <div className="postBtnLeft">
                    <img src=".\assest\person\images.png" alt="" className='likeIcon' />
                    <img src=".\assest\person\download.jfif" alt=""   className='likeIcon'/>
                    <span className="postLikeCount">{post.like} people like it</span>
                </div>
                <div className="postBtnRight">
                    <span className="postCommentText">{Post.comment} Comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Post
