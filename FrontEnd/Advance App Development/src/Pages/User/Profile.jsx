import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_ENDPOINTS } from "../../utils/Constants";

export default function Profile() {
	const [userData, setUserData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const userEmail = await axiosInstance.get(
				API_ENDPOINTS.userController.getUserEmail
			);
			const { data } = await axiosInstance.post(
				API_ENDPOINTS.userController.getUserByEmail,
				userEmail.data,
				{
					headers: {
						"Content-Type": "text/plain",
					},
				}
			);
			setUserData(data);
		};
		fetchData();
	}, []);

	return (
		<div className="py-20 bg-[#F9F5EB] h-[100vh]">
			<div className="flex justify-around ">
				<div className="w-[40%]">
					<div className="px-4 sm:px-0">
						<h3 className="text-base font-semibold leading-7 text-gray-900">
							User Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
							Personal details and application.
						</p>
					</div>
					<div className="mt-6 border-gray-100">
						<dl className="divide-y-2 divide-white">
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									Full name
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									{userData.name}
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									Mobile
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									{userData.number}
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									Email address
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									{userData.email}
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									SSLC
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									{userData.sslc}
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									HSC
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									{userData.hsc}
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
