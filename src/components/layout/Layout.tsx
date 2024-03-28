import { Route, Routes } from "react-router";
import scss from "./Layout.module.scss";
import NewTodoList from "./newTodoList/NewTodoList";
import { ItemId } from "../pages/ItemId";
import Header from "./header/Header";

export const Layout = () => {
	return (
		<div className={scss.layout}>
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={	<NewTodoList />}/>
        <Route path="/:id" element={<ItemId/>}/>
      </Routes>
      </main>
		</div>
	);
};
