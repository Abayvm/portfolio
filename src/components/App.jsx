import React from "react";
import { 
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import "./app.css"
import "7.css/dist/7.css";
import Home from './pages/home/Home';
import Blog from "./pages/blog/Blog";
import Projects from "./pages/projects/Projects";
import Help from "./pages/help/Help";

class App extends React.Component {
  render() {
        return (
          <BrowserRouter>
              <div>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/help" element={<Help />} />
                  </Routes>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;

