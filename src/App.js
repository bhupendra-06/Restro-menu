import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./components/Home";
import PostForm from "./components/EditableMenu/PostForm";
import Admin from "./components/EditableMenu/Admin";
import BusinessWebsite from "./components/contactCard/BusinessWebsite";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
    const { admin, loading } = useAuth();

    if (loading) return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
    

    return (
        <Router>
        <div className="min-h-screen sm:bg-gray-400">
            <Routes>
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/" element={<Home /> }/>
            <Route
                path="/post"
                element={admin ? <PostForm /> : <Navigate to="/admin-login" />}
            />
            <Route
                path="/b"
                element={admin ? <BusinessWebsite /> : <Navigate to="/admin-login" />}
            />
            <Route
                path="/admin"
                element={admin ? <Admin /> : <Navigate to="/admin-login" />}
            />
            </Routes>
        </div>
        </Router>
    );
}

export default App;
