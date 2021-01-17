const { Todos } = require('./Todo')

const todos = new Todos()

// method chaining

todos
.add('O\'zbekiston')
.add('Do work')
.add('Do work')

for (let todo of todos) {

	// console.log(todo)
}

Array.from(todos).map(todo => console.log(todo))

// todos.setStatus(2, 1)	// error