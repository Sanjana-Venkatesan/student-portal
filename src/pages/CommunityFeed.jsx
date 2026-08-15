import { useState } from "react";
import "./CommunityFeed.css";

function CommunityFeed() {
  const [posts, setPosts] = useState([]);

  // TODO: fetch/mock posts, render PostCard list
  return (
    <div className="feed-page">
      <h2>Community Feed</h2>
    </div>
  );
}

export default CommunityFeed;