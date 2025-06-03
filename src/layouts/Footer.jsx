import Logo from "../assets/logo.png";

const Footer = () => {
	return (
		<footer className="mt-24 px-6 py-16 lg:p-32 bg-dark text-light dark:bg-light dark:text-dark flex flex-col lg:flex-row justify-between gap-y-6">
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
				<h5 className="text-xl font-bold text-stone-300 dark:text-stone-600">
					Contact
				</h5>
				<ul className="space-y-1 text-lg">
					<li>Horogram Bazar, Rajshahi, Rajshahi 6201</li>
					<li>promahnaf@gmail.com</li>
					<li>+880-1710-243940</li>
				</ul>
			</div>
			{/* Legal links */}
			<div className="space-y-2">
				<h5 className="text-xl font-bold text-stone-300 dark:text-stone-600">Legal</h5>
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
				<h5 className="text-xl font-bold text-stone-300 dark:text-stone-600">Social</h5>
				<ul className="flex gap-x-4">
					<li>
						<a
							href="https://www.linkedin.com/in/riaurko"
							target="_blank"
						>
							<img
								src="https://cdn-icons-png.flaticon.com/128/3992/3992606.png"
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
								src="https://cdn-icons-png.flaticon.com/128/11376/11376446.png"
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
								src="https://cdn-icons-png.flaticon.com/128/3955/3955013.png"
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
								src="https://cdn-icons-png.flaticon.com/128/10090/10090287.png"
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
