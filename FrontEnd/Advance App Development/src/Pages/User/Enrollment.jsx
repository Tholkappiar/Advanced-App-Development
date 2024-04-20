import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_ENDPOINTS } from "../../utils/Constants";

const Enrollment = () => {
	const { collegeName, courseName } = useParams();

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		fatherName: "",
		email: "",
		gender: "",
		mobile: "",
		dob: "",
		age: "",
		sslc: "",
		hsc: "",
		country: "India",
		address: "",
		collegeName: collegeName,
		courseName: courseName,
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosInstance.post(
				API_ENDPOINTS.enrollCourseController.enrollStudent,
				formData
			);
			if (response.status === 200) {
				navigate("/makePayment");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<div className="flex justify-around bg-[#F9F5EB]">
			<form className="w-6/12 py-12">
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Personal Information
						</h2>

						<p className="mt-1 text-sm leading-6 text-gray-600">
							This information will be displayed publicly so be careful what you
							share.
						</p>
						<div className="col-span-ful pt-8">
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Photo
							</label>
							<div className="mt-2 flex items-center gap-x-3">
								<UserCircleIcon
									className="h-12 w-12 text-white"
									aria-hidden="true"
									id="photo"
								/>
								<button
									type="button"
									className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									Change
								</button>
							</div>
						</div>
						<div className="pb-12">
							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label
										htmlFor="name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Name
									</label>
									<div className="mt-2">
										<input
											value={formData.name}
											onChange={handleChange}
											type="text"
											name="name"
											id="name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="father"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Father Name
									</label>
									<div className="mt-2">
										<input
											value={formData.fatherName}
											onChange={handleChange}
											type="text"
											name="fatherName"
											id="father"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											value={formData.email}
											onChange={handleChange}
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="gender"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Gender
									</label>
									<div className="mt-2">
										<input
											value={formData.gender}
											onChange={handleChange}
											type="text"
											name="gender"
											id="gender"
											autoComplete="gender"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="mobile"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Mobile
									</label>
									<div className="mt-2">
										<input
											value={formData.mobile}
											onChange={handleChange}
											type="number"
											name="mobile"
											pattern="[0-9]{10}"
											placeholder="987654xxxx"
											id="mobile"
											autoComplete="mobile"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="dob"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										DOB
									</label>
									<div className="mt-2">
										<input
											value={formData.dob}
											onChange={handleChange}
											type="date"
											name="dob"
											id="dob"
											autoComplete="gender"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="Age"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Age
									</label>
									<div className="mt-2">
										<input
											value={formData.age}
											onChange={handleChange}
											type="number"
											min={10}
											max={100}
											name="age"
											id="age"
											autoComplete="age"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-3 flex w-10/12 space-x-4">
									<div className="sm:col-span-2 sm:col-start-1">
										<label
											htmlFor="sslc"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											SSLC %
										</label>
										<div className="mt-2">
											<input
												value={formData.sslc}
												onChange={handleChange}
												type="number"
												min={0}
												max={100}
												name="sslc"
												id="sslc"
												autoComplete="sslc"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>

									<div className="sm:col-span-2 sm:col-start-1">
										<label
											htmlFor="hsc"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											HSC %
										</label>
										<div className="mt-2">
											<input
												value={formData.hsc}
												onChange={handleChange}
												type="number"
												min={0}
												max={100}
												name="hsc"
												id="hsc"
												autoComplete="hsc"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label
										htmlFor="country"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Nationality
									</label>
									<div className="mt-2">
										<select
											value={formData.country}
											onChange={handleChange}
											id="country"
											name="country"
											autoComplete="country-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
										>
											<option>India</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
									</div>
								</div>

								<div className="col-span-full">
									<label
										htmlFor="address"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Address
									</label>
									<div className="mt-2">
										<input
											value={formData.address}
											onChange={handleChange}
											type="text"
											name="address"
											id="address"
											autoComplete="address"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-6 flex items-center justify-end gap-x-6">
					<Link to={"/makePayment"}>
						<button
							type="button"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Cancel
						</button>
					</Link>

					<button
						onClick={handleSubmit}
						className="rounded-md bg-[#EA5455] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e36a6af2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-2"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default Enrollment;
