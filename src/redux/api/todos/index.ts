import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getTodos: build.query<Todos.GetTodosResponse, Todos.GetTodosRequest>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["todos"],
		}),
		deleteTodos: build.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["todos"],
		}),
    editTodos: build.mutation<Todos.EditTodosResponse, Todos.EditTodosRequest>({
      query: ({id, first_name, last_name, email, gender, ip_address}) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {first_name, last_name, email, gender, ip_address}
      }),
      invalidatesTags: ['todos']
    }),
    getItemId: build.query<Todos.GetItemIdTodosResponse, Todos.GetItemIdTodosRequest>({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: ['todos']
    }),
    postTodos: build.mutation<Todos.PostTodosResponse, Todos.PostTodosRequest>({
      query: ({last_name, first_name, email, gender, ip_address}) => ({
        url: ``,
        method: 'POST',
        body: {last_name, first_name, email, gender, ip_address}
      }),
      invalidatesTags: ['todos']
    })
	}),
});

export const { useGetTodosQuery, useDeleteTodosMutation, useEditTodosMutation, useGetItemIdQuery, usePostTodosMutation } = api;
