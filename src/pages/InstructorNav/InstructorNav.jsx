import { Link } from 'react-router-dom';

const InstructorNav = () => {
	return (
		<div className='mt-12 bg-[#116A7B] text-white shadow-xl p-8'>
			<Link
				className='text-xl font-semibold'
				to='/dashboard/instructor-addclass'>
				Add a Class
			</Link>
			<br />
			<Link className='text-xl font-semibold'>My Class</Link> <br />
			<Link to='/' className='text-xl font-semibold'>
				Home
			</Link>
		</div>
	);
};

export default InstructorNav;
