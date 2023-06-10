import { Link } from 'react-router-dom';
import { BiUserCheck, BiAlignJustify } from 'react-icons/bi';

const AdminNav = () => {
	return (
		<>
			<li>
				<a
					rel='noopener noreferrer'
					href='#'
					className='flex items-center p-2 space-x-3 rounded-md'>
					<BiAlignJustify />
					<Link className='' to='/dashboard/manageclasses'>
						Manage Classes
					</Link>
				</a>
			</li>
			<li>
				<a
					rel='noopener noreferrer'
					href='#'
					className='flex items-center p-2 space-x-3 rounded-md'>
					<BiUserCheck className='text-xl' />
					<Link to='/dashboard/manageusers'>Manage Users</Link>
				</a>
			</li>

			<br />
		</>
	);
};

export default AdminNav;
