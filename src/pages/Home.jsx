import { useState, useMemo } from "react";
import { posts } from "../posts.js";
import PostCard from "../components/PostCard.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

const TAGS = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];

export default function Home() {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeTag !== "All" && p.tag !== activeTag) return false;
      if (q && !(p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [activeTag, query]);

  return (
    <>
      <div className="wrap">
        <div className="home-hero">
          <h1>Notes on building well.</h1>
          <p>Short, practical writing on interface design, front-end craft, and the decisions behind them.</p>
        </div>

        <div className="filter-bar">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
            <input type="text" placeholder="Search posts…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="tag-pills">
            {TAGS.map((t) => (
              <button key={t} className={`tag-pill ${activeTag === t ? "active" : ""}`} onClick={() => setActiveTag(t)}>{t}</button>
            ))}
          </div>
        </div>

        <div className="post-grid">
          {rows.length === 0 ? (
            <div className="empty-state">No posts match “{query}”. Try another search or tag.</div>
          ) : rows.map((p) => <PostCard post={p} key={p.slug} />)}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
