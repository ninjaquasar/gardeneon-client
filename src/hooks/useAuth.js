import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useEffect, useState } from "react";

const useAuth = () => {
	// State of user
	const [user, setUser] = useState(null);
	// Login user with Google
	const googleLogin = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	// Login user with password
	const passwordLogin = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	// Sign up user
	const signUp = ({ email, password }) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// Logout user
	const logout = () => {
		return signOut(auth);
	};
	// User profile
	const getUserProfile = (currentUser) => {
		try {
			const userProfile = {
				fullName: currentUser.displayName,
				photoURL: currentUser.photoURL,
				email: currentUser.email,
			};
			setUser(userProfile);
		} catch {
			setUser(null);
		}
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			getUserProfile(currentUser);
		});
	}, []);
	return { googleLogin, passwordLogin, signUp, user, logout };
};

export default useAuth;
