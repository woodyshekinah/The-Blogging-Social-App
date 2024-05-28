import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useState } from "react";

export default function Share() {
  const [formData, setFormData] = useState({
    profile: "",
    username: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await ("/api/blogs", formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={formData.profile || "../src/images/person/1.jpeg"}
            alt="profile picture"
          />
          <input
            placeholder="Add a Blog"
            className="shareInput"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <label htmlFor="image-upload">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={handleSubmit}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

// function BlogApp() {
//     const [posts, setPosts] = useState([]);
//     const [newPost, setNewPost] = useState('');

//     const handleNewPostChange = (e) => {
//       setNewPost(e.target.value);
//     };

//     const handleAddPost = () => {
//       if (newPost.trim() !== '') {
//         setPosts([...posts, { content: newPost, likes: 0, comments: [] }]);
//         setNewPost('');
//       }
//     };

//     const handleLikePost = (index) => {
//       const updatedPosts = [...posts];
//       updatedPosts[index].likes++;
//       setPosts(updatedPosts);
//     };

//     const handleAddComment = (index, comment) => {
//       const updatedPosts = [...posts];
//       updatedPosts[index].comments.push(comment);
//       setPosts(updatedPosts);
//     };

//     return (
//       <div>
//         <h1>Blog App</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Write a new post..."
//             value={newPost}
//             onChange={handleNewPostChange}
//           />
//           <button onClick={handleAddPost}>Add Post</button>
//         </div>
//         <div>
//           {posts.map((post, index) => (
//             <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//               <p>{post.content}</p>
//               <button onClick={() => handleLikePost(index)}>Like ({post.likes})</button>
//               <div>
//                 <input type="text" placeholder="Add a comment..." />
//                 <button onClick={() => handleAddComment(index, 'Sample comment')}>Add Comment</button>
//               </div>
//               <div>
//                 <h3>Comments</h3>
//                 <ul>
//                   {post.comments.map((comment, i) => (
//                     <li key={i}>{comment}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   export default BlogApp;
