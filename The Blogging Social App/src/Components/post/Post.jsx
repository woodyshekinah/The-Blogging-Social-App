import PropTypes from "prop-types";

const Feed = ({ profile, time, comments, like, description, username }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profile} alt="1st post" />
            <span className="postUsername">{username}</span>
            <span className="postDate">{time}</span>
          </div>
          <div className="postTopRight">{/* <MoreVert /> */}</div>
        </div>
        <div className="postCenter">
          <span className="postText">{description}</span>
          <img
            className="postImg"
            src="../src/images/post/10.jpeg"
            alt="Ist Post"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="../src/images/like.png"
              alt="Like icon"
              //   onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src="../src/images/heart.png"
              alt="Heart icon"
              //   onClick={likeHandler}
            />
            <span className="postlikeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
  username: PropTypes.string.isRequireds,
  description: PropTypes.string.isRequireds,
  like: PropTypes.string.isRequireds,
  comments: PropTypes.string.isRequireds,
  time: PropTypes.string.isRequireds,
  profile: PropTypes.string.isRequireds,
};

export default Feed;

// export default function Post() {

//     const [like, setLike] = useState(50)
//     const [isLiked, setIsLiked] = useState(false)

//     const likeHandler =()=>{
//         setLike(isLiked ? like-1 : like+1 )
//         setIsLiked(!isLiked)
//     }

//     return (
//         <>
//  <div className="post">
//      <div className="postWrapper">
//          <div className="postTop">
//              <div className="postTopLeft">
//                  <img className="postProfileImg" src="../src/images/person/1.jpeg" alt="1st post" />
//                 <span className="postUsername">Willow Smith</span>
//                  <span className="postDate">5 mins ago</span>
//              </div>
//              <div className="postTopRight">
//                  <MoreVert />
//              </div>
//          </div>
//          <div className="postCenter">
//              <span className="postText">This is my first post :)</span>
//              <img className="postImg" src="../src/images/post/10.jpeg" alt="Ist Post" />
//          </div>
//        <div className="postBottom">
//              <div className="postBottomLeft">
//                  <img className="likeIcon" src="../src/images/like.png" alt="Like icon" onClick={likeHandler} />
//                  <img className="likeIcon" src="../src/images/heart.png" alt="Heart icon" onClick={likeHandler}/>
//                  <span className="postlikeCounter">{like} people liked</span>
//              </div>
//              <div className="postBottomRight">
//                  <span className="postCommentText">9 comments</span>

//              </div>
//          </div>
//      </div>
//  </div>

// <div className="post">
// <div className="postWrapper">
//     <div className="postTop">
//         <div className="postTopLeft">
//             <img className="postProfileImg" src="../src/images/person/9.jpeg" alt="1st post" />
//             <span className="postUsername">Willow Smith</span>
//             <span className="postDate">5 mins ago</span>
//         </div>
//         <div className="postTopRight">
//             <MoreVert />
//         </div>
//     </div>
//     <div className="postCenter">
//         <span className="postText">This is my first post :)</span>
//         <img className="postImg" src="../src/images/post/9.jpeg" alt="Ist Post" />
//     </div>
//     <div className="postBottom">
//         <div className="postBottomLeft">
//             <img className="likeIcon" src="../src/images/like.png" alt="Like icon" onClick={likeHandler} />
//             <img className="likeIcon" src="../src/images/heart.png" alt="Heart icon" onClick={likeHandler}/>
//             <span className="postlikeCounter">{like} people liked</span>
//         </div>
//         <div className="postBottomRight">
//             <span className="postCommentText">9 comments</span>

//         </div>
//     </div>
// </div>
// </div>

// <div className="post">
// <div className="postWrapper">
//     <div className="postTop">
//         <div className="postTopLeft">
//             <img className="postProfileImg" src="../src/images/person/1.jpeg" alt="1st post" />
//             <span className="postUsername">Willow Smith</span>
//             <span className="postDate">5 mins ago</span>
//         </div>
//         <div className="postTopRight">
//             <MoreVert />
//         </div>
//     </div>
//     <div className="postCenter">
//         <span className="postText">This is my first post :)</span>
//         <img className="postImg" src="../src/images/post/5.jpeg" alt="Ist Post" />
//     </div>
//     <div className="postBottom">
//         <div className="postBottomLeft">
//             <img className="likeIcon" src="../src/images/like.png" alt="Like icon" onClick={likeHandler} />
//             <img className="likeIcon" src="../src/images/heart.png" alt="Heart icon" onClick={likeHandler}/>
//             <span className="postlikeCounter">{like} people liked</span>
//         </div>
//         <div className="postBottomRight">
//             <span className="postCommentText">9 comments</span>

//         </div>
//     </div>
// </div>
// </div>

// <div className="post">
// <div className="postWrapper">
//     <div className="postTop">
//         <div className="postTopLeft">
//             <img className="postProfileImg" src="../src/images/person/1.jpeg" alt="1st post" />
//             <span className="postUsername">Willow Smith</span>
//             <span className="postDate">5 mins ago</span>
//         </div>
//         <div className="postTopRight">
//             <MoreVert />
//         </div>
//     </div>
//     <div className="postCenter">
//         <span className="postText">This is my first post :)</span>
//         <img className="postImg" src="../src/images/post/4.jpeg" alt="Ist Post" />
//     </div>
//     <div className="postBottom">
//         <div className="postBottomLeft">
//             <img className="likeIcon" src="../src/images/like.png" alt="Like icon" onClick={likeHandler} />
//             <img className="likeIcon" src="../src/images/heart.png" alt="Heart icon" onClick={likeHandler}/>
//             <span className="postlikeCounter">{like} people liked</span>
//         </div>
//         <div className="postBottomRight">
//             <span className="postCommentText">9 comments</span>

//         </div>
//     </div>
// </div>
// </div>

// <div className="post">
// <div className="postWrapper">
//     <div className="postTop">
//         <div className="postTopLeft">
//             <img className="postProfileImg" src="../src/images/person/4.jpeg" alt="1st post" />
//             <span className="postUsername">Willow Smith</span>
//             <span className="postDate">5 mins ago</span>
//         </div>
//         <div className="postTopRight">
//             <MoreVert />
//         </div>
//     </div>
//     <div className="postCenter">
//         <span className="postText">This is my first post :)</span>
//         <img className="postImg" src="../src/images/post/2.jpeg" alt="Ist Post" />
//     </div>
//     <div className="postBottom">
//         <div className="postBottomLeft">
//             <img className="likeIcon" src="../src/images/like.png" alt="Like icon" onClick={likeHandler} />
//             <img className="likeIcon" src="../src/images/heart.png" alt="Heart icon" onClick={likeHandler}/>
//             <span className="postlikeCounter">{like} people liked</span>
//         </div>
//         <div className="postBottomRight">
//             <span className="postCommentText">9 comments</span>

//         </div>
//     </div>
// </div>
// </div>
// </>
//     )
// }
