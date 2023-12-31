import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hook/useAuth';
import { FcGoogle } from 'react-icons/fc';
const SignUp = () => {
	const { createUser, updateUserProfile ,googleSignIn} = useAuth();
	const navigate = useNavigate();
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		createUser(data.email, data.password).then((result) => {
			const loggedUser = result.user;
			console.log(loggedUser);
			updateUserProfile(data.name, data.photo).then(() => {
        const saveUser = {
          name: data.name,
          email: data.email,
          image: data.photo,
        };
        fetch("https://dance-studio-server.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            navigate("/");
          });
      });
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

	return (
		<div className='flex justify-center items-center py-24'>
			<form
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='name'>
						Name
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 border-b-4 border-b-orange-500 ${
							errors.name ? 'border-red-500' : ''
						}`}
						type='text'
						placeholder='Name'
						{...register('name', { required: 'Name is required' })}
					/>
					{errors.name && (
						<p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
					)}
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'>
						Email
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 border-b-4 border-b-orange-500 ${
							errors.email ? 'border-red-500' : ''
						}`}
						type='email'
						placeholder='Email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						})}
					/>
					{errors.email && (
						<p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
					)}
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'>
						Photo Url
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 border-b-4 border-b-orange-500 ${
							errors.email ? 'border-red-500' : ''
						}`}
						type='text'
						placeholder='Phot Url'
						{...register('photo', {
							required: 'Photo is required',
						})}
					/>
					{errors.email && (
						<p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
					)}
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'>
						Password
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 border-b-4 border-b-orange-500 ${
							errors.password ? 'border-red-500' : ''
						}`}
						type='password'
						placeholder='Password'
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters long',
							},
							validate: (value) => {
								const hasUppercase = /[A-Z]/.test(value);
								const hasLowercase = /[a-z]/.test(value);
								const hasNumber = /\d/.test(value);
								const hasSpecialChar = /[!@#$%^&*]/.test(value);
								return (
									(hasUppercase &&
										hasLowercase &&
										hasNumber &&
										hasSpecialChar) ||
									'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
								);
							},
						})}
					/>
					{errors.password && (
						<p className='text-red-500 text-xs mt-1'>
							{errors.password.message}
						</p>
					)}
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='confirmPassword'>
						Confirm Password
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 border-b-4 border-b-orange-500 ${
							errors.confirmPassword ? 'border-red-500' : ''
						}`}
						type='password'
						placeholder='Confirm Password'
						{...register('confirmPassword', {
							required: 'Please confirm your password',
							validate: (value) =>
								value === watch('password') || 'Passwords do not match',
						})}
					/>
					{errors.confirmPassword && (
						<p className='text-red-500 text-xs mt-1'>
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'>
						Register
					</button>
				</div>
				<div className='py-6'>
								<Link onClick={handleGoogleSignIn}>
									<span className='flex gap-4 justify-center bg-[#2B2A4C] p-3 text-white rounded-md'>
										<FcGoogle className='text-2xl' />
										<p>with google sign in</p>
									</span>
								</Link>
							</div>
							
					<p className='text-center'>
						Already have an account ?
						<Link className='underline' to='/login'>
							Login
						</Link>
					</p>
			</form>
		</div>
	);
};

export default SignUp;
