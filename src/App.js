import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostForm from "./components/EditableMenu/PostForm";
import BusinessWebsite from "./components/contactCard/BusinessWebsite";

function App() {
  return (
    <Router>
      <div className="min-h-screen sm:bg-gray-400">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostForm />} />
          <Route path="/b" element={<BusinessWebsite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
