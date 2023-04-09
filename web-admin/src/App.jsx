import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Author from "./pages/Author";
import Category from "./pages/Category";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Author />} />
          <Route path="/category" element={<Category />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
