/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Todos {
	type GetTodosRequest = void
  type GetTodosResponse = {
    id: number;
		first_name: string;
		last_name: string;
		email: string;
		gender: string;
    ip_address: string
  }[];

	type GetItemIdTodosRequest = string
  type GetItemIdTodosResponse = {
    id: number;
		first_name: string;
		last_name: string;
		email: string;
		gender: string;
    ip_address: string
  };

	type EditTodosRequest = {
		id: number;
		first_name: string;
		last_name: string;
		email: string;
		gender: string;
    ip_address: string
	};
  type EditTodosResponse = {
    id: number;
		first_name: string;
		last_name: string;
		email: string;
		gender: string;
    ip_address: string
  }[];

  type PostTodosRequest = {
    first_name: string;
		last_name: string;
		email: string;
		gender: string;
    ip_address: string
  };
  type PostTodosResponse = {
    id: number
    first_name: string;
		last_name: string;
		email: string;
		gender: string;
    ip_address: string
  };
}
