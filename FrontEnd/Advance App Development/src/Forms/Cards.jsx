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
		<div className="flex justify-around bg-[#F9F5EB] flex-wrap h-[100vh] py-10">
			{data.map((college) => (
				<div
					key={college.name}
					className="flex bg-gray-300 rounded-lg items-center shadow-lg m-4 min-w-[295px] mobileS:w-[455px] flex-col mobileS:flex-row h-[300px]"
				>
					<div className="flex flex-col justify-between items-center m-4 w-6/12">
						<img
							src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D"
							className="rounded-lg object-cover  w-11/12"
						/>
						<Link
							to={"/form"}
							className="bg-[#EA5455] rounded-lg m-2 p-3 font-semibold w-20"
						>
							Enroll
						</Link>
					</div>
					<div className="text-sm font-semibold text-center mobileS:text-start m-4 mt-0 mobileS:mt-4 flex flex-col w-6/12">
						<p className="mb-2">{college.name}</p>
						<p className="mb-2">{college.location}</p>
						<p className="mb-2">{college.Number}</p>
						<p className="mb-2">{college.Email}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cards;
