// import white_logo from "../../assets/images/white-logo.png";

const Footer = () => {
	return (
		<div className="bg-gray-800 flex justify-around p-8 mt-8">
			<div>
				<span className="text-gray-400 font-semibold pr-2 text-center">
					@2024
				</span>
				<span className="text-white  font-bold">EdugateWay</span>
			</div>
			<div className="flex text-yellow-300 flex-col md:flex-row">
				<div>Youtube</div>
				<div>Instagram</div>
				<div>Facebook</div>
			</div>
		</div>
	);
};

export default Footer;
