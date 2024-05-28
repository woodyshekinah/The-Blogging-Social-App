import PropTypes from "prop-types";
import { React, useState } from "react";
import { MoreVert } from "@mui/icons-material";

const Feed = ({ profile, time, description, username }) => {
  const [like, setLike] = useState(50);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const likeHandler = () => {
    setLike(isLiked ? like + 1 : like + 1);
  };

  const addCommentHandler = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={profile}
              alt="1st post"
              height={"400px"}
              width={"500px"}
            />
            <div className="postUsername">{username}</div>
            <div className="postDate">{time}</div>
          </div>
          <div className="postTopRight">
            {" "}
            <MoreVert />{" "}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{description}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="../src/images/like.png"
              alt="Like icon"
              onClick={likeHandler}
            />
            <span className="postlikeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight">
            <div className="postComments">
              {comments.map((comment, index) => (
                <div key={index} className="postComment">
                  {comment}
                </div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={addCommentHandler}>Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Feed.propTypes = {
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};

export default Feed;
