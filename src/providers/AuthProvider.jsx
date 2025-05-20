import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";

const AuthProvider = ({ children }) => {
	const providerValue = useAuth();
	return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
