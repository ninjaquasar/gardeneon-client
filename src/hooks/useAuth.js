import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const useAuth = () => {
	// Login user with Google
	const googleLogin = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	// Login user with password
	const passwordLogin = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	return { googleLogin, passwordLogin };
};

export default useAuth;
