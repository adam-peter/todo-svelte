// blog/+page.server.ts
import { todos } from "../dummyData";
import { error } from '@sveltejs/kit';

export function load() {
	return {
		todos
	};
}

export const actions = {
	addTodo: async ({ request }) => {
		const data = await request.formData();
		const text = await data.get("todo");

		if (text !== null && text !== undefined) {
			todos.push({
				id: todos.length + 1,
				text: text.toString(),
				completed: false
			});
		} else {
			throw error(400, "Todo was null, try again")
		}
	},
}
