import { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
	return (
		<Fragment>
			<ToastContainer />
			<header>
				<Navbar />
			</header>
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
