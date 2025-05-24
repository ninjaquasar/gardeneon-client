import { Typewriter } from "react-simple-typewriter";

const Slogan = () => {
	return (
		<h2 className="text-4xl font-bold text-center mt-4 text-dark/70">
			<Typewriter
				words={[
					"Your Gardening Guide, Powered by Community.",
					"Share Tips and Grow Together",
				]}
			></Typewriter>
		</h2>
	);
};

export default Slogan;
