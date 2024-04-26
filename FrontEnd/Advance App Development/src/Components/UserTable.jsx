const UserTable = () => {
	return (
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
						<td className="px-4 py-3 max-w-[12rem] truncate">1234567890</td>
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
	);
};

export default UserTable;
