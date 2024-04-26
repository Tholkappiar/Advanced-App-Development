import { Modal } from "flowbite-react"; // Import the Modal component
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_ENDPOINTS } from "../utils/Constants";

// eslint-disable-next-line react/prop-types
const DeleteModal = ({ modalStatus, modalClose, deleteCollege }) => {
	const handleConfirmDelete = () => {
		deleteCollege();
		modalClose();
	};

	return (
		<Modal show={modalStatus} size="md" onClose={modalClose} popup>
			<Modal.Header />
			<Modal.Body>
				<div className="text-center">
					<p className="text-lg font-semibold mb-4">
						Are you sure you want to delete?
					</p>
					<div className="flex justify-center">
						<button
							onClick={handleConfirmDelete}
							className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
						>
							Confirm Delete
						</button>
						<button
							onClick={modalClose}
							className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
						>
							Cancel
						</button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

const CollegeTable = () => {
	const [collegeData, setCollegeData] = useState([]);
	const [deleteModalStatus, setDeleteModalStatus] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axiosInstance.get(
					API_ENDPOINTS.collegeController.getAllColleges
				);
				setCollegeData(data);
			} catch (error) {
				console.error("Error fetching colleges:", error);
			}
		};
		fetchData();
	}, []);

	// Deleting the College
	const handleDelete = async (collegeId) => {
		try {
			const response = await axiosInstance.delete(
				API_ENDPOINTS.collegeController.deleteCollege(collegeId)
			);
			if (response.status === 200) {
				console.log(`College Deleted : ${collegeId}`);
			}
		} catch (error) {
			console.error("Error deleting college:", error);
		}
	};

	const handleDeleteOpenModal = () => {
		setDeleteModalStatus(true);
	};

	const handleDeleteCloseModal = () => {
		setDeleteModalStatus(false);
	};

	return (
		<div className="overflow-x-auto">
			<table className="w-full text-sm text-left text-black">
				<thead className="text-xs text-white uppercase bg-[#002B5B]">
					<tr>
						<th scope="col" className="px-2 py-3">
							S.no
						</th>
						<th scope="col" className="px-4 py-4">
							College Name
						</th>
						<th scope="col" className="px-2 py-3">
							College Id
						</th>
						<th scope="col" className="px-4 py-3">
							Course
						</th>
						<th scope="col" className="px-4 py-3">
							Addres
						</th>
						<th scope="col" className="px-4 py-3">
							Mobile
						</th>
						<th scope="col" className="px-4 py-3">
							Email
						</th>
						<th scope="col" className="px-4 py-3">
							Operation
						</th>
					</tr>
				</thead>
				<tbody>
					{collegeData.map((college, index) => (
						<tr key={college.id} className="border-b">
							<th
								scope="row"
								className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
							>
								{index + 1}
							</th>
							<td className="px-4 py-3">{college.collegeName}</td>
							<td className="px-4 py-3">{college.collegeId}</td>
							<td className="px-4 py-3 max-w-[12rem] truncate">
								{college.course}
							</td>
							<td className="px-4 py-3">{college.addr}</td>
							<td className="px-4 py-3">{college.mobile}</td>
							<td className="px-4 py-3">{college.email}</td>
							<td className="px-2 py-3 flex justify-start gap-4 flex-wrap">
								<button
									onClick={handleDeleteOpenModal}
									className="bg-[#EA5455] hover:bg-[#da5e5ee6] w-20 h-8 rounded-md text-black"
								>
									Delete
								</button>
								{deleteModalStatus && (
									<DeleteModal
										modalStatus={deleteModalStatus}
										modalClose={handleDeleteCloseModal}
										deleteCollege={() => handleDelete(college.id)} // Pass college id to delete
									/>
								)}
								<button className="bg-blue-400 hover:bg-[#68b2e7df] w-20 h-8 rounded-md text-black">
									Edit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CollegeTable;
