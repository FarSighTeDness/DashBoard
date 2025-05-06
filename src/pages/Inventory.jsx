import Header from "../components/common/Header";

import OverviewCards from "../components/Inventory/OverviewCards";
import Inventoryfragmentatione from "../components/Inventory/Inventoryfragmentatione";
import ProductPerformance from "../components/Inventory/ProductPerformance";
import UserRetention from "../components/Inventory/UserRetention";


const Inventory = () => {
	return (
		<div className='relative z-10 flex-1 overflow-auto bg-gray-900'>
			<Header title={"*Inventory Dashboard Dummy Data"} />

			<main className='px-4 py-6 mx-auto max-w-7xl lg:px-8'>
				<OverviewCards />
				

				<div className='grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2'>
					<Inventoryfragmentatione />
					<ProductPerformance />
					<UserRetention />
					
				</div>

				
			</main>
		</div>
	);
};
export default Inventory;
