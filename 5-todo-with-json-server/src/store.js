import { createStore } from 'vuex'

const store = createStore({
    state: {
        todoList: [
            {id: 1, todo: "Learn Vue", status: 1},
            {id: 1, todo: "Learn Vuex", status: 0},
            {id: 1, todo: "Learn Angular", status: 0},
            {id: 1, todo: "Learn Php", status: 0},
        ]
    },
    getters: {
        completedTodos: state => state.todoList.filter((item) => item.status),
        pendingTodos: state => state.todoList.filter((item) => ! item.status),
        removedTodos: state => state.todoList.filter((item) => item.status === 2),
    }
})

export default store