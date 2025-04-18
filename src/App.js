import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./components/Home";
import PostForm from "./components/EditableMenu/PostForm";
import BusinessWebsite from "./components/contactCard/BusinessWebsite";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
    const { admin, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

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
            </Routes>
        </div>
        </Router>
    );
}

export default App;
