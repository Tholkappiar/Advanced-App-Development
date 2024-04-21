const AdminDashboard = () => {
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
							<div
								id="hs-vertically-centered-modal"
								className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
							>
								<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
									<div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
										<div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
											<h3 className="font-bold text-gray-800 dark:text-white">
												Modal title
											</h3>
											<button
												type="button"
												className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
												data-hs-overlay="#hs-vertically-centered-modal"
											>
												<span className="sr-only">Close</span>
												<svg
													className="flex-shrink-0 size-4"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M18 6 6 18"></path>
													<path d="m6 6 12 12"></path>
												</svg>
											</button>
										</div>
										<div className="p-4 overflow-y-auto">
											<p className="text-gray-800 dark:text-neutral-400">
												This is a wider card with supporting text below as a
												natural lead-in to additional content.
											</p>
										</div>
										<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
											<button
												type="button"
												className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
												data-hs-overlay="#hs-vertically-centered-modal"
											>
												Close
											</button>
											<button
												type="button"
												className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
											>
												Save changes
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
								<button
									type="button"
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
									Add product
								</button>
								<div className="flex items-center space-x-3 w-full md:w-auto">
									<button
										id="actionsDropdownButton"
										data-dropdown-toggle="actionsDropdown"
										className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-[#002B5B] hover:bg-[#002a5be3] rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700"
										type="button"
									>
										<svg
											className="-ml-1 mr-1.5 w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												clipRule="evenodd"
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											></path>
										</svg>
										Actions
									</button>
									<button
										id="filterDropdownButton"
										data-dropdown-toggle="filterDropdown"
										className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-[#002B5B] hover:bg-[#002a5be3] rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200"
										type="button"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											className="h-4 w-4 mr-2 text-gray-400"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
												clipRule="evenodd"
											></path>
										</svg>
										Filter
										<svg
											className="-mr-1 ml-1.5 w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												clipRule="evenodd"
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full text-sm text-left text-black">
								<thead className="text-xs text-white uppercase bg-[#002B5B]">
									<tr>
										<th scope="col" className="px-2 py-3">
											ID
										</th>
										<th scope="col" className="px-4 py-4">
											Name
										</th>
										<th scope="col" className="px-4 py-3">
											College
										</th>
										<th scope="col" className="px-4 py-3">
											Mobile
										</th>
										<th scope="col" className="px-4 py-3">
											Email
										</th>
										<th scope="col" className="px-4 py-3">
											Location
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
										>
											1
										</th>
										<td className="px-4 py-3">Tholkappiar</td>
										<td className="px-4 py-3">SKCT</td>
										<td className="px-4 py-3 max-w-[12rem] truncate">
											1234567890
										</td>
										<td className="px-4 py-3">niz@ureeg.bz</td>
										<td className="px-2 py-3 flex justify-start gap-4 flex-wrap">
											<button className="bg-[#EA5455] hover:bg-[#da5e5ee6] w-20 h-8 rounded-md text-black">
												Delete
											</button>
											<button className="bg-blue-400 hover:bg-[#68b2e7df] w-20 h-8 rounded-md text-black">
												Edit
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AdminDashboard;
