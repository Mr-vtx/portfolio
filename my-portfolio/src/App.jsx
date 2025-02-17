import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import BlogPostDetail from "./Pages/Blog/Blog";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Project />
          </Layout>
        }
      />
      <Route
        path="/blog"
        element={
          <Layout>
            <BlogPostDetail />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
