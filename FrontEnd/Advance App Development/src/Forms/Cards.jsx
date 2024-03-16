const Cards = () => {
	return (
		<>
			<div className="flex justify-around">
				<div className="flex bg-gray-300 rounded-lg shadow-lg m-4 min-w-[295px] mobileL:w-[455px] flex-col mobileL:flex-row ">
					<div className="flex flex-col justify-between items-center m-4">
						<img
							src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D"
							className="rounded-lg object-cover h-auto w-9/12"
						/>
						<button className="bg-blue-300 rounded-lg m-2 p-3 font-semibold w-20">
							Enroll
						</button>
					</div>
					<div className="font-semibold m-4 mt-0 mobileL:mt-4 flex flex-col items-center text-center">
						<p className="mb-2">Sri Krisha College of Technology </p>
						<p className="mb-2">Location</p>
						<p className="mb-2">Number</p>
						<p className="mb-2">Description</p>
						<p className="mb-2">Email</p>
						<p className="mb-2">Courses</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
