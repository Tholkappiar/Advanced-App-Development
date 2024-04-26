"use client";

import { Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_ENDPOINTS } from "../utils/Constants";

// eslint-disable-next-line react/prop-types
const DashBoardModal = ({ modalStatus, modalClose }) => {
	const [CollegeData, setCollegeData] = useState({
		collegeName: "",
		course: "",
		addr: "",
		mobile: "",
		email: "",
		collegeId: "",
	});

	// For storing the college data
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCollegeData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Submiting the college data
	const handleAddCollegeSubmit = async () => {
		const response = await axiosInstance.post(
			API_ENDPOINTS.collegeController.addCollege,
			CollegeData
		);
		if (response.status) {
			modalClose();
			window.location.reload();
		}
	};

	return (
		<Modal show={modalStatus} size="md" onClose={modalClose} popup>
			<Modal.Header />
			<Modal.Body>
				<div className="space-y-6">
					<h3 className="text-xl font-medium text-gray-900 dark:text-white">
						Add College
					</h3>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="collegeName" value="College Name" />
						</div>
						<TextInput
							id="collegeName"
							className="p-2"
							name="collegeName"
							onChange={(event) => handleChange(event)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="course" value="Course" />
						</div>
						<TextInput
							id="course"
							className="p-2"
							name="course"
							onChange={(event) => handleChange(event)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="addr" value="Address" />
						</div>
						<TextInput
							id="addr"
							className="p-2"
							name="addr"
							onChange={(event) => handleChange(event)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="mobile" value="Mobile" />
						</div>
						<TextInput
							id="mobile"
							className="p-2"
							name="mobile"
							onChange={(event) => handleChange(event)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Email" />
						</div>
						<TextInput
							id="email"
							className="p-2"
							name="email"
							onChange={(event) => handleChange(event)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="collegeId" value="College Id" />
						</div>
						<TextInput
							id="collegeId"
							className="p-2"
							name="collegeId"
							onChange={(event) => handleChange(event)}
							required
						/>
					</div>
					<div className="flex justify-center">
						<button
							onClick={handleAddCollegeSubmit}
							className="text-sm font-medium bg-[#002B5B] text-white h-10 w-20 rounded-md shadow-lg"
						>
							Save
						</button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default DashBoardModal;
