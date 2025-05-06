import { CheckCircle, Clock, IndianRupee, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const orderStats = {
	totalOrders: "350",
	pendingOrders: "25",
	completedOrders: "190",
	totalRevenue: "₹8,7655",
};

const OrdersPage = () => {
	return (
		<div className='relative z-10 flex-1 overflow-auto'>
			<Header title={"*Orders Dummy Data"} />

			<main className='px-4 py-6 mx-auto max-w-7xl lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Avg Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
					<StatCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
					<StatCard
						name='Completed Orders'
						icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#10B981'
					/>
					<StatCard name='Total Revenue' icon={IndianRupee} value={orderStats.totalRevenue} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />
			</main>
		</div>
	);
};
export default OrdersPage;
