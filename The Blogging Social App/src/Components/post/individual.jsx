import Topbar from "../topbar/Topbar";
import Ind from "./ind";
import posts from "../topbar/feed/BlogsData.json";

const Individual = () => {
  return (
    <div>
      <Topbar />
      <div className="feed">
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <Ind
            key={post.id}
            profile={post.profile}
            username={post.username}
            time={post.time}
            comments={post.comments}
            like={post.like}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Individual;
