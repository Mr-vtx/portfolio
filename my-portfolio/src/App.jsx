import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./Pages/Home/Homepage";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import BlogPostDetail from "./Pages/Blog/Blog";
import Layout from "./components/Layout/Layout";
import PageTransition from "./components/Layout/PageTransition";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageTransition page="home">
                <Homepage />
              </PageTransition>
            }
          />
          <Route
            path="projects"
            element={
              <PageTransition page="projects">
                <Project />
              </PageTransition>
            }
          />
          <Route
            path="blog"
            element={
              <PageTransition page="blog">
                <BlogPostDetail />
              </PageTransition>
            }
          />
          <Route
            path="contact"
            element={
              <PageTransition page="contact">
                <Contact />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
