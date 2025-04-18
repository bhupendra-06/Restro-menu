// import { useState } from 'react';

// const AdminLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     // Function to handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const loginData = {
//         email: email,
//         password: password,
//         };

//         try {
//         // Making the POST request to the backend login API
//         const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel-admin/login-admin`, {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(loginData),
//         });

//         const data = await response.json();

//         // Check for successful login
//         if (response.ok) {
//             // Storing token in cookies with HttpOnly, Secure, and SameSite
//             document.cookie = `token=${data.token}; path=/; max-age=${24 * 60 * 60}; secure; HttpOnly; SameSite=Strict`;
//             // Redirect to the admin dashboard or wherever you want
//             window.location.href = '/post';
//         } else {
//             setError(data.message || 'An error occurred, please try again.');
//         }
//         } catch (err) {
//         setError('Unable to connect to the server.');
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//             <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Hotel Admin Login</h2>
            
//             {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//             <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//                 <label className="block text-gray-700" htmlFor="email">
//                 Email
//                 </label>
//                 <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 />
//             </div>

//             <div className="mb-6">
//                 <label className="block text-gray-700" htmlFor="password">
//                 Password
//                 </label>
//                 <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 />
//             </div>

//             <button
//                 type="submit"
//                 className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//                 Login
//             </button>
//             </form>
//         </div>
//         </div>
//     );
// }


// export default AdminLogin;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { setAdmin } = useAuth();
    const navigate = useNavigate();

    console.log("API URL:", process.env.REACT_APP_BACKEND_API_URL);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
        email,
        password,
        };

        try {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel-admin/login-admin`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
            credentials: 'include', // 🔐 Important for sending the cookie
            }
        );

        const data = await response.json();

        if (response.ok) {
            setAdmin(data.admin); // 🔐 Update context
            navigate('/post'); // Redirect to protected page
        } else {
            setError(data.message || 'An error occurred, please try again.');
        }
        } catch (err) {
        setError('Unable to connect to the server.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
            Hotel Admin Login
            </h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Login
            </button>
            </form>
        </div>
        </div>
    );
};

export default AdminLogin;
