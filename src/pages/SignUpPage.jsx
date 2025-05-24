import { Zoom } from "react-awesome-reveal";
import SignUpCard from "../components/cards/SignUpCard";

const SignUpPage = () => {
	return (
		<main className="py-8">
			<Zoom duration={500}>
				<SignUpCard />
			</Zoom>
		</main>
	);
};

export default SignUpPage;
