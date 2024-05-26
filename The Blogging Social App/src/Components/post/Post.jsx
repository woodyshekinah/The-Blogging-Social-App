import React from "react";
import './post.css'
import {MoreVert} from '@mui/icons-material'

export default function Post() {
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="../src/images/person/1.jpeg" alt="1st post" />
                        <span className="postUsername">Willow Smith</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">This is my first post :)</span>
                    <img className="postImg" src="../src/images/post/1.jpeg" alt="Ist Post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="../src/images/like.png" alt="Like icom" />
                        <img className="likeIcon" src="../src/images/heart.png" alt="Heart icom" />
                        <span className="postlikeCounter">32 people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}