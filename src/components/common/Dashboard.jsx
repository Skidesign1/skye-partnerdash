import React from "react";
import { Children } from "react";

const Layout =({ Children }) => {
    return (
        <div className="flex h-screen bg-gray-200">
             <aside className="w-64 bg-gray-800 text-white p-4">Sidebar Content</aside>
             <main className="flex-grow bg-white p-4">Main Page Content</main>
        </div>
    );
}; 
const Dashboard = () => {
    return(
        <div className="dashboard-container">
       <h1 className="text-3x1">Welcome </h1>
       </div>
    );
};
export default Dashboard;