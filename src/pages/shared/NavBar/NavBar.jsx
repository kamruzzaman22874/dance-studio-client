import ActiveLink from '../../../components/ActiveLink';
import logo from '../../../assets/images/logo.png';
import useAuth from '../../../hook/useAuth';

const NavBar = () => {
	const { user, logOut } = useAuth();
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};
	const navItem = (
		<>
			<li className='bg-none'>
				<ActiveLink to='/'>Home</ActiveLink>
			</li>
			<li>
				<ActiveLink to='/instructor'>Instructors</ActiveLink>
			</li>
			<li>
				<ActiveLink className='' to='/classes'>
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
						className='avatar tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary'
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
			{/* <li>
				<ActiveLink to='/contact'>Contact Us</ActiveLink>
			</li>
			<li>
				<ActiveLink to='/dashboard'>Dashboard</ActiveLink>
			</li>
			<li>
				<ActiveLink to='/shop'>Our Shop</ActiveLink>
			</li> */}
		</>
	);

	return (
		<div className='navbar fixed z-10 bg-opacity-100  bg-[#2B2A4C] justify-center text-white '>
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
				<a className='normal-case '>
					<img className='w-20 bg-white' src={logo} alt='' />
				</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='flex gap-5 menu-horizontal px-1'>{navItem}</ul>
			</div>
		</div>
	);
};

export default NavBar;
