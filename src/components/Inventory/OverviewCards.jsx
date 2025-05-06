import { motion } from "framer-motion";
import { Weight,ArrowDownRight, ArrowUpRight, Package, Coffee, LucideCoffee } from "lucide-react";

const overviewData = [
	{ name: "Green Beans", value: "1500kg", change: 12.5, icon: Weight },
	{ name: "Roasted Beans", value: "800kg", change: 8.3, icon: LucideCoffee },
	{ name: "Instant Coffee", value: "22kg", change: -3.2, icon: Coffee },
	{ name: "Packing material", value: "OK", change: 15.7, icon: Package},
];

const OverviewCards = () => {
	return (
		<div className='grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
			{overviewData.map((item, index) => (
				<motion.div
					key={item.name}
					className='p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-filter backdrop-blur-lg rounded-xl '
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
							<p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
						</div>

						<div
							className={`
              p-3 rounded-full bg-opacity-20 ${item.change >= 0 ? "bg-green-500" : "bg-red-500"}
              `}
						>
							<item.icon className={`size-6  ${item.change >= 0 ? "text-green-500" : "text-red-500"}`} />
						</div>
					</div>
					<div
						className={`
              mt-4 flex items-center ${item.change >= 0 ? "text-green-500" : "text-red-500"}
            `}
					>
						{item.change >= 0 ? <ArrowUpRight size='20' /> : <ArrowDownRight size='20' />}
						<span className='ml-1 text-sm font-medium'>{Math.abs(item.change)}%</span>
						<span className='ml-2 text-sm text-gray-400'>vs last Month</span>
					</div>
				</motion.div>
			))}
		</div>
	);
};
export default OverviewCards;
