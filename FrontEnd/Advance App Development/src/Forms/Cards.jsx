const Cards = () => {
	return (
		<div className="flex bg-gray-300 w-5/12 justify-around rounded-lg shadow-lg">
			<div className="mt-2 flex flex-col justify-between">
				<div className="bg-green-300 h-16 w-16">img</div>
				<button className="bg-blue-300 rounded-lg m-2 p-3 font-semibold">
					Enroll
				</button>
			</div>
			<div className="mt-2 font-semibold">
				<p className="mb-2">College Name</p>
				<p className="mb-2">Location</p>
				<p className="mb-2">Number</p>
				<p className="mb-2">Description</p>
				<p className="mb-2">Email</p>
				<p className="mb-2">Courses</p>
			</div>
		</div>
	);
};

export default Cards;
