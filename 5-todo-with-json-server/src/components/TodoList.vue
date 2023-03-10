<template>
  <h2 class="h5 mb-2">
    {{ caption }}
  </h2>
  <ul class="list-group mb-4" v-if="todoListItems.length > 0">
    <li class="list-group-item d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap"
        :class="{completed: item.status === 1, pending: item.status === 0, deleted: item.status === 2}"
        v-for="item in todoListItems"
        :key="item.id">
      <span class="text-truncate w-50">{{ item.todo }}</span>
      <div class="w-100 d-flex align-items-center justify-content-end flex-wrap flex-lg-nowrap">
        <button class="btn btn-sm btn-success mt-2 mx-0 mt-xl-0 mx-lg-1"
                v-if="item.status !== 1"
                @click="changeTodoStatus(item.id, 1)">
          <font-awesome-icon icon="fa-solid fa-check" />
          Completed
        </button>
        <button class="btn btn-sm btn-warning mt-2 mx-0 mt-xl-0 mx-lg-1"
                v-if="item.status !== 0"
                @click="changeTodoStatus(item.id, 0)">
          <font-awesome-icon icon="fa-solid fa-spinner fa-spin" class="fa-spin" />
          Pending
        </button>
        <button class="btn btn-sm btn-danger mt-2 mx-0 mt-xl-0 mx-lg-1"
                v-if="item.status !== 2"
                @click="changeTodoStatus(item.id, 2)">
          <font-awesome-icon icon="fa-solid fa-trash" />
          Deleted
        </button>
      </div>
    </li>
  </ul>
  <div v-else class="alert alert-warning p-2">No item</div>
</template>

<script>
export default {
  props: {
    getterName: String,
    caption: String
  },
  methods: {
    changeTodoStatus(id, status){
      fetch('http://localhost:3000/todoList/' + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({status: status})
      })
          .then((response) => response.json())
          .then((response) => {
            let todoIndex = this.$store.state.todoList.findIndex((item) => item.id === id)
            this.$store.state.todoList[todoIndex] = response
          })


    }
  },
  computed: {
    todoListItems(){
      return this.$store.getters[this.getterName]
    }
  }
}
</script>