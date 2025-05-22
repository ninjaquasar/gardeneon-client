import TipsTable from "../components/browse_tips/TipsTable";

const BrowseTipsPage = () => {
	return (
		<main className="max-w-7xl mx-auto pt-12 space-y-16">
			<h2 className="text-4xl font-bold text-center uppercase text-primary">
				📖 Browse Tips
			</h2>
			<TipsTable />
		</main>
	);
};

export default BrowseTipsPage;
