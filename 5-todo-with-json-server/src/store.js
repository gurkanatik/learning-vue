import { createStore } from 'vuex'

const store = createStore({
    state: {
        todoList: [
            {id: 1, todo: "Learn Vue", status: 1},
            {id: 2, todo: "Learn Vuex", status: 0},
            {id: 3, todo: "Learn Angular", status: 0},
            {id: 4, todo: "Learn Php", status: 0},
            {id: 5, todo: "Learn Java", status: 2},
        ]
    },
    getters: {
        pendingTodos: state => state.todoList.filter((item) => ! item.status),
        completedTodos: state => state.todoList.filter((item) => item.status === 1),
        deletedTodos: state => state.todoList.filter((item) => item.status === 2),
    }
})

export default store