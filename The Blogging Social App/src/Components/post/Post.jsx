import React from "react";
import './post.css'
import {useState} from "react"


function Post() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [showComments, setShowComments] = useState(false);
  
  const handleNewPostChange = (e) => {
    setNewPost(e.target.value);
  };
  
  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, { content: newPost, likes: 0, comments: [] }]);
      setNewPost('');
    }
  };
  
  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes++;
    setPosts(updatedPosts);
  };
  
  const handleAddComment = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <input
          type="text"
          placeholder="Write a new post..."
          value={newPost}
          onChange={handleNewPostChange}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p>{post.content}</p>
            <img src='../src/images/like.png' onClick={() => handleLikePost(index)} />
                <span className="like">({post.likes}) people have liked your post</span>
            <div>
              <input type="text" placeholder="Add a comment..." />
              <button onClick={() => handleAddComment(index, 'Sample comment')}>Add Comment</button>
            </div>
            <div>
              <button onClick={toggleComments}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
              </button>
              {showComments && (
                <div>
                  <h3>Comments</h3>
                  <ul>
                    {post.comments.map((comment, i) => (
                      <li key={i}>{comment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;

