import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "MNEB",  price: 1250, stock: 1200, sales: 1142 },
	{ id: 2, name: "Custom Roast", price: 1150, stock: 1110, sales: 1060 },
	{ id: 3, name: "PLB", price: 1200, stock: 1150, sales: 1100 },
	{ id: 4, name: "RCA",  price: 990, stock: 910, sales: 870 },
	{ id: 5, name: "Monsoon",  price: 1250, stock: 1250, sales: 1100 },
	{ id: 5, name: "Mandheling", price: 3000, stock: 2650, sales: 2600 },
	{ id: 5, name: "Decaf",  price: 2200, stock: 2050, sales: 2000 },
	{ id: 5, name: "Gemblary",  price: 1200, stock: 1090, sales: 1040 },
	{ id: 5, name: "Cask",  price: 1400, stock: 1210, sales: 1160 },
	{ id: 5, name: "ACA",  price: 1150, stock: 1090, sales: 1040 },
	{ id: 5, name: "HBE(40/60)", price: 1025, stock: 1000, sales: 950 },
	{ id: 5, name: "HBE(50/50)", price: 1050, stock: 1000, sales: 980 },
	{ id: 5, name: "Custom Roast ACA ", price: 1100, stock: 1050, sales: 1000 },
	{ id: 5, name: "Cask Whiskey ", price: 1100, stock: 1050, sales: 1000 },
	{ id: 5, name: "Cask RUM ", price: 1400, stock: 1210, sales: 1160 },
];

const ProductsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	return (
		<motion.div
			className='p-6 mb-8 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-md rounded-xl'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='py-2 pl-10 pr-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Name
							</th>
							
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Ask Price
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Last
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Bulk
							</th>
							
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredProducts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap'>
									<img
										src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
										alt='Product img'
										className='rounded-full size-10'
									/>
									{product.name}
								</td>

								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>
									₹{product.price.toFixed(2)}
								</td>
								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>{product.stock}</td>
								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>{product.sales}</td>
								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>
									<button className='mr-2 text-indigo-400 hover:text-indigo-300'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
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
export default ProductsTable;
