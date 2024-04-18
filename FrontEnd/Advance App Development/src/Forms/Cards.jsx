import { Link } from "react-router-dom";

const data = [
	{
		name: "Mina",
		location: "Brazil",
		Number: "123456789",
		Email: "tielo@aba.gr",
		courses: "66",
	},
	{
		name: "Hunter",
		location: "Brazil",
		Number: "123456789",
		Email: "tielo@aba.gr",
		courses: "66",
	},
	{
		name: "Andrew",
		location: "Brazil",
		Number: "123456789",
		Email: "tielo@aba.gr",
		courses: "66",
	},
	{
		name: "Billy",
		location: "Brazil",
		Number: "123456789",
		Email: "tielo@aba.gr",
		courses: "66",
	},
	{
		name: "Emily",
		location: "Brazil",
		Number: "123456789",
		Email: "tielo@aba.gr",
		courses: "66",
	},
];

const Cards = () => {
	return (
		<div className="bg-white">
			<div className="flex justify-center">
				<input
					className="m-4 rounded-lg shadow-md p-2 outline-none"
					placeholder="search"
				></input>
			</div>
			<div className="flex justify-around  flex-wrap h-[100%] py-10">
				<div className="bg-[#e5e7eb] h-[370px] w-[350px] m-4 rounded-lg">
					<div className="bg-gray-200 m-2 h-3/6 rounded-lg shadow-lg">img</div>
					<div className="font-bold m-2">Details</div>
					<div className="font-medium text-gray-700 m-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
						rerum omnis nobis corporis{" "}
					</div>
					<div className="flex justify-end m-2">
						<button className="bg-red-400 rounded-lg h-[40px] w-[70px]">
							Enroll
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
