import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import {}

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
// import UserGrowthChart from "../components/users/UserGrowthChart";
// import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
// import UserDemographicsChart from "../components/users/UserDemographicsChart";

const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

const UsersPage = () => {
	const [isOpen, setIsOpen] = useState(false);


	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />
			<div className='flex px-8 justify-end'>
				<button
					onClick={() => setIsOpen(true)}
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					Create Client
				</button>

				{/* <button className="bg-red-700 p-2"></button> */}
			</div>
			{isOpen && (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
				<div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6 text-white">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-semibold">Create Client</h2>
						<button
						onClick={() => setIsOpen(false)}
						className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
						>
						{/* <FiX size={20} /> */}Close
						</button>
					</div>


				</div>
			</div>
			)}

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Users'
						icon={UsersIcon}
						value={userStats.totalUsers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
					<StatCard
						name='Active Users'
						icon={UserCheck}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
				</motion.div>

				<UsersTable />

				{/* USER CHARTS 
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>*/}
			</main>
		</div>
	);
};
export default UsersPage;
