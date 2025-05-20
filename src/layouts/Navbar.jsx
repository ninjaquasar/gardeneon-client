import { NavLink } from "react-router";
import Logo from "../assets/logo.png";

const Navbar = () => {
	return (
		<nav className="px-32 py-4 flex items-center justify-between border-b border-b-stone-100">
			{/* Left-aligned Logo */}
			<NavLink>
				<div
					id="nav-logo"
					className="flex items-center gap-x-3"
				>
					<img
						src={Logo}
						alt="Logo"
						className="size-10"
					/>
					<h3 className="text-3xl font-extrabold">Gardeneon</h3>
				</div>
			</NavLink>
			{/* Centered-aligned Links */}
			<div>
				<ul className="flex items-center gap-x-1 font-medium">
					<li>
						<NavLink
							to="/"
							className="px-3 py-2 rounded-md hover:bg-stone-100/80"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/gardeners"
							className="px-3 py-2 rounded-md hover:bg-stone-100/80"
						>
							Explore Gardeners
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/browse-tips"
							className="px-3 py-2 rounded-md hover:bg-stone-100/80"
						>
							Browse Tips
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/share-tip"
							className="px-3 py-2 rounded-md hover:bg-stone-100/80"
						>
							Share Garden Tip
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/my-tips"
							className="px-3 py-2 rounded-md hover:bg-stone-100/80"
						>
							My Tips
						</NavLink>
					</li>
				</ul>
			</div>
			{/* Right-aligned Buttons */}
			<div className="flex items-center gap-x-4">
				<NavLink to="/login">
					<button
						type="button"
						className="px-5 py-2 bg-primary text-light hover:bg-primary/90 text-lg font-bold rounded-lg cursor-pointer"
					>
						Login
					</button>
				</NavLink>
				<NavLink to="/signup">
					<button
						type="button"
						className="px-5 py-2 bg-primary text-light hover:bg-primary/90 text-lg font-bold rounded-lg cursor-pointer"
					>
						Sign Up
					</button>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
