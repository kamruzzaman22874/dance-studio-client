import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorNav = () => {
	return (
		<div className='mt-8  text-white shadow-xl p-8 h-full w-full'>
			<h2 className="flex items-center gap-2 text-md font-mono mb-3"> <FaHome/> Instructor Home</h2>
			<div className='bg-[#116A7B] mb-2 px-4 py-2 text-center rounded hover:bg-[#090580] border-b-4 border-b-[#090580] hover:border-b-orange-400'>
				<Link
					className='text-xl font-semibold '
					to='/dashboard/instructor-addclass'>
					Add a Class
				</Link>
			</div>
			<br />
			<div className='bg-[#116A7B] px-4 py-2 w-full text-center rounded hover:bg-[#090580] border-b-4 border-b-[#090580] hover:border-b-orange-400'>
				<Link to='/dashboard/myclass' className='text-xl font-semibold'>
					My Class
				</Link>
			</div>
			<br />
		</div>
	);
};

export default InstructorNav;
