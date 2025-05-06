import Header from "../components/common/Header";
import Profile from "../components/about/Profile";


const About = () => {
	return (
		<div className='relative z-10 flex-1 overflow-auto bg-gray-900'>
			<Header title='About' />
			<main className='max-w-4xl px-4 py-6 mx-auto lg:px-8'>
				<Profile />
				
			</main>
		</div>
	);
};
export default About;
