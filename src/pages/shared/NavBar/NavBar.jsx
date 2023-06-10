import ActiveLink from '../../../components/ActiveLink';
import useAuth from '../../../hook/useAuth';

const NavBar = () => {
	const { user, logOut } = useAuth();
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};
	const navItem = (
		<div className='md:flex gap-10 items-center font-mono'>
			<li className='bg-none'>
				<ActiveLink to='/'>Home</ActiveLink>
			</li>
			<li>
				<ActiveLink to='/instructor'>Instructors</ActiveLink>
			</li>
			<li>
				<ActiveLink className='' to='/dashboard/manageclasses'>
					Classes
				</ActiveLink>
			</li>
			{user ? (
				<>
					<li>
						<ActiveLink className='' to='/dashboard'>
							Dashboard
						</ActiveLink>
					</li>
					<div
						className='avatar ml-3 tooltip flex items-center mgap-5 tooltip-bottom tooltip-secondary'
						data-tip={user.displayName}>
						<div className='w-10 rounded-full cursor-pointer ring ring-primary ring-offset-base-100 ring-offset-2'>
							<img src={user.photoURL} />
						</div>
					</div>
					<ActiveLink>
						<button onClick={handleLogOut} className=''>
							Logout
						</button>
					</ActiveLink>
				</>
			) : (
				<li>
					<ActiveLink className='' to='/login'>
						Login
					</ActiveLink>
				</li>
			)}
		</div>
	);

	return (
		<div className='navbar fixed z-10 bg-opacity-100 px-3 bg-[#2B2A4C] justify-center md:text-white '>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
						{navItem}
					</ul>
				</div>
				<a className='normal-case rounded'>
					{/* <img className='w-20' src={logo} alt='' /> */}
					<h2>
						<span className='text-2xl mr-2 text-white'>DANCE</span>
						<span className='text-blue-600 font-bold'>STUDIO</span>
					</h2>
				</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='flex gap-5 menu-horizontal px-1'>{navItem}</ul>
			</div>
		</div>
	);
};

export default NavBar;
