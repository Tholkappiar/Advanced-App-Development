"use client";

import { useState } from "react";
import DashBoardModal from "../../Components/Modal";
import CollegeTable from "../../Components/CollegeTable";

const AdminDashboard = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [isCollegePage, setIsCollegePage] = useState(true);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<div>
			<section className="bg-[#F9F5EB] p-3 sm:p-5 antialiased h-[95vh]">
				<div className="mx-auto max-w-screen-xl px-4 lg:px-12">
					<div className="bg-[#E4DCCF] relative shadow-lg sm:rounded-lg overflow-hidden">
						<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
							<div className="w-full md:w-1/2">
								<form className="flex items-center">
									<label htmlFor="simple-search" className="sr-only ">
										Search
									</label>
									<div className="relative w-full">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<svg
												aria-hidden="true"
												className="w-5 h-5 text-white"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
													clipRule="evenodd"
												></path>
											</svg>
										</div>
										<input
											type="text"
											id="simple-search"
											className="bg-[#002B5B] border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
											placeholder="Search"
											required=""
										/>
									</div>
								</form>
							</div>

							<div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
								<button
									type="button"
									onClick={handleOpenModal}
									data-hs-overlay="#hs-vertically-centered-modal"
									className="flex items-center justify-center text-white bg-[#002B5B] hover:bg-[#002a5be3] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
								>
									<svg
										className="h-3.5 w-3.5 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											clipRule="evenodd"
											fillRule="evenodd"
											d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
										></path>
									</svg>
									Add College
								</button>
								{modalOpen && (
									<DashBoardModal
										modalStatus={modalOpen}
										modalClose={handleCloseModal}
									/>
								)}
								<div className="flex items-center space-x-3 w-full md:w-auto">
									<button
										onClick={() => {
											setIsCollegePage(false);
										}}
										id="actionsDropdownButton"
										data-dropdown-toggle="actionsDropdown"
										className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-[#002B5B] hover:bg-[#002a5be3] rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700"
										type="button"
									>
										Students
									</button>
								</div>
								<div className="flex items-center space-x-3 w-full md:w-auto">
									<button
										onClick={() => {
											setIsCollegePage(true);
										}}
										id="actionsDropdownButton"
										data-dropdown-toggle="actionsDropdown"
										className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-[#002B5B] hover:bg-[#002a5be3] rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700"
										type="button"
									>
										College
									</button>
								</div>
							</div>
						</div>
						{isCollegePage ? <CollegeTable /> : <div>thols</div>}
					</div>
				</div>
			</section>
		</div>
	);
};

export default AdminDashboard;
