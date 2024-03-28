/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { usePostTodosMutation } from "../../../redux/api/todos";
import scss from "./Header.module.scss";
import { createPortal } from "react-dom";
import Modal from "../../Ul/modal/Modal";
import Input from "../../Ul/input/Input";
import { Button } from "../../Ul/button/Button";

const Header = () => {
	const [postTodos] = usePostTodosMutation();
	const [first_name, setFirst_name] = useState<string>("");
	const [last_name, setLast_name] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [gender, setGender] = useState<string>("");
	const [ip_address, setIp_address] = useState<string>("");
	const [openModal, setOpenModal] = useState<boolean>(false);
	const addTodos = async () => {
		await postTodos({ first_name, last_name, email, gender, ip_address });
	};
	return (
		<>
			<header className={scss.header}>
				<div className="container">
					<div className={scss.content}>
						<h1>Todo List</h1>
						<>
							<Button onClick={() => setOpenModal(true)}>Add Todos</Button>
              
						</>
					</div>
				</div>
			</header>
			{openModal &&
				createPortal(
					<Modal>
						<div className={scss.modal}>
							<Input
								type="text"
								value={first_name}
								setData={setFirst_name}
								placeholder="first_name"
							/>
							<Input
								type="text"
								value={last_name}
								setData={setLast_name}
								placeholder="last_name"
							/>
							<Input
								type="email"
								value={email}
								setData={setEmail}
								placeholder="email"
							/>
							<Input
								type="text"
								value={gender}
								setData={setGender}
								placeholder="gender"
							/>
							<Input
								type="text"
								value={ip_address}
								setData={setIp_address}
								placeholder="ip_address"
							/>
							<div className={scss.modalButton}>
								<Button onClick={() => setOpenModal(false)}>Cancel</Button>
								<Button onClick={addTodos}>Add</Button>
							</div>
						</div>
					</Modal>,
					document.getElementById("modal") as any
				)}
		</>
	);
};

export default Header;
