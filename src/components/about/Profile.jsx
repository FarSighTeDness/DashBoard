import { Info} from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={Info} title={'The best way to predict the future is to create it --- '}>
			
				

				<div>
					<h3 className='w-full italic font-semibold text-md text-gray-60'> Mr. Mrinmoy Smanata</h3>
					
				</div>
			

			<button className='w-full px-4 py-2 text-white transition duration-200 '>
				App <br/> v 2. 4. 7
			</button>
		</SettingSection>
	);
};
export default Profile;
