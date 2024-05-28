import PropTypes from "prop-types";
import "../post/ind.css";
import { Link } from "react-router-dom";

const Ind = ({ profile, comments, description, username }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/ind/${username}`}>
              <img
                className="postProfileImg"
                src={profile}
                alt="1st post"
                height={"full"}
                width={"full"}
              />
            </Link>
            <div className="indUsername">Name: {username}</div>
          </div>
          <div className="indTopRight">{/* <MoreVert /> */}</div>
        </div>
        <div className="indCenter">
          <div className="indText">{description}</div>
        </div>
        <div className="indBottom">
          <div className="indBottomLeft">
            <img
              className="indlikeIcon"
              src="../src/images/like.png"
              alt="Like icon"
              width={"20px"}
              //   onClick={likeHandler}
            />
            <img
              className="indlikeIcon"
              src="../src/images/heart.png"
              alt="Heart icon"
              width={"20px"}
              //   onClick={likeHandler}
            />
          </div>
          <div className="indBottomRight">
            <div className="indCommentText">{comments}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Ind.propTypes = {
  posts: PropTypes.array.isRequired,
  username: PropTypes.string.isRequireds,
  description: PropTypes.string.isRequireds,
  like: PropTypes.string.isRequireds,
  comments: PropTypes.string.isRequireds,
  time: PropTypes.string.isRequireds,
  profile: PropTypes.string.isRequireds,
};

export default Ind;

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
