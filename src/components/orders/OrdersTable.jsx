import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
	{ id: "ORD001", customer: "Alma", total: 235.4, status: "Delivered", date: "2025-05-01" },
	{ id: "ORD002", customer: "108 life", total: 412.0, status: "Processing", date: "2025-5-02" },
	{ id: "ORD003", customer: "Caramelly", total: 162.5, status: "Shipped", date: "2025-05-03" },
	{ id: "ORD004", customer: "Green Build", total: 750.2, status: "Pending", date: "2025-05-04" },
	{ id: "ORD005", customer: "Agora", total: 95.8, status: "Delivered", date: "2025-05-05" },
	{ id: "ORD006", customer: "Landmark", total: 310.75, status: "Processing", date: "2025-05-06" },
	{ id: "ORD007", customer: "Aditta Pal", total: 528.9, status: "Shipped", date: "2025-05-07" },
	{ id: "ORD008", customer: "BCC", total: 189.6, status: "Delivered", date: "2025-05-08" },
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-md rounded-xl'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search orders...'
						className='py-2 pl-10 pr-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Order ID
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Customer
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Total
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Status
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Date
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-gray-700 divide'>
						{filteredOrders.map((order) => (
							<motion.tr
								key={order.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap'>
									{order.id}
								</td>
								<td className='px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap'>
									{order.customer}
								</td>
								<td className='px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap'>
									${order.total.toFixed(2)}
								</td>
								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Delivered"
												? "bg-green-100 text-green-800"
												: order.status === "Processing"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Shipped"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
								</td>
								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>{order.date}</td>
								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>
									<button className='mr-2 text-indigo-400 hover:text-indigo-300'>
										<Eye size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default OrdersTable;
