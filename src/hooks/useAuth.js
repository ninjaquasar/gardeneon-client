import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const useAuth = () => {
	// Login user
	const loginUser = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	return { loginUser };
};

export default useAuth;
