import React from "react";
import { 
    Routes,
    Route,
    BrowserRouter,
    Navigate
} from "react-router-dom";
import "./app.css"
import "7.css/dist/7.css";
import Home from './pages/home/Home';
import Blog from "./pages/blog/Blog";
import Projects from "./pages/projects/Projects";
import Help from "./pages/help/Help";
import InitialBlog from "./pages/blog/blogs/InitialBlog";
import Zuckonit from "./pages/blog/blogs/Zuckonit";
import HappyAlways from "./pages/blog/blogs/happyAlways";

class App extends React.Component {
  render() {
        return (
          <BrowserRouter>
              <div>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/initial-blog" element={<InitialBlog />} />
                      <Route path="/blog/zuckonit" element={<Zuckonit />} />
                      <Route path="/blog/happy-always" element={<HappyAlways />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/help" element={<Help />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;

