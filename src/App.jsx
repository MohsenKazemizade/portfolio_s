import { Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import BlogPost2 from "./pages/BlogPost2";

export default function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/blog-post2" element={<BlogPost2 />} />
      </Routes>
    </>
  );
}
