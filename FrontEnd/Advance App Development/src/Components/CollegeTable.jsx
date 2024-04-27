/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_ENDPOINTS } from "../utils/Constants";
import DashBoardModal from "./Modal";

const DeleteModal = ({ modalStatus, modalClose, deleteCollege }) => {
	const handleConfirmDelete = () => {
		deleteCollege();
		modalClose();
		window.location.reload();
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

const CollegeTable = ({ collegeName = false }) => {
	const [collegeData, setCollegeData] = useState([]);
	const [deleteModalStatus, setDeleteModalStatus] = useState({});
	const [editModalStatus, setEditModalStatus] = useState({});
	const [selectedCollege, setSelectedCollege] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!collegeName) {
				try {
					const { data } = await axiosInstance.get(
						API_ENDPOINTS.collegeController.getAllColleges
					);
					setCollegeData(data);
				} catch (error) {
					console.error("Error fetching colleges:", error);
				}
			} else {
				try {
					const { data } = await axiosInstance.get(
						API_ENDPOINTS.collegeController.getCollegeByName(collegeName)
					);
					setCollegeData(data);
				} catch (error) {
					console.error("Error fetching colleges:", error);
				}
			}
		};
		fetchData();
	}, [collegeName]);

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

	const handleDeleteOpenModal = (collegeId) => {
		setDeleteModalStatus((prevStatus) => ({
			...prevStatus,
			[collegeId]: true,
		}));
	};

	const handleDeleteCloseModal = (collegeId) => {
		setDeleteModalStatus((prevStatus) => ({
			...prevStatus,
			[collegeId]: false,
		}));
	};

	const handleEditOpenModal = (college) => {
		setSelectedCollege(college);
		setEditModalStatus((prevStatus) => ({
			...prevStatus,
			[college.id]: true,
		}));
	};

	const handleEditCloseModal = () => {
		setEditModalStatus((prevStatus) => ({
			...prevStatus,
			[selectedCollege.id]: false,
		}));
		setSelectedCollege(null);
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
									onClick={() => handleDeleteOpenModal(college.id)}
									className="bg-[#EA5455] hover:bg-[#da5e5ee6] w-20 h-8 rounded-md text-black"
								>
									Delete
								</button>
								{deleteModalStatus[college.id] && (
									<DeleteModal
										modalStatus={true}
										modalClose={() => handleDeleteCloseModal(college.id)}
										deleteCollege={() => handleDelete(college.id)}
									/>
								)}
								<button
									onClick={() => handleEditOpenModal(college)}
									className="bg-blue-400 hover:bg-[#68b2e7df] w-20 h-8 rounded-md text-black"
								>
									Edit
								</button>
								{editModalStatus[college.id] && (
									<DashBoardModal
										modalStatus={true}
										modalClose={handleEditCloseModal}
										updateCollege={true}
										updateCollegeData={college}
										updateCollegeId={college.id}
									/>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CollegeTable;
