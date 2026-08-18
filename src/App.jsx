import { Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader.jsx";
import Home from "./pages/Home.jsx";
import PostDetail from "./pages/PostDetail.jsx";

export default function App() {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostDetail />} />
      </Routes>
    </>
  );
}
