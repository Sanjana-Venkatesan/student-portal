import { useState } from "react";
import { mockPosts } from "../data/mockPosts";
import "./CommunityFeed.css";

function CommunityFeed() {
  const [posts, setPosts] = useState(mockPosts);
  const [sortBy, setSortBy] = useState("recent");

  const sortedPosts = sortBy === "likes"
    ? [...posts].sort((a, b) => b.likes - a.likes)
    : posts;

  return (
    <div className="feed-page">
      <h2>Community Feed</h2>
      <p className="feed-count">{posts.length} posts</p>
      <div className="feed-list">
        {sortedPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span>{post.likes} likes</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityFeed;