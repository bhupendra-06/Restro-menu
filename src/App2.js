// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import PostForm from "./components/EditableMenu/PostForm";
// import BusinessWebsite from "./components/contactCard/BusinessWebsite";
// import AdminLogin from "./components/Admin/AdminLogin";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen sm:bg-gray-400">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/post" element={<PostForm />} />
//           <Route path="/b" element={<BusinessWebsite />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// App.js or a new context file (AuthProvider.js if you prefer context)
// It is simple App.js without context to check whether user is logged in or not from backend
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import PostForm from "./components/EditableMenu/PostForm";
import BusinessWebsite from "./components/contactCard/BusinessWebsite";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🧠 Check if user is logged in
    useEffect(() => {
        const checkLogin = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel-admin/me`, {
            credentials: "include", // send HTTP-only cookie
            });

            const data = await res.json();
            if (res.ok) {
            setAdmin(data.admin);
            } else {
            setAdmin(null);
            }
        } catch (error) {
            console.error("Error checking login:", error);
            setAdmin(null);
        } finally {
            setLoading(false);
        }
        };

        checkLogin();
    }, []);

    if (loading) return <div>Loading...</div>; // or splash screen

    return (
        <Router>
        <div className="min-h-screen sm:bg-gray-400">
            <Routes>
            <Route path="/admin-login" element={<AdminLogin setAdmin={setAdmin} />} />
            <Route path="/" element={ <Home /> }/>
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

