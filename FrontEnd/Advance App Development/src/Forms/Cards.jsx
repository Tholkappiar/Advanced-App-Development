import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_ENDPOINTS } from "../utils/Constants";

const Cards = () => {
	const [collegeData, setCollegeData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axiosInstance.get(
				API_ENDPOINTS.collegeController.getAllColleges
			);
			console.log(data);
			setCollegeData(data);
		};
		fetchData();
	}, []);

	return (
		<div className="bg-white">
			<div className="flex justify-center">
				<input
					className="m-4 rounded-lg shadow-md p-2 outline-none"
					placeholder="search"
				></input>
			</div>
			<div className="flex flex-wrap w-10/12 mx-auto">
				{collegeData.map((college) => (
					<div
						key={college.id}
						className="flex justify-around  flex-wrap h-[100%] py-10"
					>
						<div className="bg-[#F9F5EB] h-[360px] w-[330px] m-4 rounded-lg">
							<div className="bg-gray-200 m-2 h-3/6 rounded-lg shadow-lg">
								img
							</div>
							<div className="font-bold m-2">{college.collegeName}</div>
							<div className="font-medium text-gray-700 m-2">
								{college.courses}
							</div>
							<div className="font-medium text-gray-700 m-2">
								{college.addr}
							</div>
							{/* <div className="font-medium text-gray-700 m-2">
								{college.Number}
							</div> */}
							<div className="flex justify-end">
								<Link to={`/form/${college.collegeName}/${college.courses}`}>
									<button className="bg-red-400 rounded-lg h-[30px] w-[60px] m-2">
										Enroll
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;
