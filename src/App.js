import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostForm from "./components/PostForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen sm:bg-gray-400">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
