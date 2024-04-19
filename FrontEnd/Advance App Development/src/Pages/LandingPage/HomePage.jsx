import Banner from "./Banner";
import Cloud from "./Clouds";
import Hero from "./Hero";
// import Stats from "./Stats";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import { useEffect } from "react";
import { API_BASE_URL, API_ENDPOINTS } from "../../utils/Constants";
import axios from "axios";

const HomePage = () => {
	useEffect(() => {
		const fetachData = async () => {
			const { data } = await axios.get(
				API_BASE_URL + API_ENDPOINTS.userController.getAllSignups
			);
			console.log(data);
		};
		fetachData();
	}, []);
	return (
		<div>
			<Banner />
			<Hero />
			{/* <Stats /> */}
			<ContentSection />
			<Cloud />
			<Footer />
		</div>
	);
};

export default HomePage;
