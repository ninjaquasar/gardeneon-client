import { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const RootLayout = () => {
	return (
		<Fragment>
			<header>
				<Navbar />
			</header>
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
