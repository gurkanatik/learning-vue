<template>
  <div class="modal fade" id="add-todo-modal" tabindex="-1" aria-labelledby="add-todo-modal-label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="add-todo-modal-label">Add a new todo item</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input type="text" class="form-control" @keyup.enter="addNewTodo" ref="newTodoInput">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-sm btn-success" @click="addNewTodo">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const newTodoInput = ref(null)

    return {
      newTodoInput
    }
  },
  methods: {
    addNewTodo() {
      let todo = {id: new Date().getTime(), todo: this.newTodoInput.value, status: 0}
      fetch('http://localhost:3000/todoList', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
      })
          .then((response) => response.json())
          .then((response) => {
            this.$store.state.todoList.push(response)
            this.newTodoInput.value = ''
            this.$swal({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'New todo added!',
              showConfirmButton: false,
              timer: 1500
            });
          })
    }
  }
}
</script>