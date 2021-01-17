class Todo {
	id;
	caption;
	status;

	constructor(id, caption, status = 0) {
		this.id = id;
		this.caption = caption;
		this.status = status;
	}

	setStatus(status) {
		this.status = status;
	}
}

class Todos {
	#db = [];
	#lastId = 0;

	constructor() {}

	add(todoCaption) {
		const newTodo = new Todo(++this.#lastId, todoCaption);
		this.#db.push(newTodo);
		return this;
	}

	remove(todoId) {
		if (todoId > this.#db.length) return this;

		this.#db.splice(
			this.#db.findIndex((todo) => todo.id === todoId),
			1
		);
		return this;
	}

	setStatus(todoId, status) {
		this.#db.find((todo) => todo.id === todoId).setStatus(status);
		return this;
	}

	get todos() {
		return this.#db;
	}

	[Symbol.iterator]() {
		let seq = 0;
		let array = this.#db;
		let len = array.length;

		return {
			next: function () {
				return {
					value: array[seq],
					done: seq++ === len,
				};
			},
		};
	}
}

module.exports.Todos = Todos;
