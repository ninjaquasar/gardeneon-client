import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import ShareTipPage from "../pages/ShareTipPage";
import BrowseTipsPage from "../pages/BrowseTipsPage";
import TipDetails from "../pages/TipDetails";
import ExploreGardeners from "../pages/ExploreGardeners";
import UpdateTip from "../pages/UpdateTip";
import PrivateRoute from "./PrivateRoute";

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
				path: "/tips",
				Component: BrowseTipsPage,
				loader: () => fetch("https://a10-gardeneon-server.vercel.app/tips"),
			},
			{
				path: "/tip/create",
				element: (
					<PrivateRoute>
						<ShareTipPage></ShareTipPage>
					</PrivateRoute>
				),
			},
			{
				path: "/tip/details/:id",
				element: (
					<PrivateRoute>
						<TipDetails></TipDetails>
					</PrivateRoute>
				),
				loader: () => fetch(`https://a10-gardeneon-server.vercel.app/tips`),
			},
			{
				path: "/tip/update/:id",
				element: (
					<PrivateRoute>
						<UpdateTip></UpdateTip>
					</PrivateRoute>
				),
				loader: () => fetch(`https://a10-gardeneon-server.vercel.app/tips`),
			},
		],
	},
]);

export default router;
