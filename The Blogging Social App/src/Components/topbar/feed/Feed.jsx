import "./feed.css";
import Share from "../../share/Share";
import Post from "../../post/Post";
import posts from "../feed/BlogsData.json";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts.map((post) => (
          <Post
            key={post.id}
            profile={post.profile}
            username={post.username}
            time={post.time}
            comments={post.comments}
            like={post.like}
            description={post.description}
          />
        ))}

        {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
Feed.propTypes = {
  username: PropTypes.string.isRequired,
};

Feed.propTypes = {
  comments: PropTypes.array,
  time: PropTypes.array,
  username: PropTypes.array,
  profile: PropTypes.array,
  description: PropTypes.array,
  like: PropTypes.array,
  id: PropTypes.array,
};
