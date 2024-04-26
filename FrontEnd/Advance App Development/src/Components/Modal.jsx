"use client";

import { Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

const DashBoardModal = ({ modalStatus, modalClose }) => {
	const [email, setEmail] = useState("");
	const [openModal, setOpenModal] = useState(true);
	// console.log(modalClose);
	useEffect(() => {
		setOpenModal(modalStatus);
	}, [modalStatus]);

	function onCloseModal() {
		setOpenModal(false);
		modalClose();
		setEmail("");
	}

	return (
		<Modal show={openModal} size="md" onClose={onCloseModal} popup>
			<Modal.Header />
			<Modal.Body>
				<div className="space-y-6">
					<h3 className="text-xl font-medium text-gray-900 dark:text-white">
						Add College
					</h3>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email" value="College" />
						</div>
						<TextInput
							id="text"
							className="p-2"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Course" />
						</div>
						<TextInput
							id="text"
							className="p-2"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Address" />
						</div>
						<TextInput
							id="text"
							className="p-2"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Mobile" />
						</div>
						<TextInput
							id="text"
							className="p-2"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
					</div>
					<div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
						Not registered?&nbsp;
						<a
							href="#"
							className="text-cyan-700 hover:underline dark:text-cyan-500"
						>
							Create account
						</a>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default DashBoardModal;
