import { useState } from "react";
import "./CommunityFeed.css";

function CommunityFeed() {
  const [posts, setPosts] = useState([]);

  // TODO: fetch/mock posts, render PostCard list
  return (
    <div className="feed-page">
      <h2>Community Feed</h2>
      <p className="feed-count">{posts.length} posts</p>
    </div>
  );
}

export default CommunityFeed;