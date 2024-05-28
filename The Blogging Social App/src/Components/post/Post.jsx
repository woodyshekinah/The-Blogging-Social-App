
import React, { useState, createContext, useContext, useReducer, useEffect } from 'react';
import './post.css';

// Blog context
const BlogContext = createContext();

// Initial state
const initialState = {
  blogPosts: JSON.parse(localStorage.getItem('blogPosts')) || [],
};

// Reducer function
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const newPosts = [...state.blogPosts, action.payload];
      localStorage.setItem('blogPosts', JSON.stringify(newPosts));
      return {
        ...state,
        blogPosts: newPosts,
      };
    case 'DELETE_POST':
      const updatedPosts = state.blogPosts.filter((post) => post.id !== action.payload);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      return {
        ...state,
        blogPosts: updatedPosts,
      };
    case 'LIKE_POST':
      const likedPosts = state.blogPosts.map((post) =>
        post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
      );
      localStorage.setItem('blogPosts', JSON.stringify(likedPosts));
      return {
        ...state,
        blogPosts: likedPosts,
      };
    case 'ADD_COMMENT':
      const commentedPosts = state.blogPosts.map((post) =>
        post.id === action.payload.id
          ? { ...post, comments: [...post.comments, action.payload.comment] }
          : post
      );
      localStorage.setItem('blogPosts', JSON.stringify(commentedPosts));
      return {
        ...state,
        blogPosts: commentedPosts,
      };
    default:
      return state;
  }
};

// Provider component
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return <BlogContext.Provider value={{ state, dispatch }}>{children}</BlogContext.Provider>;
};

// Custom hook to use the blog context
export const useBlog = () => useContext(BlogContext);

// AddPostForm component
const AddPostForm = () => {
  const { dispatch } = useBlog();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), // Just for demo, you might want to use something more robust
      title,
      content,
      likes: 0,
      comments: [],
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Add Post
      </button>
    </form>
  );
};

// BlogPost component
const BlogPost = ({ post }) => {
  const { dispatch } = useBlog();

  const handleDelete = () => {
    dispatch({ type: 'DELETE_POST', payload: post.id });
  };

  const handleLike = () => {
    dispatch({ type: 'LIKE_POST', payload: post.id });
  };

  const handleAddComment = (comment) => {
    dispatch({ type: 'ADD_COMMENT', payload: { id: post.id, comment } });
  };

  return (
    <div className="blog-post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <p className="post-likes">Likes: {post.likes}</p>
      <button onClick={handleLike} className="like-button">
        Like
      </button>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      <AddCommentForm onAddComment={handleAddComment} />
      <Comments comments={post.comments} />
    </div>
  );
};

// AddCommentForm component
const AddCommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="comment-input-field"
      />
      <button type="submit" className="submit-comment-button">
        Submit
      </button>
    </form>
  );
};

// Comments component
const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <ul className="comments-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <BlogProvider>
      <div className="app">
        <h1 className="blog-title">My Blog</h1>
        <AddPostForm />
        <BlogPosts />
      </div>
    </BlogProvider>
  );
};

// BlogPosts component
const BlogPosts = () => {
  const { state } = useBlog();

  return (
    <div className="blog-posts">
      {state.blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;

/* import PropTypes from "prop-types";
=======
import PropTypes from "prop-types";
import { useState } from "react";

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
          
          <div className="postTopRight">{/* <MoreVert /> </div>
=======
          <div className="postTopRight"></div>

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
*/

