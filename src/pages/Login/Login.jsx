import { useForm } from 'react-hook-form';
import login from '../../assets/images/login.jpg';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signIn, googleSignIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';
	const [show, setShow] = useState(false);
	const [error, setError] = useState();

	const handleLogin = (data) => {
		if (data.password !== data.password) {
			alert('Incorrect password');
			return;
		}
		signIn(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Your work has been saved',
					showConfirmButton: false,
					timer: 1500,
				});
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				console.log(result);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Login successfully done',
					showConfirmButton: false,
					timer: 1500,
				});
				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};

	const validatePassword = (value) => {
		let isValid = true;

		if (value.length < 6) {
			isValid = false;
			return 'Password must have at least 6 characters';
		}

		if (!/[A-Z]/.test(value)) {
			isValid = false;
			return 'Password must contain at least one capital letter';
		}

		if (!/[!@#$%^&*]/.test(value)) {
			isValid = false;
			return 'Password must contain at least one special character';
		}

		return isValid;
	};

	return (
		<section>
			<div className='flex flex-col items-center justify-center h-screen font-roboto '>
				<div className='bg-white w-full p-8 rounded shadow flex items-center'>
					<div className='w-1/2'>
						<img
							src={login}
							alt='Site Logo'
							className='mx-auto w-full rounded-2xl'
						/>
					</div>
					<div className='w-1/2 pl-6'>
						<h2 className='text-2xl text-center font-bold mb-4'>Login</h2>
						<form
							className='w-3/4 mx-auto shadow-xl px-6 py-10 rounded'
							onSubmit={handleSubmit(handleLogin)}>
							<div className='mb-4'>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-700 '>
									Email
								</label>
								<input
									type='text'
									placeholder='email'
									className='w-full mb-2 px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-indigo-500 border-b-4 border-b-orange-500'
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address',
										},
									})}
								/>
								{errors.email && <span>{errors.email.message}</span>}
							</div>
							<div className='mb-4'>
								<label
									htmlFor='password'
									className='block mb-2 text-sm font-medium text-gray-700'>
									Password
								</label>
								<input
									placeholder='password'
									className='w-full mb-2 px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-indigo-500 border-b-4 border-b-orange-500'
									type={show ? 'text' : 'password'}
									{...register('password', {
										required: 'Password is required',
										validate: validatePassword,
									})}
								/>
								<p className='text-red-500 text-lg'>{error}</p>
								{errors.password && <span>{errors.password.message}</span>}{' '}
								<br />
								<span>
									<input
										className='mr-2'
										onChange={() => setShow(!show)}
										type='checkbox'
										name=''
										id=''
									/>
									Check password
								</span>
							</div>
							<button
								type='submit'
								className='w-full py-2 px-4 border rounded-md shadow-sm bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition duration-300'>
								Login
							</button>

							<div className='py-6'>
								<Link onClick={handleGoogleSignIn}>
									<span className='flex gap-4 justify-center bg-[#2B2A4C] p-3 text-white rounded-md'>
										<FcGoogle className='text-2xl' />
										<p>with google sign in</p>
									</span>
								</Link>
							</div>
							<p>
								Do not have an account ? <Link to='/signup'>Sign up</Link>{' '}
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
