import { createStore } from 'vuex'

const store = createStore({
    state: {
        todoList: []
    },
    getters: {
        pendingTodos: state => state.todoList.filter((item) => ! item.status),
        completedTodos: state => state.todoList.filter((item) => item.status === 1),
        deletedTodos: state => state.todoList.filter((item) => item.status === 2),
    }
})

export default store