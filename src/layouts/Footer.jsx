import Logo from "../assets/logo.png";

const Footer = () => {
	return (
		<footer className="mt-24 p-32 bg-dark text-light flex justify-between">
			{/* Logo */}
			<div className="space-y-3">
				<div className="flex items-center gap-x-3 cursor-default">
					<img
						src={Logo}
						alt="Logo"
						className="size-10"
					/>
					<h3 className="text-3xl font-extrabold">Gardeneon</h3>
				</div>
				<p className="w-3/4 font-medium">Your Gardening Guide, Powered By Community.</p>
			</div>
			{/* Contact info */}
			<div className="space-y-2">
				<h5 className="text-xl font-bold text-stone-300">Contact</h5>
				<ul className="space-y-1 text-lg">
					<li>Horogram Bazar, Rajshahi, Rajshahi 6201</li>
					<li>promahnaf@gmail.com</li>
					<li>+880-1710-243940</li>
				</ul>
			</div>
			{/* Legal links */}
			<div className="space-y-2">
				<h5 className="text-xl font-bold text-stone-300">Legal</h5>
				<ul className="space-y-1 text-lg">
					<li>
						<a
							href="https://en.wikipedia.org/wiki/Terms_of_service"
							target="_blank"
							className="hover:text-primary transition-colors duration-100"
						>
							Terms and Conditions
						</a>
					</li>
					<li>
						<a
							href="https://en.wikipedia.org/wiki/Privacy_policy"
							target="_blank"
							className="hover:text-primary transition-colors duration-100"
						>
							Privacy Policy
						</a>
					</li>
					<li>
						<a
							href="https://en.wikipedia.org/wiki/Deposit-refund_system"
							target="_blank"
							className="hover:text-primary transition-colors duration-100"
						>
							Refund Policy
						</a>
					</li>
				</ul>
			</div>
			{/* Social links */}
			<div className="space-y-2">
				<h5 className="text-xl font-bold text-stone-300">Social</h5>
				<ul className="flex gap-x-4">
					<li>
						<a
							href="https://www.linkedin.com/in/riaurko"
							target="_blank"
						>
							<img
								src="https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/id745SkyD0.svg?c=1dxbfHSJFAPEGdCLU4o5B"
								alt="LinkedIn"
								className="size-8"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/ninjaquasar"
							target="_blank"
						>
							<img
								src="https://cdn.brandfetch.io/idZAyF9rlg/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
								alt="GitHub"
								className="size-8"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/ninjaquasar"
							target="_blank"
						>
							<img
								src="https://cdn.brandfetch.io/idpKX136kp/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
								alt="Facebook"
								className="size-8"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com/@ninjaquasar"
							target="_blank"
						>
							<img
								src="https://cdn.brandfetch.io/idVfYwcuQz/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
								alt="YouTube"
								className="size-8"
							/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
