import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? 'hover:bg-slate-800 p-2 rounded border-0 border-b-4' : ''
			}>
			{children}
		</NavLink>
	);
};

export default ActiveLink;
