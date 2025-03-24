<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}
=======
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./components/common/Dashboard";
import AnalyticsPage from "./pages/AnalyticsPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";
import SettingsPage from "./pages/SettingsPage";
import Sidebar from "./components/common/Sidebar";

const isAuthenticated =localStorage.getItem("auth") === "true";

function App() {
	return( 
	
		<div className='flex h-screen bg-white text-black overflow-hidden'>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
				path="/dashboard"
				element={
					<div className="flex w-full h-full bg-white text-black">
					<Sidebar />
					<Dashboard />	
					</div>
				}
				/>
				<Route
				path="/analytics"
				element={
					<div className="flex w-full h-full bg-white text-black ">
                  <Sidebar />
				  <AnalyticsPage />
					</div>
					}
				/>
				<Route
				path="/products"
				element={
					<div className="flex w-full h-full bg-white text-black">
                  <Sidebar />
				  <ProductsPage />
					</div>
					}
				/>
				<Route
				path="/users"
				element={
					<div className="flex w-full h-full bg-white text-black">
                  <Sidebar />
				  <UsersPage />
					</div>
					}
				/>
				<Route
				path="/orders"
				element={
					<div className="flex w-full h-full bg-white text-black">
                  <Sidebar />
				  <OrdersPage />
					</div>
					}
				/>
				<Route
				path="/settings"
				element={
					<div className="flex w-full h-full bg-white text-black">
                  <Sidebar />
				  <SettingsPage />
					</div>
					}
				/>
               </Routes>
			</div>
		
	);
};
>>>>>>> f5d158f (initial commit)

export default App;
