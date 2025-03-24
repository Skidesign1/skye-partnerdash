import React from "react"; 
import { useNavigate } from "react-router-dom";

  const LoginPage = () => {
const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }; 
   return(
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black">
            <div className="absolute top-8 w-full flex justify-center">
         <img src="/logo.png" alt="Logo" className="w-32 mx-auto" />
         </div>

        {/*<div className="flex items-center justify-center h-screen w-full px-4 sm:px-6 lg:px-8 bg-black-100">
        <div className="flex justify-center items-center h-screen w-full bg-black-100">*/}

<div className="flex items-center justify-center h-full w-full ">
            <div className="bg-black-900 p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-3x1 font-bold mb-6 text-center text-white">Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-black">Email</label>
                        <input
                        type="email"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 bg-gray-800 text-white "
                       placeholder="Enter your email"
                        required
                        />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black">
                                password
                            </label>
                            <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring focus:border-blue-500 bg-gray-800 text-white"
                            placeholder="Enter your password"
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
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-lg font-semibold"
                        > 
                        Login
                        </button>
                </form>
            </div>
        </div>
    </div>
        
    );
};

export default LoginPage;