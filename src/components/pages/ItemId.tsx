import { useNavigate, useParams } from "react-router";
import scss from "./ItemId.module.scss";
import { useGetItemIdQuery } from "../../redux/api/todos";
import { Button } from "../Ul/button/Button";
export const ItemId = () => {
	const { id } = useParams();
	const { data } = useGetItemIdQuery(id!);
	const navigate = useNavigate();
	console.log(data);

	return (
		<section>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.card}>
						<Button onClick={() => navigate("/")}>назат</Button>
						<h1>{data?.first_name}</h1>
						<h2>{data?.last_name}</h2>
						<p>{data?.email}</p>
						<p>{data?.gender}</p>
						<p>{data?.ip_address}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
