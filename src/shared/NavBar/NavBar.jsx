import { Link } from "react-router-dom";
import ActiveLink from "../../components/ActiveLink";

const NavBar = () => {
	const navItem = (
		<>
			<li className='bg-none'>
				<ActiveLink to='/'>Home</ActiveLink>
			</li>
			<li>
				<ActiveLink to='/menu'>Our menu</ActiveLink>
			</li>
			<li>
				<ActiveLink className='' to='/order/salad'>
					Order Food
				</ActiveLink>
			</li>
			<li>
				<Link to='/dashboard/mycart'>
					<button className='btn gap-2'>
						<FaShoppingCart />
						<span className='badge badge-secondary'>+ {cart.length || 0}</span>
					</button>
				</Link>
			</li>
			{user ? (
				<>
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
		<div className='navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl mx-auto text-white '>
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
				<a className='btn btn-ghost normal-case text-xl'>
					Awesome <br /> Restaurant
				</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='flex gap-5 menu-horizontal px-1'>{navItem}</ul>
			</div>
			<div className='navbar-end'>
				<a className='btn'>Get started</a>
			</div>
		</div>
	);
};

export default NavBar;
