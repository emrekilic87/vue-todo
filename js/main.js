var app = new Vue({
	el: '#app',
	data: {
		newTodo: '',
		todos: []
	},
	methods: {
		addTodo (todo) {
            if (this.newTodo != '' && this.newTodo != null) {
                this.todos.push(todo)
                this.newTodo = ''    
            } 			
		},
		removeTodo (index) {
			this.todos.splice(index, 1)
		},
		clearAll () {
			this.todos = []
		}
	}
})