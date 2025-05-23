import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import ShareTipPage from "../pages/ShareTipPage";
import BrowseTipsPage from "../pages/BrowseTipsPage";
import TipDetails from "../pages/TipDetails";
import ExploreGardeners from "../pages/ExploreGardeners";

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
				path: "/gardeners",
				Component: ExploreGardeners,
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
			{
				path: "/tip/:id",
				Component: TipDetails,
				loader: () => fetch("http://localhost:5100/tips"),
			},
		],
	},
]);

export default router;
