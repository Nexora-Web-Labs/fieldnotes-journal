import { Link } from "react-router-dom";
import { fmtDate } from "../posts.js";

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.slug}`} className="post-card">
      <div className="post-thumb" style={{ background: post.soft, color: post.color }}>{post.icon}</div>
      <div className="post-main">
        <div className="post-meta">
          <span className="post-tag" style={{ color: post.color, background: post.soft }}>{post.tag}</span>
          <span>{fmtDate(post.date)}</span><span>·</span><span>{post.readMins} min read</span>
        </div>
        <div className="post-title">{post.title}</div>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>
    </Link>
  );
}
