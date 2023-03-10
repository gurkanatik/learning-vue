<template>
  <div class="container">
    <div class="col-12 col-md-6 mx-auto mt-2">
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h1 class="mb-0 h5">Todo List</h1>
          <div>
            <button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#add-todo-modal">
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
        </div>
        <div class="card-body">
          <todo-list getterName="pendingTodos" caption="Pending Todos" />
          <todo-list getterName="completedTodos" caption="Completed Todos" />
          <todo-list getterName="deletedTodos" caption="Deleted Todos" />
        </div>
      </div>
    </div>
  </div>
  <add-todo-modal />
</template>

<script>

import addTodoModal from "@/components/AddTodoModal.vue";
import todoList from "@/components/TodoList.vue";
export default {
  name: 'App',
  components: {
    addTodoModal,
    todoList
  }
}
</script>
