import React, { useState } from "react";
import {
	useDeleteTodosMutation,
	useEditTodosMutation,
	useGetTodosQuery,
} from "../../../redux/api/todos";
import scss from "./NewTodoList.module.scss";
import Input from "../../Ul/input/Input";
import { Link } from "react-router-dom";
import { Button } from "../../Ul/button/Button";

const NewTodoList = () => {
	const [deleteTodos] = useDeleteTodosMutation();
	const { data, isLoading } = useGetTodosQuery();
	const [editTodos] = useEditTodosMutation();
	const [isEditResult, setIsEditResult] = useState<null | number>(null);
	const [first_name, setFirst_name] = useState<string>("");
	const [last_name, setLast_name] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [gender, setGender] = useState<string>("");
	const [ip_address, setIp_address] = useState<string>("");
	const deleteTodoList = async (id: number) => {
		console.log(id);

		await deleteTodos(id);
	};
	function editResult(id: number) {
		setIsEditResult(id);
	}
	const editTodosResult = async (id: number) => {
		await editTodos({ id, first_name, last_name, email, gender, ip_address });
		setIsEditResult(null);
	};
	return (
		<div className={scss.newTodoList}>
			<div className="container">
				<div className={scss.content}>
					{isLoading ? (
						<h1>Is Loading...</h1>
					) : (
						data?.map((item) => (
							<div className={scss.cards} key={item.id}>
								{isEditResult === item.id ? (
									<>
										<Input
											value={first_name}
											setData={setFirst_name}
											type="text"
											placeholder="first_name"
										/>
										<Input
											value={last_name}
											setData={setLast_name}
											type="text"
											placeholder="last_name"
										/>
										<Input
											value={email}
											setData={setEmail}
											type="email"
											placeholder="email"
										/>
										<Input
											value={gender}
											setData={setGender}
											type="text"
											placeholder="gender"
										/>
										<Input
											value={ip_address}
											setData={setIp_address}
											type="text"
											placeholder="ip_address"
										/>
										<div className={scss.editResult}>
											<Button onClick={() => setIsEditResult(null)}>
												Cancel
											</Button>
											<Button onClick={() => editTodosResult(item.id)}>
												Save
											</Button>
										</div>
									</>
								) : (
									<>
										<Link to={`/${item.id}`}>{item.first_name}</Link>
										<h2>{item.last_name}</h2>
										<p>{item.email}</p>
										<p>{item.gender}</p>
										<p>{item.ip_address}</p>
										<div className={scss.buttons}>
											<Button onClick={() => editResult(item.id)}>Edit</Button>
											<Button onClick={() => deleteTodoList(item.id)}>
												delete
											</Button>
										</div>
									</>
								)}
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default NewTodoList;
