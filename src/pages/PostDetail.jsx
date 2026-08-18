import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { posts, fmtDate, initials } from "../posts.js";
import ReadingProgress from "../components/ReadingProgress.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

function renderBlock(block, i) {
  if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
  if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>;
  return <p key={i}>{block.text}</p>;
}

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} — Fieldnotes`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [post]);

  if (!post) return <Navigate to="/" replace />;

  const related = posts.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, 2);
  const fallback = related.length ? related : posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <ReadingProgress />
      <div className="wrap post-detail">
        <Link to="/" className="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All posts
        </Link>

        <div className="post-detail-meta">
          <span className="post-tag" style={{ color: post.color, background: post.soft }}>{post.tag}</span>
          <span>{fmtDate(post.date)}</span><span>·</span><span>{post.readMins} min read</span>
        </div>
        <h1 className="serif">{post.title}</h1>
        <div className="post-author">
          <div className="author-avatar">{initials(post.author)}</div>
          <div>
            <div className="author-name">{post.author}</div>
            <div className="author-role">{post.role}</div>
          </div>
        </div>
        <div className="post-body">{post.body.map(renderBlock)}</div>

        <div className="related">
          <div className="related-title">Related reading</div>
          <div className="related-grid">
            {fallback.map((r) => (
              <Link to={`/post/${r.slug}`} className="related-card" key={r.slug}>
                <div className="post-meta"><span className="post-tag" style={{ color: r.color, background: r.soft }}>{r.tag}</span></div>
                <div className="post-title serif">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
