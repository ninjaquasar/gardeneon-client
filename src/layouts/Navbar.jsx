import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import ToggleTheme from "../components/ToggleTheme";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { user, logout } = useAuth();
	const [showUsername, setShowUsername] = useState(false);
	const [showLogoutBtn, setShowLogoutBtn] = useState(false);
	const handleLogout = () => {
		logout();
	};
	return (
		<nav className="px-6 lg:px-32 xl:px-20 2xl:px-32 py-4 flex items-center justify-between border-b border-b-stone-100">
			{/* Side menu */}
			<div className="md:hidden relative">
				<h3
					className="text-3xl font-semibold hover:text-primary rounded-full cursor-pointer"
					onClick={() => setShowMenu(!showMenu)}
				>
					{showMenu ? "⤫" : "🗐"}
				</h3>
				<ul
					className={`w-48 ${
						showMenu ? "absolute" : "hidden"
					} top-12 left-0 py-3 bg-stone-100 rounded-2xl space-y-4 z-10`}
				>
					<div className="space-y-1">
						<li>
							<NavLink
								to="/"
								className="pl-4 py-1 rounded-sm border-s-2 border-transparent hover:border-s-primary"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/gardeners"
								className="pl-4 py-1 rounded-sm border-s-2 border-transparent hover:border-s-primary"
							>
								Explore Gardeners
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/tips"
								className="pl-4 py-1 rounded-sm border-s-2 border-transparent hover:border-s-primary"
							>
								Browse Tips
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/tip/create"
								className="pl-4 py-1 rounded-sm border-s-2 border-transparent hover:border-s-primary"
							>
								Share Garden Tip
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/my-tips"
								className="pl-4 py-1 rounded-sm border-s-2 border-transparent hover:border-s-primary"
							>
								My Tips
							</NavLink>
						</li>
					</div>
					<div className="flex flex-col gap-y-2 pl-4">
						<NavLink to="/login">
							<button
								type="button"
								className="px-5 py-2 bg-primary text-light hover:bg-primary/90 font-bold rounded-lg cursor-pointer"
							>
								Login
							</button>
						</NavLink>
						<NavLink to="/signup">
							<button
								type="button"
								className="px-5 py-2 bg-primary text-light hover:bg-primary/90 font-bold rounded-lg cursor-pointer"
							>
								Sign Up
							</button>
						</NavLink>
					</div>
				</ul>
			</div>
			{/* Left-aligned Logo */}
			<NavLink>
				<div className="flex items-center gap-x-2 md:gap-x-3">
					<img
						src={Logo}
						alt="Logo"
						className="size-8 md:size-10"
					/>
					<h3 className="text-2xl md:text-3xl font-extrabold">Gardeneon</h3>
				</div>
			</NavLink>
			{/* Centered-aligned Links */}
			<div>
				<ul className="hidden md:flex items-center gap-x-1 font-medium">
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
							to="/tips"
							className="px-3 py-2 rounded-md hover:bg-stone-100/80"
						>
							Browse Tips
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/tip/create"
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
			{/* Right-aligned Buttons and User info */}
			{user ? (
				<div className="hidden md:flex items-center gap-x-4 relative">
					<img
						src={
							user.photoURL
								? user.photoURL
								: "https://cdn-icons-png.flaticon.com/128/4943/4943065.png"
						}
						alt="Profile Picture"
						className="size-12 object-cover object-center rounded-full border border-primary cursor-pointer"
						onMouseOver={() => setShowUsername(showLogoutBtn ? false : true)}
						onMouseOut={() => setShowUsername(false)}
						onClick={() => setShowLogoutBtn(!showLogoutBtn)}
					/>
					<p
						className={`px-3 py-1 bg-primary rounded-md font-semibold text-light ${
							showUsername ? "absolute top-13 -left-5" : "hidden"
						} z-10`}
					>
						{user.fullName ? user.fullName : "Unknown"}
					</p>
					<button
						type="button"
						className={`px-4 py-2 bg-primary text-light hover:bg-[#509000] font-bold rounded-lg cursor-pointer ${
							showLogoutBtn ? "absolute top-13 left-0" : "hidden"
						} z-20`}
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			) : (
				<div className="hidden md:flex items-center gap-x-4">
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
					<ToggleTheme />
				</div>
			)}
		</nav>
	);
};

export default Navbar;
