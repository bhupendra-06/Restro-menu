// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔍 Check if admin is logged in on first load
    useEffect(() => {
        const checkLogin = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel-admin/me`, {
            credentials: "include",
            });
            const data = await res.json();
            if (res.ok) {
            setAdmin(data.admin);
            } else {
            setAdmin(null);
            }
        } catch (error) {
            console.error("Login check error:", error);
            setAdmin(null);
        } finally {
            setLoading(false);
        }
        };

        checkLogin();
    }, []);

    const logout = async () => {
        try {
        await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel-admin/logout-admin`, {
            method: "POST",
            credentials: "include",
        });
        setAdmin(null);
        } catch (error) {
        console.error("Logout error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ admin, setAdmin, logout, loading }}>
        {children}
        </AuthContext.Provider>
    );
};

// 👇 Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
