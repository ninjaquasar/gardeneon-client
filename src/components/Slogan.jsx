import { Typewriter } from "react-simple-typewriter";

const Slogan = () => {
	return (
		<h2 className="text-4xl font-bold text-center mt-4 text-dark/70 dark:text-light/70">
			<Typewriter
				words={[
					"Your Gardening Guide, Powered by Community.",
					"Share Tips and Grow Together",
				]}
				typeSpeed={75}
				cursor={true}
				cursorBlinking={true}
				cursorColor="var(--color-primary)"
				loop={true}
			></Typewriter>
		</h2>
	);
};

export default Slogan;
