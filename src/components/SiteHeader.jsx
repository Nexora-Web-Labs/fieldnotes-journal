import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="site">
      <div className="wrap site-inner">
        <Link to="/" className="brand">
          <div className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
          </div>
          <div>
            <div className="brand-name">Fieldnotes</div>
            <div className="brand-sub">Design &amp; Code Journal</div>
          </div>
        </Link>
        <div className="site-nav">Issue No. 14</div>
      </div>
    </header>
  );
}
