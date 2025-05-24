import { Zoom } from "react-awesome-reveal";
import LoginCard from "../components/cards/LoginCard";

const LoginPage = () => {
	return (
		<main className="py-8">
			<Zoom duration={500}>
				<LoginCard />
			</Zoom>
		</main>
	);
};

export default LoginPage;
