import { useEffect, useState } from "react";

const ToggleTheme = () => {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.setAttribute("data-theme", savedTheme);
		}
	}, []);
	const handleToggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
	};
	const ThemeIcon = () => {
		return <h4 className="text-3xl">{theme === "light" ? "🌑" : "☀️"}</h4>;
	};
	return (
		<div className="flex items-center">
			<button
				type="button"
				className="cursor-pointer"
				onClick={handleToggle}
			>
				<ThemeIcon />
			</button>
		</div>
	);
};

export default ToggleTheme;
