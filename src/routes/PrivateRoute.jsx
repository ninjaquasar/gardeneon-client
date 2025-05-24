import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	if (loading) return <h3 className="text-3xl font-bold text-center mt-16">LOADING...</h3>;
	if (!user) return <Navigate to="/login"></Navigate>;
	return children;
};

export default PrivateRoute;
