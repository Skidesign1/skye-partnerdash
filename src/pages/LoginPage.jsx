import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");


    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
    
        try {
            const response = await fetch("http://localhost:5000/api/partner/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
            console.log("Response data:", data); // ✅ Log response
    
            if (!response.ok) {
                throw new Error(data.error || "Login failed. Please try again.");
            }
    
            if (!data.partnerId) {
                throw new Error("Partner ID is missing from response");
            }
    
            // ✅ Store token and partnerId
            localStorage.setItem("partnerToken", data.token);
            localStorage.setItem("partnerId", data.partnerId);
    
            console.log("Stored partnerId:", data.partnerId); // ✅ Log to confirm
    
            navigate("/dashboard"); 
        } catch (err) {
            console.error("Login error:", err.message);
            setError(err.message);
        }
    };
    
    
    
   return(
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
            <div className="absolute top-8 w-full flex justify-center">
            <img src="/logo.png" alt="Logo" className="w-32 mx-auto" />
            </div>

        {/*<div className="flex items-center justify-center h-screen w-full px-4 sm:px-6 lg:px-8 bg-black-100">
        <div className="flex justify-center items-center h-screen w-full bg-black-100">*/}

            <div className="flex items-center justify-center h-full w-full ">
                <div className="bg-black-900 p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-3x1 font-bold mb-6 text-center text-black">PARTNER Login</h2>

                    <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block text-gray-300">Email</label>
                                <input
                                type="email"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 bg-gray-800 text-white "
                                placeholder="Enter your email"
                                onChange={(e)=> setEmail(e.target.value)}
                                required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-300">
                                    password
                                </label>
                                <input
                                type="password"
                                className="w-full px-3 py-2 border rounded-lg bg-black focus:outline-none focus:ring focus:border-blue-500  text-white"
                                placeholder="Enter your password"
                                onChange={(e)=> setPassword(e.target.value)}
                                required
                                />
                            </div>

                            {/*Forget password Link*/}
                            <div className="text-right mb-4">
                                <a href="/forget-password" className="text-blue-400 text-sm">
                                Forgot Password?
                                </a>
                            </div>

                            <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 px-4 text-lg font-semibold"
                            > 
                            Login
                            </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
        </div>
        
    );
};

export default LoginPage;