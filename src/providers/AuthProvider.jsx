import { useState } from 'react';
import { createContext } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import axios from 'axios';
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState('');
	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			// console.log(currentUser);
			// get and set token

			if (currentUser) {
				axios.post('https://dance-studio-server-kamruzzaman22874.vercel.app/jwt', { email: currentUser?.email })
					.then((data) => {
						// setToken(data.data.token);
						if (data?.data) {
							localStorage.setItem('access_token', data?.data?.token);
							setToken(data);
							setLoading(false);
						}
					});
			} else {
				localStorage.removeItem('access_token');
				setLoading(false);
			}
		});
		return () => {
			return unsubscribe();
		};
	}, []);
	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		googleSignIn,
		logOut,
		updateUserProfile,
		token,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
