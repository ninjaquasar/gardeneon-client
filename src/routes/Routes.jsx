import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import ShareTipPage from "../pages/ShareTipPage";
import BrowseTipsPage from "../pages/BrowseTipsPage";

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
			{
				path: "/browse-tips",
				Component: BrowseTipsPage,
				loader: () => fetch("http://localhost:5100/tips"),
			},
			{
				path: "/share-tip",
				Component: ShareTipPage,
			},
		],
	},
]);

export default router;
