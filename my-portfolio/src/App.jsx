import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import BlogPostDetail from "./Pages/Blog/Blog";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="projects" element={<Project />} />
        <Route path="blog" element={<BlogPostDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
