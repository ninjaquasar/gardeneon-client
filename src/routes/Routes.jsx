import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "/login",
				Component: LoginPage,
			},
			{
				path: "/signup",
				Component: SignUpPage,
			},
		],
	},
]);

export default router;
