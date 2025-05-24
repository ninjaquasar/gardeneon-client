import { Zoom } from "react-awesome-reveal";
import ShareTipCard from "../components/cards/ShareTipCard";

const ShareTipPage = () => {
	return (
		<main className="pt-12">
			<Zoom duration={650}>
				<ShareTipCard />
			</Zoom>
		</main>
	);
};

export default ShareTipPage;
